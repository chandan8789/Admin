import React, { useState, useEffect } from "react";
import DataFetch from "../../DataFetch";
import "./Products.css";

const Products = () => {
  const [filterData, setFilterData] = useState([]);
  const [orgData, setOrgData] = useState([]);
  
  useEffect(() => {
    data();
  }, []);
  
  const data = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const result = await res.json();
    setOrgData(result);
    setFilterData(result);
  };

  const DetailsMenu = (category) => {
    if (category === "all") {
      setFilterData(orgData);
    } else {
      const categoryData = orgData.filter((item) => {
        return item.category.toLowerCase() === category;
      });
      setFilterData(categoryData);
    }
  };

  return (
    <>
      <div>
        {/* Optional header or title */}
      </div>
      <div className="productbtn">
        <button className="productall" onClick={() => DetailsMenu("all")}>
          All
        </button>
        <button className="productmc" onClick={() => DetailsMenu("men's clothing")}>
          Men's
        </button>
        <button className="productwc" onClick={() => DetailsMenu("women's clothing")}>
          Women's
        </button>
        <button className="productjw" onClick={() => DetailsMenu("jewelery")}>
          Jewelry
        </button>
        <button className="productelc" onClick={() => DetailsMenu("electronics")}>
          Electronics
        </button>
      </div>
      <DataFetch value={filterData} />
    </>
  );
};

export default Products;
