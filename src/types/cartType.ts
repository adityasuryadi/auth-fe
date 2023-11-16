export interface IAddCartRequest {
  product_id: string;
}

export interface ISuccessAddCartResponse {
  code: number;
  status: string;
  message: string;
  data: any;
}

export interface ISuccessGetCartResponse {
  code: number;
  status: string;
  message: string;
  data: any;
}
