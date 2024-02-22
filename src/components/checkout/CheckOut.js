import React, { useState } from "react";
import "./CheckOut.scss";
import { productData } from "../../libs/jmData";
import { useParams } from "react-router-dom";

const CheckOut = ({ mobileNumber, fullName, stateCity, address, pinCode }) => {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [errors, setErrors] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const { id } = useParams();
  const productId = parseInt(id);
  const product = productData.find((item) => item.id === productId);
  const handleCardNameChange = (e) => {
    const value = e.target.value;
    // Allow only alphabets and spaces in card name
    if (/^[a-zA-Z\s]*$/.test(value) || value === "") {
      setCardName(value);
      setErrors((prevState) => ({ ...prevState, cardName: "" }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        cardName: "Enter a valid name",
      }));
    }
  };

  // const handleCardNumberChange = (e) => {
  //   const value = e.target.value;
  //   // Allow only digits in card number
  //   if (/^\d*$/.test(value) || value === "") {
  //     setCardNumber(value);
  //     setErrors((prevState) => ({ ...prevState, cardNumber: "" }));
  //   } else {
  //     setErrors((prevState) => ({
  //       ...prevState,
  //       cardNumber: "Card number can only contain digits",
  //     }));
  //   }
  // };
  const handleCardNumberChange = (e) => {
    let value = e.target.value;
    // Remove any non-digit characters and spaces
    value = value.replace(/[^\d]/g, "");

    // Insert space every four digits
    value = value.replace(/(\d{4})/g, "$1 ").trim();

    // Update state
    setCardNumber(value);

    // Validate the input
    if (/^\d{0,19}(\s\d{0,4})?$/.test(value) || value === "") {
      setErrors((prevState) => ({ ...prevState, cardNumber: "" }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        cardNumber: value.includes(" ")
          ? ""
          : "Card number can only contain digits",
      }));
    }
  };

  const handleExpiryChange = (e) => {
    let value = e.target.value;
    // Remove any non-digit characters
    value = value.replace(/\D/g, "");

    // Insert '/' after the first two digits
    if (value.length > 2) {
      value = value.substring(0, 2) + "/" + value.substring(2);
    }

    // Update state
    setExpiry(value);

    // Validate the input
    if (/^\d{0,2}\/\d{0,2}$/.test(value) || value === "") {
      setErrors((prevState) => ({ ...prevState, expiry: "" }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        expiry: "Enter a valid expiry date (MM/YY)",
      }));
    }
  };

  const handleCvvChange = (e) => {
    const value = e.target.value;
    // Allow only digits in CVV
    if (/^\d{0,3}$/.test(value) || value === "") {
      setCvv(value);
      setErrors((prevState) => ({ ...prevState, cvv: "" }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        cvv: "CVV can only contain digits",
      }));
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission
  //   // You can perform further validation or submit the form
  // };
  return (
    <form className="jm-checout-final-form">
      <section className="jm-address-form-section">
        <div className="jm-address-form-container">
          <div className="jm-address-form-box">
            <div className="jm-address-form-input-container">
              <label>Card Holder Name</label>
              <input
                type="text"
                id="ccardName"
                placeholder="Name"
                required
                value={cardName}
                onChange={handleCardNameChange}
              />
              {errors.cardName && <p className="error">{errors.cardName}</p>}
            </div>
            <div className="jm-address-form-input-container">
              <label>Card Number</label>
              <input
                type="text"
                id="cardNumber"
                placeholder="8890 9900 6777 8888"
                maxLength={19}
                value={cardNumber}
                onChange={handleCardNumberChange}
                required
              />
              {errors.cardNumber && (
                <p className="error">{errors.cardNumber}</p>
              )}
            </div>
            <div className="jm-address-form-input-container">
              <label htmlFor="stateCity">Expiry Date</label>
              <input
                type="text"
                id="expiry"
                placeholder="02/34"
                maxLength={5}
                value={expiry}
                onChange={handleExpiryChange}
                required
              />
              {errors.expiry && <p className="error">{errors.expiry}</p>}
            </div>
            <div className="jm-address-form-input-container">
              <label>CVC/CVV</label>
              <input
                type="text"
                id="cvvNumber"
                maxLength={3}
                placeholder="345"
                value={cvv}
                onChange={handleCvvChange}
                required
              />
              {errors.cvv && <p className="error">{errors.cvv}</p>}
            </div>
          </div>
          <div className="jm-address-form-save-button-container">
            <button type="submit">Confirm Order</button>
          </div>
        </div>
      </section>
      <section className="jm-product-bottom-placeorder-section">
        <div className="jm-product-bottom-placeorder-container">
          <div className="jm-product-free-deleivry">
            Yay! Get FREE delivery with this order.
          </div>
          <div className="jm-product-price-order-container">
            <p className="jm-product-detail-price-text">{product.price}</p>
            <button className="jm-product-detail-order-text" type="submit">
              Confirm Order
            </button>
          </div>
        </div>
      </section>
    </form>
  );
};

export default CheckOut;
