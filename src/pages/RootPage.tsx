import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Common/Header";

function RootPage() {
  return (
    <React.Fragment>
      <Header />

      <main>
        <Outlet />
      </main>
    </React.Fragment>
  );
}

export default RootPage;
