import axios from "axios";
import {
  type ICreateProductRequest,
  type ISuccessCreateProductResponse,
} from "@/types/productType";

const BASE_URL = "http://localhost:8000/product-service";

const productApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

const postProduct = async (request: ICreateProductRequest) => {
  productApi.post<ISuccessCreateProductResponse>("/create", request);
};

interface IProductsResponse {
  response_code: number;
  status: string;
  message: string;
  data: any;
}

const getProducts = async () => {
  const response = productApi.get<IProductsResponse>("/products");
  return response;
};

export { postProduct, getProducts };
