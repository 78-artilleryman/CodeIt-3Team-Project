import { Chatting, Home, PageNotFound, Posts, Profile, RootPage, Users } from "pages";
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

interface RouterProps {
  isAuthenticated: boolean;
}

function Router({ isAuthenticated }: RouterProps) {
  return (
    <Routes>
      {isAuthenticated ? (
        <React.Fragment>
          <Route path="/" element={<RootPage />}>
            <Route path="posts/:id" element={<Posts.PostDetailPage />}></Route>
            <Route path="posts/edit/:id" element={<Posts.PostEditPage />}></Route>
            <Route path="posts/write" element={<Posts.PostWritePage />}></Route>
            <Route path="profile/edit" element={<Profile.UserDataPage />}></Route>
            <Route path="profile/myPage" element={<Profile.MyPage />}></Route>
            <Route path="chatting" element={<Chatting.ChattingPage />}></Route>
          </Route>
          <Route path="*" element={<Navigate replace to={`/`} />} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Route path="/" element={<RootPage />}>
            <Route path="intro" element={<Home.IntroPage />}></Route>
            <Route path="login" element={<Users.LoginPage />}></Route>
            <Route path="signup" element={<Users.SignUpPage />}></Route>
            {/* <Route path="*" element={<Navigate replace to={`/login`} />} /> */}
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </React.Fragment>
      )}
    </Routes>
  );
}

export default Router;
