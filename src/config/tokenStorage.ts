import { jwtDecode } from "jwt-decode";
import { TokenResponse } from "../modules/auth/services/authService";

export const saveAuthTokens = (token: TokenResponse) => {
  const decoded: any = jwtDecode(token.access_token);
  const { email, name, roles } = decoded;

  const auth = {
    access_token: token.access_token,
    refresh_token: token.refresh_token,
    expires_at: Date.now() + token.expires_in * 1000,
    refresh_expires_at: Date.now() + token.refresh_expires_in * 1000,
    user: { email, name, roles }
  };

  sessionStorage.setItem("auth", JSON.stringify(auth));
};

export const getAuth = () => {
  const data = sessionStorage.getItem("auth");
  return data ? JSON.parse(data) : null;
};

export const getCurrentUser = () => getAuth()?.user || null;

export const isAuthenticated = () => {
  const auth = getAuth();
  return auth && auth.expires_at > Date.now();
};

export const decodeToken = (token: string) => {
  try {
    return jwtDecode(token);
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};

export const clearAuth = () => sessionStorage.removeItem("auth");
