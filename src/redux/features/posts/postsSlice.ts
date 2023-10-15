import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { PostType } from "@/src/components/Post/PostTypes";

const initialState: PostType[] = [];
// NOT USING
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      return action.payload;
    },
  },
});
export const { setPosts } = postsSlice.actions;

export const selectPosts = (state: RootState) => state.posts;

export default postsSlice.reducer;
