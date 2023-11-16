export interface ICart {
  id: string;
  product_id: string;
  name: string;
  qty: number;
  product_price: number;
}

export interface ISuccessResponse {
  code: number;
  status: string;
  message: string;
  data: ICart;
}
