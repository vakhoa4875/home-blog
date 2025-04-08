// src/context/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { clearTokens, getAccessToken, saveTokens } from "../config/tokenStorage";

interface AuthContextType {
  isAuthenticated: boolean;
  accessToken: string | null;
  login: (accessToken: string, refreshToken: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | null>(getAccessToken());

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setAccessToken(token);
    }
  }, []);


  const login = (accessToken: string, refreshToken: string) => {
    saveTokens(accessToken, refreshToken);
    setAccessToken(accessToken);
  };

  const logout = () => {
    clearTokens();
    setAccessToken(null);
  };


  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!accessToken,
        accessToken,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
