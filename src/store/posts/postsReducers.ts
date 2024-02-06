import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostDataInfo } from "./types";

interface PostState {
  postList: PostDataInfo[];
  classification: string;
  studyCount: string;
}

const initialState: PostState = {
  postList: [],
  classification: "전체",
  studyCount: "전체",
};

const postReducer = createSlice({
  name: "post",
  initialState,
  reducers: {
    loadPosts: (state, action: PayloadAction<PostDataInfo[]>) => {
      state.postList = action.payload;
    },
    setClassification: (state, action: PayloadAction<string>) => {
      state.classification = action.payload;
    },
    setStudyCount: (state, action: PayloadAction<string>) => {
      state.studyCount = action.payload;
    },
  },
});
export const { loadPosts, setClassification, setStudyCount } = postReducer.actions;
export default postReducer.reducer;
