// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const expertApi = createApi({
  reducerPath: "expertApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  extractRehydrationInfo(action) {
    if (action.type === HYDRATE) {
      return action.payload;
    }
  },
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({ url: `/posts` }),
    }),
  }),
});
export const {
  useGetPostsQuery,
  util: { getRunningQueriesThunk },
} = expertApi;

// export const { useGetPostsQuery } = expertApi;
