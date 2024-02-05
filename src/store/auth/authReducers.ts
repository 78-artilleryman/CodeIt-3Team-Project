import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

interface AuthState {
  uid: string | undefined;
  displayName: string | undefined | null;
  email: string | undefined | null;
}

const initialState: AuthState = {
  uid: undefined,
  displayName: undefined,
  email: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthState>) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
