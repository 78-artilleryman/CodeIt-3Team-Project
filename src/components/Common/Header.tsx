import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import NavBar from "./nav/NavBar";

function Header() {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <div className={`${styles.header_container} container`}>
          <h1 className={styles.logo}>
            <Link to="/">Studit</Link>
          </h1>

          <NavBar />
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;
