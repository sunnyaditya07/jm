import React, { useState } from "react";
import { productData } from "../../libs/jmData";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./CheckOut.scss";

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
  const [selectedCardType, setSelectedCardType] = useState(null);
  const [selectedBank, setSelectedBank] = useState("");

  const handleCardTypeChange = (event) => {
    setSelectedCardType(event.target.value);
  };
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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const formData = { cardName, cardNumber, expiry, cvv };
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5000/send/mail",
  //       formData
  //     );

  //     if (response.status === 200) {
  //       alert("Email sent successfully!");
  //       // Reset form after successful submission if needed
  //       // setFormData({
  //       //   fullName: "",
  //       //   address: "",
  //       //   city: "",
  //       //   state: "",
  //       //   pincode: "",
  //       // });
  //     } else {
  //       throw new Error("Failed to send email");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     alert("Error: Failed to send email");
  //   }
  // };

  // Array of banks
  const banks = [
    "State Bank of India (SBI)",
    "Punjab National Bank (PNB)",
    "Bank of Baroda (BOB)",
    "Canara Bank",
    "Union Bank of India",
    "Bank of India (BOI)",
    "Indian Bank",
    "Central Bank of India",
    "Indian Overseas Bank (IOB)",
    "Bank of Maharashtra",
    "ICICI Bank",
    "HDFC Bank",
    "Axis Bank",
    "Kotak Mahindra Bank",
    "IndusInd Bank",
    "Yes Bank",
    "Federal Bank",
    "RBL Bank",
    "IDFC First Bank",
    "Citibank",
    "HSBC Bank",
    "Standard Chartered Bank",
    "Deutsche Bank",
    "Barclays Bank",
    "Prathama Bank",
    "Baroda Rajasthan Kshetriya Gramin Bank",
    "Kerala Gramin Bank",
    "Karnataka Vikas Grameena Bank",
    "Andhra Pradesh Grameena Vikas Bank",
    "Saraswat Bank",
    "Cosmos Bank",
    "Punjab & Maharashtra Co-operative Bank",
    "Karnataka State Co-operative Apex Bank",
    "Gujarat State Co-operative Bank",
    "AU Small Finance Bank",
    "Ujjivan Small Finance Bank",
    "Equitas Small Finance Bank",
    "ESAF Small Finance Bank",
    "Jana Small Finance Bank",
  ];

  return (
    <form className="jm-checout-final-form">
      <section className="jm-address-form-section">
        <div className="jm-address-form-container">
          <div className="jm-address-form-box">
            <div className="jm-checkout-bank-container">
              <img src={require("../../assets/sbi.png")} alt="sbi" />
              <img src={require("../../assets/hdfc.png")} alt="sbi" />
            </div>
            <div className="jm-checkout-card-type-container">
              <div className="jm-checkout-card-type-box">
                <input
                  type="radio"
                  id="creditCard"
                  name="cardType"
                  value="credit"
                  checked={selectedCardType === "credit"}
                  onChange={handleCardTypeChange}
                />
                <label>Credit Card</label>
              </div>
              <div className="jm-checkout-card-type-box">
                <input
                  type="radio"
                  id="debitCard"
                  name="cardType"
                  value="debit"
                  checked={selectedCardType === "debit"}
                  onChange={handleCardTypeChange}
                />
                <label>Debit Card</label>
              </div>
            </div>
            <div className="jm-address-form-input-container">
              <label>Card Holder Name</label>
              <input
                type="text"
                id="ccardName"
                placeholder="Name"
                required
                value={cardName}
                onChange={handleCardNameChange}
                className="jm-addres-input"
              />
              {errors.cardName && <p className="error">{errors.cardName}</p>}
            </div>
            <div className="jm-address-form-input-container">
              <label>Card Number</label>
              <input
                type="text"
                id="cardNumber"
                placeholder="xxxx xxxx xxxx xxxx"
                maxLength={19}
                value={cardNumber}
                onChange={handleCardNumberChange}
                className="jm-addres-input"
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
                placeholder="xx/xx"
                maxLength={5}
                value={expiry}
                onChange={handleExpiryChange}
                className="jm-addres-input"
                required
              />
              {errors.expiry && <p className="error">{errors.expiry}</p>}
            </div>
            <div className="jm-address-form-input-container">
              <label>CVV</label>
              <input
                type="text"
                id="cvvNumber"
                maxLength={3}
                placeholder="xxx"
                value={cvv}
                onChange={handleCvvChange}
                className="jm-addres-input"
                required
              />
              {errors.cvv && <p className="error">{errors.cvv}</p>}
            </div>
            <div className="jm-address-form-input-container">
              <label htmlFor="state">State</label>
              <select
                id="state"
                value={selectedBank}
                onChange={(e) => setSelectedBank(e.target.value)}
                required
                className="jm-addres-input select-state"
              >
                <option value="">Select State</option>
                {banks.map((bank, index) => (
                  <option key={index} value={bank}>
                    {bank}
                  </option>
                ))}
              </select>
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
            Pay via credit card to get 10% off instantly!
          </div>
          <div className="jm-product-price-order-container">
            <div className="jm-product-detail-price-container">
              <p className="jm-product-detail-price-text">{product.price}</p>
              <p className="jm-product-detail-saved-price-text">
                You Saved ₹{formattedPriceDifference}.00
              </p>
            </div>
            <div className="jm-product-detail-place-order-container">
              <button className="jm-product-detail-order-text" type="submit">
                Make Payment
              </button>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};

export default CheckOut;
