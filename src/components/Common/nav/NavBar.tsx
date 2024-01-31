import React from "react";
import { Link } from "react-router-dom";

import styles from "./NavBar.module.scss";

function NavBar() {
  return (
    <nav>
      <ul className={styles.nav_layout}>
        <li className={`${styles.nav_layout__item}`}>
          <Link to="/writeStudy">스터디 모집하기</Link>
        </li>
        <li className={`${styles.nav_layout__item} ${styles.box_style}`}>
          <Link to="/signIn">로그인</Link>
        </li>
        {/* <li>
			<Link to="/myPage">내 정보</Link>
		</li>
		<li>
			<Link to="/signUp">회원가입</Link>
		</li>
		<li>
			<Link to="/setting">내 정보수정</Link>
		</li> */}
      </ul>
    </nav>
  );
}

export default NavBar;
