import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React from "react";
import "./App.css";
import Header from "./components/pages/Header/Header";
import SideBar from "./components/pages/Header/SideBar";
import Main from "./components/pages/Dashboard/Main";

const App = () => {
  return (
    <>
      <Header />
      <SideBar />
      <Main />
    </>
  );
};

export default App;
