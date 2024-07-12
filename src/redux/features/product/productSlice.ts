import { createSlice } from "@reduxjs/toolkit";

type ProductType = {
  _id: null | string;
  name: string | null;
  description: string | null;
  price: number | null;
  category: string | null;
  Qty: number | null;
  weight: number | null;
  img: string | null;
};

const ProductInitalState: ProductType = {
  _id: null,
  name: null,
  description: null,
  price: null,
  category: null,
  Qty: null,
  weight: null,
  img: null,
};

const productSlice = createSlice({
  name: "product",
  initialState: ProductInitalState,
  reducers: {
    setProduct: (state, action) => {
      state._id = action.payload._id;
      state.name = action.payload.name;
      state.description = action.payload.description;
      state.price = action.payload.price;
      state.category = action.payload.category;
      state.Qty = action.payload.Qty;
      state.weight = action.payload.weight;
      state.img = action.payload.img;
    },
    setProductID: (state, action) => {
      state._id = action.payload;
    },
  },
});

export const { setProduct, setProductID } = productSlice.actions;

export default productSlice.reducer;
