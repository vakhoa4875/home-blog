// src/modules/auth/services/authService.ts
import api from "../../../config/axiosInstance";
import { clearAuth, getAuth, saveAuthTokens } from "../../../config/tokenStorage";

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
    console.log("✅ Token received:", tokenData);

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
 * Gửi yêu cầu logout đến Keycloak
 * @returns Promise<void>
 */
export const logout = () => {
  api.post("/auth/oauth/logout", {
    refresh_token: getAuth()?.refresh_token,
  }).catch((error) => {
    console.error("🚨 Error during logout:", error);
  }).then(() => {
    clearAuth(); // Xóa thông tin xác thực từ local storage  
  });
};

