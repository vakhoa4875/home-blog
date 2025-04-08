import axios from "axios";
import { TokenResponse } from "../modules/auth/services/authService";
import { getAccessToken, getRefreshToken, saveAccessToken } from "./tokenStorage";

// Định nghĩa Axios instance
const api = axios.create({
    baseURL: "http://localhost:8888/graphql", // API riêng của bạn
});

// Gắn token trước mỗi request
api.interceptors.request.use((config) => {
    const token = getAccessToken();
    if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Refresh token nếu bị 401
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (
            error.response?.status === 401 &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;

            const refreshToken = getRefreshToken();
            if (!refreshToken) return Promise.reject(error);

            try {
                const res = await axios.post<TokenResponse>("http://localhost:8888/auth/token/refresh", {
                    refresh_token: refreshToken,
                });

                const newAccessToken = res.data.access_token;
                saveAccessToken(newAccessToken);

                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                return api(originalRequest);
            } catch (refreshError) {
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default api;
