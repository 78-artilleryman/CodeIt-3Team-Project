import { Chatting, Home, Posts, Profile, Users } from "pages";
import { Route, Routes, Navigate } from "react-router-dom";

function Router() {
  return (
    <Routes>
      {/*시작 페이지*/}
      <Route path="/" element={<Home.HomePage />} />
      <Route path="/intro" element={<Home.IntroPage />}></Route>
      {/*로그인 및 회원가입 페이지*/}
      <Route path="/login" element={<Users.LoginPage />}></Route>
      <Route path="/signup" element={<Users.SignUpPage />}></Route>
      {/*게시물 작성, 수정, 상세 페이지*/}
      <Route path="/posts/:id" element={<Posts.PostDetailPage />}></Route>
      <Route path="/posts/edit/:id" element={<Posts.PostEditPage />}></Route>
      <Route path="/posts/write" element={<Posts.PostWritePage />}></Route>
      {/*프로필 페이지, 프로필 수정 페이지*/}
      <Route path="/profile/edit" element={<Profile.UserDataPage />}></Route>
      <Route path="/profile/myPage" element={<Profile.MyPage />}></Route>ㄴ{/*채팅 페이지*/}
      <Route path="/chatting" element={<Chatting.ChattingPage />}></Route>
      {/*지정하지 않은 url이면 홈으로 이동*/}
      <Route path="*" element={<Navigate replace to={`/`} />} />
    </Routes>
  );
}

export default Router;
