export interface SuccessLoginResponse {
  response_code: number;
  status: string;
  message: string;
  data: {
    access_token: string;
    refresh_token: string;
  };
}

export interface FailedLoginResponse {
  response_code: number;
  status: string;
  message: string;
  data: any;
}

export interface RefreshTokenResponse {
  response_code: number;
  status: string;
  message: string;
  data: {
    access_token: string;
  };
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
}
