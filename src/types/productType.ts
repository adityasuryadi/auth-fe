interface ICreateProductRequest {
  name: string;
  price: number;
  qty: number;
  description: string;
}

interface ISuccessCreateProductResponse {
  response_code: number;
  status: string;
  message: string;
  data: any;
}

export { type ICreateProductRequest, type ISuccessCreateProductResponse };
