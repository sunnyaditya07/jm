import React from "react";
import "./ProductList.scss";
import { productData } from "../../libs/jmData";
import { useNavigate } from "react-router-dom";
const ProductList = () => {
  const navigate = useNavigate();
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };
  return (
    <>
      <div className="jm-product-list-cc-container">
        <img
          src={require("../../assets/cc.png")}
          alt="cc"
          className="jm-product-list-cc-image"
        />
      </div>
      <div className="jm-productList-container">
        <section className="jm-productList-section">
          {productData.map((product) => (
            <div
              className="jm-productList-item"
              key={product.id}
              onClick={() => handleProductClick(product.id)}
            >
              <div className="jm-productList-box">
                <img
                  src={product.image}
                  alt="product"
                  className="jp-productlist-image"
                />
                <div className="jm-productList-limited">
                  <span>
                    <svg
                      id="Layer_1"
                      version="1.1"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="#2f9e44"
                    >
                      <g id="Flash">
                        <g>
                          <path
                            class="st0"
                            d="M27.59,16.53c0.09,0.78-0.22,1.54-0.83,2.03l-6.24,4.98L16,27.28l-2.66,2.2C12.91,29.83,12.41,30,11.9,30    c-0.48,0-0.96-0.16-1.37-0.48c-0.85-0.66-1.12-1.75-0.67-2.73l2.81-6.02c0.04-0.08,0.03-0.15,0.01-0.19    c-0.01-0.05-0.05-0.11-0.13-0.14l-6.86-3.2c-0.71-0.33-1.19-0.99-1.28-1.77c-0.09-0.78,0.22-1.54,0.83-2.03l6.24-4.98L16,4.72    l2.66-2.2c0.83-0.68,1.96-0.7,2.81-0.04s1.12,1.75,0.67,2.73l-2.81,6.02c-0.04,0.08-0.03,0.15-0.01,0.19    c0.01,0.05,0.05,0.11,0.13,0.14l6.86,3.2C27.02,15.09,27.5,15.75,27.59,16.53z"
                          />
                        </g>
                        <g class="st1">
                          <path d="M27.59,16.53c0.09,0.78-0.22,1.54-0.83,2.03l-6.24,4.98L16,27.28V4.72l2.66-2.2c0.83-0.68,1.96-0.7,2.81-0.04    s1.12,1.75,0.67,2.73l-2.81,6.02c-0.04,0.08-0.03,0.15-0.01,0.19c0.01,0.05,0.05,0.11,0.13,0.14l6.86,3.2    C27.02,15.09,27.5,15.75,27.59,16.53z" />
                        </g>
                      </g>
                    </svg>
                  </span>
                  <span className="jm-productList-limited-text">
                    Limited Time Deal
                  </span>
                </div>
                <div className="jm-productList-details-container">
                  <p className="jm-productList-trending-text">Trending</p>
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
                <div
                  className="jm-productList-add-conatiner"
                  onClick={() => handleProductClick(product.id)}
                >
                  <p className="jm-productList-add-text">Buy Now</p>
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
    </>
  );
};

export default ProductList;
