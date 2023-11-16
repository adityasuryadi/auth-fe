import type {
  IAddCartRequest,
  ISuccessAddCartResponse,
  ISuccessGetCartResponse,
} from "@/types/cartType";
import { authApi } from "./authApi";
import axios from "axios";

const BASE_URL = "http://localhost:8000/cart-service/";

const cartApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

const addCart = async (productId: string | undefined) => {
  console.warn("product id", productId);
  const response = authApi.post<ISuccessAddCartResponse>("/cart-service/cart", {
    product_id: productId,
  });
  return response;
};

const getCart = async () => {
  const response = authApi.get<ISuccessGetCartResponse>("/cart-service/carts");
  return response;
};

const removeCart = async (product_id: string) => {
  const response = authApi.delete<ISuccessGetCartResponse>(
    "/cart-service/cart/" + product_id
  );
  return response;
};

const decrementQty = async (product_id: string) => {
  const response = authApi.put<ISuccessGetCartResponse>(
    "/cart-service/cart/" + product_id + "/decrement"
  );
  return response;
};

const incrementQty = async (product_id: string) => {
  const response = authApi.put<ISuccessGetCartResponse>(
    "/cart-service/cart/" + product_id + "/increment"
  );
  return response;
};

export { addCart, getCart, removeCart, decrementQty, incrementQty };
