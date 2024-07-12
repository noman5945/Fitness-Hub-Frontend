import { baseAPI } from "../../API/baseAPI";

const productAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "product/get-all",
        method: "GET",
      }),
      providesTags: ["products"],
    }),
  }),
});

export const { useGetAllProductsQuery } = productAPI;
