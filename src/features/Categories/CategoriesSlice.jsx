import { apiSlice } from "../../api/apiSlice";

export const CategoriesSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getCategory: builder.query ({
      query: () => "/category/get/all",
      providesTags: ["category"]
    }),
    addCategory: builder.mutation({
      query: (payload) => ({
        url: "/category/create",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["category"]
    }),
    updateCategory: builder.mutation({
      query: (payload) => ({
        url: `/category/update/${payload.id}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["category"]
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/category/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["category"]
    })
  })
});

export const { useGetCategoryQuery, useAddCategoryMutation, useDeleteCategoryMutation, useUpdateCategoryMutation} = CategoriesSlice;
