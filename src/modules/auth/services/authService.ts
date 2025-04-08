// services/authService.ts
import axios from "axios";

export interface TokenResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  refresh_expires_in: number;
  token_type: string;
  scope: string;
}

export const loginWithKeycloak = async (username: string, password: string) => {
  const params = {
    username,
    password
  };

  try {
    const res = await axios.post<TokenResponse>("http://localhost:8888/auth/token", params);
    return res.data;
  } catch (error) {
    console.error("Error during loginWithKeycloak:", error);
    throw new Error("Failed to login with Keycloak");
  }
};

