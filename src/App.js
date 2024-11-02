import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React from "react";
import "./App.css";
import Header from "./components/pages/Header/Header";
import SideBar from "./components/pages/Header/SideBar";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import Main from "./components/pages/Dashboard/Main";
import Services from "./components/pages/Services/Services";

const App = () => {
  return (
    <>
      <Header />
      <SideBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
};

export default App;
