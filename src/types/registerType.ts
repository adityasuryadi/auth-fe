interface IRegister {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  password: string;
  password_confirmation: string;
}

interface ISuccessRegisterResponse {
  response_code: number;
  status: string;
  message: string;
  data: any;
}

interface IFailedRegisterResponse {
  response_code: number;
  status: string;
  message: string;
  data: any;
}
export {
  type IRegister,
  type IFailedRegisterResponse,
  type ISuccessRegisterResponse,
};
