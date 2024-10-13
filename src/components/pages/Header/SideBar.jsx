import React from "react";
import "./SideBar.css";

const SideBar = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">
            <i className="bi bi-grid"></i>
          </a>
          <span>Dashboard</span>
        </li>
        <li className="nav-item">
          <a
            href="#"
            className="nav-link collapsed"
            data-bs-target="#components-nav"
            data-bs-toggle="collapse"
          >
            <i className="bi bi-grid"></i>
          </a>
          <span>Banner</span>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
