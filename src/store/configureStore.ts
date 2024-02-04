import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import thunk, { ThunkMiddleware } from "redux-thunk";

const store = configureStore({
  reducer: rootReducer, // 루트 리듀서 설정
  devTools: true, // 개발 환경에서만 사용
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export default store;
