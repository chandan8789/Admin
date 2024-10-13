import React from "react";
import "./PageTitle.css";
const PageTitle = ({ page }) => {
  return (
    <div className="pagetitle">
      <h1>{page}</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">
              <li className="bi bi-house-door"></li>
            </a>
          </li>
          <li className="breadcrumb-item active">{page}</li>
        </ol>
      </nav>
    </div>
  );
};

export default PageTitle;
