// src/context/AuthContext.tsx
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import {
  getAuth,
  saveAuthTokens,
  clearAuth,
  isAuthenticated,
  getCurrentUser,
} from "../config/tokenStorage";
import { logoutRedirect, refreshTokenRequest, TokenResponse } from "../modules/auth/services/authService"; // bạn cần có hàm này

interface AuthContextType {
  isAuthenticated: boolean;
  accessToken: string | null;
  user: {
    email: string;
    name: string;
    roles: string[];
  } | null;
  login: (tokenResponse: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | null>(
    getAuth()?.access_token || null
  );
  const [user, setUser] = useState<AuthContextType["user"]>(
    getCurrentUser()
  );

  // Refresh token nếu hết hạn
  useEffect(() => {
    const auth = getAuth();
    if (!auth) return;

    const now = Date.now();

    // Nếu access token hết hạn nhưng refresh token còn
    if (auth.expires_at < now && auth.refresh_expires_at > now) {
      refreshTokenRequest(auth.refresh_token)
        .then((res) => {
          let data = res.data as TokenResponse;
          saveAuthTokens(data); // cập nhật lại
          setAccessToken(data.access_token);
          setUser(getCurrentUser());
        })
        .catch((err) => {
          console.warn("Failed to refresh token", err);
          logout();
        });
    }

    // Nếu refresh token cũng hết → logout
    if (auth.refresh_expires_at < now) {
      logout();
    }
  }, []);

  const login = useCallback((tokenResponse: any) => {
    saveAuthTokens(tokenResponse);
    const auth = getAuth();
    setAccessToken(auth?.access_token || null);
    setUser(getCurrentUser());
  }, []);

  const logout = useCallback(() => {
    clearAuth();
    setAccessToken(null);
    setUser(null);
    logoutRedirect();
  }, []);

  const contextValue = useMemo(
    () => ({
      isAuthenticated: isAuthenticated(),
      accessToken,
      user,
      login,
      logout,
    }),
    [accessToken, user, login, logout]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
