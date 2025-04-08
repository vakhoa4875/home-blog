// src/config/axiosInstance.ts
import axios from "axios";
import { TokenResponse, refreshTokenRequest } from "../modules/auth/services/authService";
import {
  getAuth,
  saveAuthTokens,
  clearAuth,
} from "./tokenStorage";

const api = axios.create({
  baseURL: "http://localhost:8888", // Cấu hình endpoint của bạn
});

// Thêm access_token vào mỗi request
api.interceptors.request.use((config) => {
  const auth = getAuth();
  if (auth?.access_token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${auth.access_token}`;
  }
  return config;
});

// Xử lý tự động refresh khi gặp lỗi 401
api.interceptors.response.use(
  (response) => response,
  async (error: any) => {
    const originalRequest = error.config as any;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      const auth = getAuth();

      if (!auth || !auth.refresh_token) {
        clearAuth(); // Tự động logout nếu không có refresh token
        return Promise.reject(error);
      }

      // Kiểm tra hạn refresh token
      const now = Date.now();
      if (auth.refresh_expires_at < now) {
        clearAuth(); // Token hết hạn hoàn toàn, logout
        return Promise.reject(error);
      }

      try {
        const res = await refreshTokenRequest(auth.refresh_token);
        const newToken = res.data as TokenResponse;
        saveAuthTokens(newToken);

        // Gắn lại token vào request ban đầu
        originalRequest.headers.Authorization = `Bearer ${newToken.access_token}`;
        return api(originalRequest); // Retry request
      } catch (refreshError) {
        clearAuth();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
