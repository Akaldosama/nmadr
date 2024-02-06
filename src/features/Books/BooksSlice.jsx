import { apiSlice } from "../../api/apiSlice";


export const BooksSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getBooks: builder.query ({
      query: () => "/book",
      providesTags: ["book"]
    }),
    addBook: builder.mutation({
      query: (payload) => ({
        url: "/book/create",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["book"]
    }),
    updateBook: builder.mutation({
      query: (payload) => ({
        url: `/book/${payload.id}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["book"]
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/book/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["book"]
    })
  })
});

export const { useGetBooksQuery, useAddBookMutation, useDeleteBookMutation, useUpdateBookMutation} = BooksSlice;