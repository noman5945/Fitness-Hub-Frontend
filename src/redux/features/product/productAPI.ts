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
  }),
});

export const { useGetAllProductsQuery } = productAPI;
