import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type cartStructure = {
  _id: string;
  name: string;
  Qty: number;
  customerQty: number;
  price: number;
  purchasePrice: number;
};

type cart = {
  cartItem: cartStructure[];
};

const InitializeCart: cart = {
  cartItem: [],
};

const cartSlice = createSlice({
  name: "Cart",
  initialState: InitializeCart,
  reducers: {
    setCartItems: (state, action: PayloadAction<cartStructure>) => {
      const duplicate = state.cartItem.find(
        (item) => item._id === action.payload._id
      );
      if (!duplicate) {
        state.cartItem.push({ ...action.payload, customerQty: 1 });
      }
    },
    removeCartItem: (state, action: PayloadAction<string>) => {
      state.cartItem = state.cartItem.filter(
        (item) => item._id !== action.payload
      );
    },
    updateCartItemQty: (
      state,
      action: PayloadAction<{
        qtyNum: number;
        id: string;
        currentPrice: number;
      }>
    ) => {
      state.cartItem.forEach((item) => {
        if (item._id === action.payload.id) {
          item.customerQty = action.payload.qtyNum;
          item.Qty -= action.payload.qtyNum;
          item.purchasePrice = action.payload.qtyNum * item.price;
        }
      });
    },
    emptyCart: (state) => {
      state.cartItem = [];
    },
  },
});

export const { setCartItems, removeCartItem, emptyCart, updateCartItemQty } =
  cartSlice.actions;

export default cartSlice.reducer;
