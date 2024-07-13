import { createSlice } from "@reduxjs/toolkit";

type OptionalCategory = {
  category: string | null;
};

const categoryInitialVal: OptionalCategory = {
  category: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState: categoryInitialVal,
  reducers: {
    setOptionalCategory: (state, action) => {
      state.category = action.payload;
    },
    unsetOptionalCategory: (state) => {
      state.category = null;
    },
  },
});

export const { setOptionalCategory, unsetOptionalCategory } =
  categorySlice.actions;

export default categorySlice.reducer;
