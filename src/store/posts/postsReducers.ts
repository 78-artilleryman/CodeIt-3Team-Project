import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostDataInfo } from "./types";

interface PostState {
  postList: PostDataInfo[];
}

const initialState: PostState = {
  postList: [],
};

const postReducer = createSlice({
  name: "post",
  initialState,
  reducers: {
    // loadPostsRequest: state => {
    //   state.loading = true;
    //   state.error = null;
    // },
    loadPosts: (state, action: PayloadAction<PostDataInfo[]>) => {
      state.postList = action.payload;
    },
    // loadPostsFailure: (state, action: PayloadAction<string>) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // },
  },
});
export const { loadPosts } = postReducer.actions;
export default postReducer.reducer;
