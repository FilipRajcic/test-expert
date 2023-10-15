import { configureStore } from "@reduxjs/toolkit";
import { expertApi } from "../services/expertApi";
import counterSlice from "./features/counter/counterSlice";
import { rtkQueryErrorLogger } from "./middleware/errorMiddleware";
import { setupListeners } from "@reduxjs/toolkit/query";
import postsSlice from "./features/posts/postsSlice";
import { createWrapper } from "next-redux-wrapper";
export const store = configureStore({
  reducer: {
    [expertApi.reducerPath]: expertApi.reducer,
    counter: counterSlice,
    posts: postsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(expertApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
