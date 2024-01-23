import HomePage from "pages/Home"
import IntroPage from "pages/Home/IntroPage"
import PostDetailPage from "pages/Posts/PostDetailPage"
import PostEditPage from "pages/Posts/PostEditPage"
import PostWritePage from "pages/Posts/PostWritePage"
import MyPage from "pages/Profile/MyPage"
import UserDataPage from "pages/Profile/UserDataPage"
import LoginPage from "pages/Users/LoginPage"
import SignUpIntroPage from "pages/Users/SignUpIntroPage"
import SignUpPage from "pages/Users/SignUpPage"
import ChattingPage from "pages/Chatting"

export const pageModule = {
  Home: {
    HomePage,
    IntroPage
  },
  Posts: {
    PostDetailPage,
    PostEditPage,
    PostWritePage,
  },
  Profile: {
    MyPage,
    UserDataPage
  },
  Users: {
    LoginPage,
    SignUpIntroPage,
    SignUpPage
  },
  Chatting: {
    ChattingPage
  }
}