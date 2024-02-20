import React from "react";
import "./ProductList.scss";
import { productData } from "../../libs/jmData";
const ProductList = () => {
  return (
    <div className="jm-productList-container">
      <section className="jm-productList-section">
        {productData.map((product) => (
          <div className="jm-productList-item" key={product.id}>
            <div className="jm-productList-box">
              <img
                src={product.image}
                alt="product"
                className="jp-productlist-image"
              />
              <div className="jm-productList-details-container">
                <p className="jm-productList-product-title">
                  {product.description}
                </p>{" "}
                <p className="jm-productList-product-price">
                  {product.price}
                  <span className="jm-productList-actualPrice">
                    {product.actualPrice}
                  </span>
                  <span className="jm-productList-price-off">
                    {" "}
                    {product.off}
                  </span>
                </p>
              </div>
              <div className="jm-productList-add-conatiner">
                <p className="jm-productList-add-text">Add</p>
                <p className="jm-productList-add-icon">+</p>
              </div>
            </div>
            <svg
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
              className="jp-productList-heart-icon"
            >
              <rect fill="none" height="256" width="256" />
              <path
                d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z"
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              />
            </svg>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductList;
