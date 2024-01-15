import React from 'react'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
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
    </>
  )
}

export default Header