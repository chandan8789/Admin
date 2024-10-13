import React from "react";
import "./Nav.css";
import Avatar from "./Avatar";

const Nav = () => {
  return (
    <nav className="header-nav ms-auto p-3">
      {/* <ul className="d-flex align-items-center"> */}
      <Avatar />

      {/* </ul> */}
    </nav>
  );
};

export default Nav;
