import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://campers-shop-backend-gules.vercel.app/api/products",
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (query) => {
        const params = new URLSearchParams();
        if (query?.category) params.append("category", query.category);
        if (query?.price) params.append("price", query.price);
        if (query?.sorting) params.append("sorting", query.sorting);
        if (query?.search) params.append("search", query.search);
        return {
          url: "/",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["Products"],
    }),
    getProductsById: builder.query({
      query: (id) => {
        return {
          url: `/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Products"],
    }),
    addProduct: builder.mutation({
      query: (data) => {
        return {
          url: "/",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Products"],
    }),

    updateProduct: builder.mutation({
      query: (data) => {
        return {
          url: `/${data._id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["Products"],
    }),

    deleteProduct: builder.mutation({
      query: (id) => {
        return {
          url: `/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsByIdQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
