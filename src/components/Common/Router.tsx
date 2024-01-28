import { Chatting, Home, Posts, Profile, Users } from "pages";
import { Route, Routes, Navigate } from "react-router-dom";

interface RouterProps {
  isAuthenticated: boolean;
}

function Router({ isAuthenticated }: RouterProps) {
  return (
    <Routes>
      {isAuthenticated ? (
        <>
          <Route path="/" element={<Home.HomePage />} />
          <Route path="/posts/:id" element={<Posts.PostDetailPage />}></Route>
          <Route path="/posts/edit/:id" element={<Posts.PostEditPage />}></Route>
          <Route path="/posts/write" element={<Posts.PostWritePage />}></Route>
          <Route path="/profile/edit" element={<Profile.UserDataPage />}></Route>
          <Route path="/profile/myPage" element={<Profile.MyPage />}></Route>
          <Route path="/chatting" element={<Chatting.ChattingPage />}></Route>
          <Route path="*" element={<Navigate replace to={`/`} />} />
        </>
      ) : (
        <>
          <Route path="/intro" element={<Home.IntroPage />}></Route>
          <Route path="/login" element={<Users.LoginPage />}></Route>
          <Route path="/signup" element={<Users.SignUpPage />}></Route>
          <Route path="*" element={<Navigate replace to={`/login`} />} />
        </>
      )}
    </Routes>
  );
}

export default Router;
