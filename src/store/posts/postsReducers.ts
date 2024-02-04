import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostDataInfo } from "./types";

interface PostState {
  postList: PostDataInfo[];
  loading: boolean;
  error: string | null;
}

const initialState: PostState = {
  postList: [],
  loading: false,
  error: null,
};

const postReducer = createSlice({
  name: "post",
  initialState,
  reducers: {
    loadPostsRequest: state => {
      state.loading = true;
      state.error = null;
    },
    loadPostsSuccess: (state, action: PayloadAction<PostDataInfo[]>) => {
      state.loading = false;
      state.postList = action.payload;
    },
    loadPostsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default postReducer.reducer;
