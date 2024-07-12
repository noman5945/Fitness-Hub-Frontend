import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1/",
  credentials: "include",
});

export const baseAPI = createApi({
  baseQuery: baseQuery,
  tagTypes: ["products"],
  endpoints: () => ({}),
});
