import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { AuthInfo } from "./types";

interface AuthState {
  user: object | undefined;
}

const initialState: AuthState = {
  user: undefined,
};

const authReducers = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthInfo>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authReducers.actions;
export default authReducers.reducer;
