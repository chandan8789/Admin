import React, { useState } from "react";
import "./DataFetch.css";

const DataFetch = ({ value }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (item) => {
    setSelectedProduct(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log("Uploaded file:", file);
    // Implement file upload logic here, if needed
  };

  return (
    <>
      <div className="mainparent">
        {value &&
          value.map((items, index) => (
            <div key={index} className="FetchChild">
              <img className="fimages" src={items.image} alt={items.title} />
              <div className="alldata">
                <div className="ftitle">{items.title}</div>
                <div className="fprice">$ {items.price}</div>
                <button
                  className="buynow"
                  onClick={() => handleOpenModal(items)}
                >
                  Click here
                </button>
              </div>
            </div>
          ))}
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2 className="modal-title">Upload for {selectedProduct?.title}</h2>
            <input
              type="file"
              onChange={handleFileUpload}
              className="file-input"
            />
            <button onClick={handleCloseModal} className="modal-close-button">
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DataFetch;
