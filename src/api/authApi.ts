import axios from "axios";
import {
  type FailedLoginResponse,
  type LoginRequest,
  type RefreshTokenResponse,
  type SuccessLoginResponse,
} from "./type";
import type {
  IRegister,
  IFailedRegisterResponse,
  ISuccessRegisterResponse,
} from "@/types/registerType";
import router from "@/routes";

const BASE_URL = "http://localhost:8000";

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
      const originalRequest = error.config;
      if (
        error.response.status === 401 &&
        !originalRequest._retry &&
        (localStorage.getItem("access_token") == null ||
          localStorage.getItem("access_token") == undefined)
      ) {
        router.push("/login");
      }

      if (
        error.response.status === 401 &&
        !originalRequest._retry &&
        (localStorage.getItem("access_token") != null ||
          localStorage.getItem("access_token") != undefined)
      ) {
        originalRequest._retry = true;
        const response = await refreshToken();
        await localStorage.setItem("access_token", response.data.access_token);
        return await authApi(originalRequest);
      }

      return Promise.reject(error);
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

const refreshToken = async () => {
  const response = await authApi.get<RefreshTokenResponse>(
    "/auth-service/token"
  );
  return response.data;
};

const loginApi = async (request: LoginRequest) => {
  const response = await authApi.post<
    SuccessLoginResponse | FailedLoginResponse
  >("/auth-service/login", request);
  return response;
};

const registerApi = async (request: IRegister) => {
  const response = await authApi.post<
    ISuccessRegisterResponse | IFailedRegisterResponse
  >("/auth-service/register", request);
  return response;
};

export { loginApi, refreshToken, authApi, registerApi };
