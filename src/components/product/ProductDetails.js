import React from "react";
import "./ProductDetails.scss";
import { useNavigate, useParams } from "react-router-dom";
import { productData } from "../../libs/jmData";
const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const productId = parseInt(id);
  const product = productData.find((item) => item.id === productId);
  const parsePrice = (priceString) =>
    parseFloat(priceString.replace("₹", "").replace(",", ""));
  const price = parsePrice(product.price);
  const actualPrice = parsePrice(product.actualPrice);
  const priceDifference = actualPrice - price;
  const formattedPriceDifference = priceDifference.toLocaleString("en-IN", {
    maximumFractionDigits: 2,
  });

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}/checkout`);
  };
  return (
    <div>
      <section className="jm-product-details-section">
        <p className="jm-product-details-mycart">My Cart</p>
        <div className="jm-product-details-delivery">
          <svg
            viewBox="0 0 640 512"
            xmlns="http://www.w3.org/2000/svg"
            className="jm-product-details-delivery-truck-icon"
          >
            <path d="M368 0C394.5 0 416 21.49 416 48V96H466.7C483.7 96 499.1 102.7 512 114.7L589.3 192C601.3 204 608 220.3 608 237.3V352C625.7 352 640 366.3 640 384C640 401.7 625.7 416 608 416H576C576 469 533 512 480 512C426.1 512 384 469 384 416H256C256 469 213 512 160 512C106.1 512 64 469 64 416H48C21.49 416 0 394.5 0 368V48C0 21.49 21.49 0 48 0H368zM416 160V256H544V237.3L466.7 160H416zM160 368C133.5 368 112 389.5 112 416C112 442.5 133.5 464 160 464C186.5 464 208 442.5 208 416C208 389.5 186.5 368 160 368zM480 464C506.5 464 528 442.5 528 416C528 389.5 506.5 368 480 368C453.5 368 432 389.5 432 416C432 442.5 453.5 464 480 464z" />
          </svg>
          <p>Delivery in two days</p>
        </div>
        <div className="jm-product-details-container">
          <div className="jm-product-details-box">
            <div className="jm-product-details-main-container">
              <div className="jm-product-details-main-container-title">
                <p>JioMart Basket(1)</p>
                <p>{product.price}</p>
              </div>
              <div className="jm-product-details-image-container">
                <img
                  src={product.image}
                  alt="earbuds"
                  className="jm-product-details-image"
                />
                <div className="jm-product-main-details">
                  <p className="jm-product-main-details-title">
                    {product.description}
                  </p>
                  <p className="jm-product-main-details-price">
                    {product.price} <span>{product.actualPrice}</span>
                  </p>
                  <span className="jm-product-main-details-saved-price">
                    You Save ₹{formattedPriceDifference}.00
                  </span>
                  <p className="jm-product-main-details-seller-name">
                    Sold by: Reliance Retail
                  </p>
                </div>
              </div>
              <div className="jm-product-details-quantity-container">
                <div className="jm-product-details-quantity-decrease">
                  <p>-</p>
                </div>
                <div className="jm-product-details-quantity-number">
                  <p>1</p>
                </div>
                <div className="jm-product-details-quantity-increase">
                  <p>+</p>
                </div>
              </div>
            </div>
          </div>

          <div className="jm-product-details-price-container">
            <div className="jm-product-details-price-box">
              <p className="jm-product-details-payment-text">Payment Details</p>
              <div className="jm-product-details-mrp-container">
                <p className="jm-product-details-mrp-text">MRP Total</p>
                <p className="jm-product-details-mrp">{product.actualPrice}</p>
              </div>
              <div className="jm-product-details-mrp-container">
                <p className="jm-product-details-mrp-text">Product Discount</p>
                <p className="jm-product-details-discount">
                  - ₹{formattedPriceDifference}.00
                </p>
              </div>
              <div className="jm-product-details-mrp-container">
                <p className="jm-product-details-mrp-text">Delivery Fee</p>
                <p className="jm-product-details-discount">
                  <span>Free</span>{" "}
                  <span className="jm-product-discount">₹40.00</span>
                </p>
              </div>
              <div className="jm-product-details-mrp-container">
                <p className="jm-product-details-mrp-text">Total</p>
                <p className="jm-product-details-total">{product.price}</p>
              </div>
            </div>
            <div
              className="jm-product-place-order-button"
              onClick={() => handleProductClick(product.id)}
            >
              <p>Place Order</p>
            </div>
          </div>
        </div>
      </section>
      <section className="jm-product-bottom-placeorder-section">
        <div className="jm-product-bottom-placeorder-container">
          <div className="jm-product-free-deleivry">
            Yay! Get FREE delivery with this order.
          </div>
          <div className="jm-product-price-order-container">
            <div className="jm-product-detail-price-container">
              <p className="jm-product-detail-price-text">{product.price}</p>
              <p className="jm-product-detail-saved-price-text">
                You Saved ₹{formattedPriceDifference}.00
              </p>
            </div>

            <div className="jm-product-detail-place-order-container">
              <button
                className="jm-product-detail-order-text"
                onClick={() => handleProductClick(product.id)}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
