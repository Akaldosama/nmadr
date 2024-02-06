import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://52.74.225.116:3001/api'}),
    tagTypes: ['author', 'book', 'category'],
    endpoints: builder => ({})
})