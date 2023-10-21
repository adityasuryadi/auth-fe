import axios from "axios";
import {
  type FailedLoginResponse,
  type LoginRequest,
  type LoginResponse,
  type RefreshTokenResponse,
  type SuccessLoginResponse,
} from "./type";

const BASE_URL = "http://localhost:5001/";

const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

authApi.defaults.headers.common["Content-Type"] = "application/json";
authApi.interceptors.request.use(
  async (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem(
      "access_token"
    )}`;
    config.withCredentials = true;
    return config;
  },
  (error: Error) => {
    return Promise.reject(error);
  }
);

authApi.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    try {
      if (error.response.status == 401) {
        const response = await refreshToken();
        await localStorage.setItem("access_token", response.data.access_token);
      }
      return authApi(error.config);
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

const refreshToken = async () => {
  const response = await authApi.get<RefreshTokenResponse>("token");
  return response.data;
};

const loginApi = async (request: LoginRequest) => {
  const response = await authApi.post<
    SuccessLoginResponse | FailedLoginResponse
  >("login", request);
  return response;
};

export { loginApi, refreshToken, authApi };
