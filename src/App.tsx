import React, { useState, FC } from 'react';
import './App.css';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import studyData from './studyData';
import Data from './components/Data';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MyPage from './pages/MyPage';
import WriteStudy from './pages/WriteStudy';
import Intro from './pages/Intro';
import Detail from './pages/Detail';
import EditPost from './pages/EditPost';
import Setting from './pages/Setting';
import Chatting from './pages/Chatting';


function App() {

  let [study, setStudy] = useState(studyData)

  


  return (
    <div className="App">
    <header className='header'>
            <Link to="/"><div className='logo'><h1>Studit</h1></div></Link>
            
           
              <div className='nav'>
                <Link to="/myPage"><div className='my_page_link'>내 정보</div></Link>
                <Link to="/signIn"><div className='my_page_link'>로그인</div></Link>
                <Link to="/signUp"><div className='my_page_link'>회원가입</div></Link>
                <Link to="/writeStudy"><div className='my_page_link'>글쓰기</div></Link>
                <Link to="/setting"><div className='my_page_link'>내 정보수정</div></Link>
              </div>
           
          </header>

      <Routes>
        <Route path='/' element={
          <>
          <Link to="/intro"><div className='intro_page_link'><p>인트로 페이지 링크</p></div></Link>
           <div className='data_wrapper'>
           {
             study.map((a , i) => {
               return(
                 <>
                <Link to={"/detail"}><Data study={study} key={i} ></Data></Link>
                 </>
                 
                 )
               })
             }
       </div>
       </>
        }/>
        
        <Route path='/myPage' element={<MyPage/>}></Route>
        <Route path='/signIn' element={<SignIn/>}></Route>
        <Route path='/signUp' element={<SignUp/>}></Route>
        <Route path='/writeStudy' element={<WriteStudy/>}></Route>
        <Route path='/intro' element={<Intro/>}></Route>
        <Route path='/detail' element={<Detail study={study}/>}></Route>
        <Route path='/editPost' element={<EditPost />}></Route>
        <Route path='/setting' element={<Setting />}></Route>
        <Route path='/chatting' element={<Chatting/>}></Route>
        

      </Routes>
      

         
        </div>
  );
}

export default App;
