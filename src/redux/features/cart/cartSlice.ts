import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

type TProduct = {
  _id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  ratings: number;
  quantity: number;
};

type TCartItems = TProduct & { selectedQuantity: number };

type TCartState = {
  products: TCartItems[];
  total: number;
  grandTotal: number;
};

const initialState: TCartState = {
  products: [],
  total: 0,
  grandTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.products.find(
        (item) => item._id === action.payload._id
      );

      if (existingProduct) {
        state.products = state.products.map((item) =>
          item._id === existingProduct._id
            ? { ...item, selectedQuantity: item.selectedQuantity + 1 }
            : item
        );
      } else {
        state.products.push({ ...action.payload, selectedQuantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload
      );
    },

    changeProductQUantity: (state, action) => {
      state.products = state.products.map((item) =>
        item._id === action.payload._id
          ? {
              ...item,
              selectedQuantity: action.payload.selectedQuantity,
            }
          : item
      );
    },
    clearCart: (state) => {
      state.products = [];
    },
  },
});

export const selectItemQuantity = (state: RootState, productId: string) => {
  const item = state.cart.products.find((product) => product._id === productId);
  return item ? item.selectedQuantity : 0;
};

export const selectGrandTotalPrice = (state: RootState) => {
  return state.cart.products.reduce((total, item) => {
    return Number(total + item.price * item.selectedQuantity);
  }, 0);
};

export const { addToCart, removeFromCart, changeProductQUantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
