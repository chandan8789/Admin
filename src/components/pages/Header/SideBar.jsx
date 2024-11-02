import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./SideBar.css";

const SideBar = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/services" className="nav-link">
            <i className="bi bi-grid"></i>
            <span>Services</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
