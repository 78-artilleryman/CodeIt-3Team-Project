import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostDataInfo } from "./types";

interface PostState {
  postList: PostDataInfo[];
  filterClassification: string;
  filterStudyCount: string;
  filterStacks: string[];
}

const initialState: PostState = {
  postList: [],
  filterClassification: "전체",
  filterStudyCount: "전체",
  filterStacks: [],
};

const postReducer = createSlice({
  name: "post",
  initialState,
  reducers: {
    loadPosts: (state, action: PayloadAction<PostDataInfo[]>) => {
      state.postList = action.payload;
    },
    setFilterClassification: (state, action: PayloadAction<string>) => {
      state.filterClassification = action.payload;
    },
    setFilterStudyCount: (state, action: PayloadAction<string>) => {
      state.filterStudyCount = action.payload;
    },
    setFilterStack: (state, action: PayloadAction<string>) => {
      const valueToAdd = action.payload;
      // 새로운 값이 이미 배열에 있는지 확인하고 없으면 추가
      if (!state.filterStacks.includes(valueToAdd)) {
        state.filterStacks.push(valueToAdd);
      } else {
        // 이미 있는 경우 제거
        state.filterStacks = state.filterStacks.filter(value => value !== valueToAdd);
      }
    },
  },
});
export const { loadPosts, setFilterClassification, setFilterStudyCount, setFilterStack } = postReducer.actions;
export default postReducer.reducer;
