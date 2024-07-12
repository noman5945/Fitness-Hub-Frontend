import { baseAPI } from "../../API/baseAPI";

const productAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (queries) => {
        const params = new URLSearchParams();
        if (queries) {
          if (queries.name) {
            //console.log(queries.name);
            params.append("name", queries.name);
          }
          if (queries.category) {
            params.append("category", queries.category);
          }
          console.log(params.toString());
        }

        return {
          url: "product/get-all",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["products"],
    }),
    getSingleProductbyID: builder.query({
      query: (id) => {
        return {
          url: `product/get-product/${id as string}`,
          method: "GET",
        };
      },
      providesTags: ["singleProd"],
    }),
    getLatestProducts: builder.query({
      query: () => {
        return {
          url: "product/latest-products",
          method: "GET",
        };
      },
      providesTags: ["featured"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductbyIDQuery,
  useGetLatestProductsQuery,
} = productAPI;
