import ChattingPage from 'pages/Chatting';
import HomePage from 'pages/Home';
import IntroPage from 'pages/Home/IntroPage';
import PostDetailPage from 'pages/Posts/PostDetailPage';
import PostEditPage from 'pages/Posts/PostEditPage';
import PostWritePage from 'pages/Posts/PostWritePage';
import LoginPage from 'pages/Users/LoginPage';
import MyPage from 'pages/Profile/MyPage';
import SignUpIntroPage from 'pages/Users/SignUpIntroPage';
import UserDataPage from 'pages/Profile/UserDataPage';
import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import SignUpPage from 'pages/Users/SignUpPage';

function Router() {
  return (
  <Routes>
    {/*시작 페이지*/}
    <Route path='/' element={<HomePage/>}/>
    <Route path='/intro' element={<IntroPage/>}></Route>
     {/*로그인 및 회원가입 페이지*/}
    <Route path='/users/login' element={<LoginPage/>}></Route>
    <Route path='/users/signup/intro' element={<SignUpIntroPage/>}></Route>
    <Route path='/users/signup/form' element={<SignUpPage/>}></Route>
     {/*게시물 작성, 수정, 상세 페이지*/}
    <Route path='/posts/:id' element={<PostDetailPage/>}></Route>
    <Route path='/posts/edit/:id' element={<PostEditPage/>}></Route>
    <Route path='/posts/write' element={<PostWritePage/>}></Route>
      {/*프로필 페이지, 프로필 수정 페이지*/}
    <Route path='/profile/edit' element={<UserDataPage/>}></Route>
    <Route path='/profile/myPage' element={<MyPage/>}></Route>ㄴ
    {/*채팅 페이지*/}
    <Route path='/chatting' element={<ChattingPage/>}></Route>
    {/*지정하지 않은 url이면 홈으로 이동*/}
    <Route path='*' element={<Navigate replace to={`/`}/>}/>
  </Routes>
  )
}

export default Router