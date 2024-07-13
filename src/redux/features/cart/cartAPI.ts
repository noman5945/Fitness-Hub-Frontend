import { baseAPI } from "../../API/baseAPI";

const cartAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    updateProducts: builder.mutation({
      query: (productsArray) => {
        const bodyStruct = {
          items: [...productsArray],
        };
        return {
          url: "product/update-many",
          method: "POST",
          body: bodyStruct,
        };
      },
    }),
  }),
});

export const { useUpdateProductsMutation } = cartAPI;
