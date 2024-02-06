import { apiSlice } from "../../api/apiSlice";

export const AuthorSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getAuthors: builder.query ({
      query: () => "/author",
      providesTags: ["author"]
    }),
    addAuthor: builder.mutation({
      query: (payload) => ({
        url: "/author",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["author"]
    }),
    updateAuthor: builder.mutation({
      query: (payload) => ({
        url: `/author/${payload.id}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["author"]
    }),
    deleteAuthor: builder.mutation({
      query: (id) => ({
        url: `/author/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["author"]
    })
  })
})

export const { useGetAuthorsQuery, useAddAuthorMutation, useDeleteAuthorMutation, useUpdateAuthorMutation} = AuthorSlice;
