import axios from "axios";
import { defineStore } from "pinia";
import { type IUser } from "@/api/type";
import {
  getCart,
  addCart,
  removeCart,
  decrementQty,
  incrementQty,
} from "@/api/cartApi";

export const useCartStore = defineStore({
  id: "cartStore",
  state: () => ({
    carts: [],
    test: [],
  }),
  getters: {
    getCarts: (state) => state.carts,
    totalCarts: (state) => state.carts.length,
  },
  actions: {
    async fetchCart() {
      try {
        const response = await getCart();
        this.carts = response.data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async addCart(productId: string | undefined) {
      try {
        const response = await addCart(productId);
        const index = this.carts.findIndex(
          (cart) => cart.product_id === productId
        );
        console.warn(index);
        if (response.data.code == 200 && index === -1) {
          this.carts.push(response.data.data);
        }

        if (response.data.code == 200 && index !== -1) {
          this.incrementQtyProduct(this.carts[index].id);
        }

        // check if item exist
      } catch (error) {
        console.log(error);
      }
    },
    async removeProductFromCart(id: string | undefined) {
      try {
        const response = await removeCart(id);
        if (response.data.code == 200) {
          let index = this.carts
            .map((x) => {
              return x.id;
            })
            .indexOf(id);

          this.carts.splice(index, 1);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async incrementQtyProduct(id: string) {
      try {
        const response = await incrementQty(id);
        if (response.data.code == 200) {
          const index = this.carts.findIndex((cart) => cart.id === id);
          if (index !== -1) {
            this.carts[index].qty += 1;
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    async decrementQtyProduct(id: string) {
      try {
        const response = await decrementQty(id);
        if (response.data.code == 200) {
          const index = this.carts.findIndex((cart) => cart.id === id);
          if (index !== -1) {
            this.carts[index].qty -= 1;
            this.carts[index].total_price =
              this.carts[index].total_price -
              this.carts[index].total_price * (this.carts[index].qty - 1);
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});
