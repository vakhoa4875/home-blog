// src/modules/auth/services/authService.ts
import api from "../../../config/axiosInstance";
import { saveAuthTokens } from "../../../config/tokenStorage";

export interface TokenResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  refresh_expires_in: number;
  token_type: string;
  scope: string;
}

/**
 * Gọi API để trao đổi mã `code` từ Google (qua Keycloak) lấy token.
 * @returns Token hoặc null nếu thất bại
 */
export const handleOAuthCallback = async (): Promise<TokenResponse | null> => {
  try {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    const state = params.get("state");

    if (!code) {
      console.error("❌ OAuth code not found in the URL");
      return null;
    }

    const response = await api.post<TokenResponse>("/auth/oauth/token", {
      code,
      state,
    });

    const tokenData = response.data;
    saveAuthTokens(tokenData);
    return tokenData;
  } catch (error) {
    console.error("🚨 Error fetching token from OAuth callback:", error);
    return null;
  }
};

/**
 * Gửi yêu cầu refresh access token
 */
export const refreshTokenRequest = (refreshToken: string) => {
  return api.post<TokenResponse>("/auth/token/refresh", {
    refresh_token: refreshToken,
  });
};

/**
 * Đăng xuất người dùng và chuyển hướng về trang logout của Keycloak
 */
export const logoutRedirect = () => {
  const logoutUrl = import.meta.env.VITE_KEYCLOAK_LOGOUT_URL;
  const redirectUri = encodeURIComponent(window.location.origin);
  window.location.href = `${logoutUrl}?redirect_uri=${redirectUri}`;
};

