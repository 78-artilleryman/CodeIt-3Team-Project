import { combineReducers } from "redux";
import postsReducers from "./posts/postsReducers";
import authReducers from "./auth/authReducers";

const rootReducer = combineReducers({
  auth: authReducers,
  post: postsReducers,
});

export default rootReducer;
