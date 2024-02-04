import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { app } from "firebaseApp/config";
import { AppThunk } from "store/configureStore";

interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;

// Thunk 함수 정의
export const checkAuthStatus = (): AppThunk => async dispatch => {
  // 비동기 작업 수행
  const auth = getAuth(app);

  const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
    // 사용자 상태가 변경될 때마다 Redux store를 업데이트
    dispatch(setUser(user));
  });

  // Thunk 함수가 끝날 때 리스너 정리
  return () => unsubscribe();
};

export default authSlice.reducer;
