import React, { useState } from "react";
import "./AddressForm.scss";
import { productData } from "../../libs/jmData";
import { useParams } from "react-router-dom";
import CheckOut from "./CheckOut";

const AddressForm = () => {
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [city, setCity] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [address, setAddress] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [errors, setErrors] = useState({});
  const [CheckOutVisible, setCheckOutVisible] = useState(false);
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

  const validateFullName = (input) => {
    const regex = /[0-9]/;
    return regex.test(input);
  };

  // const validateMobileNumber = (input) => {
  //   const regex = /^\d+$/;
  //   return !regex.test(input);
  // };

  const handleFullNameChange = (e) => {
    const inputValue = e.target.value;
    setFullName(inputValue);
    if (validateFullName(inputValue)) {
      setErrors({
        ...errors,
        fullName: "Full name should not contain numbers",
      });
    } else {
      setErrors({ ...errors, fullName: "" });
    }
  };

  const handleMobileNumberChange = (e) => {
    const inputValue = e.target.value;
    // Check if the input value exceeds 10 digits
    if (inputValue.length <= 14) {
      // 12 includes the length of '+91 '
      // Check if the input value starts with '+91 ' and cannot be changed by backspace
      if (
        inputValue.startsWith("+91 ") ||
        (mobileNumber.startsWith("+91 ") &&
          e.nativeEvent.inputType === "deleteContentBackward")
      ) {
        // Check if the input contains only digits after "+91 "
        if (inputValue.match(/^\+91 \d*$/)) {
          setMobileNumber(inputValue);
          // Clear mobile number error if it was previously set
          setErrors({ ...errors, mobileNumber: "" });
        } else {
          setErrors({ ...errors, mobileNumber: "Invalid mobile number" });
        }
      } else if (
        inputValue === "" &&
        e.nativeEvent.inputType === "deleteContentBackward"
      ) {
        // Allow deleting characters if the input is empty
        setMobileNumber("");
      } else if (!inputValue.startsWith("+91 ")) {
        // If the input doesn't start with '+91 ', prepend it
        setMobileNumber("+91 " + inputValue);
      }
    }

    // Check if the mobile number is exactly 10 digits
    if (inputValue.replace(/\D/g, "").length !== 12) {
      setErrors({ ...errors, mobileNumber: "Mobile number must be 10 digits" });
    }
  };

  const handlePinCodeChange = (e) => {
    const inputValue = e.target.value;
    // Check if the input value exceeds 6 digits
    if (inputValue.length <= 6) {
      // Check if the input contains only digits
      if (/^\d*$/.test(inputValue)) {
        setPinCode(inputValue);
        // Clear pin code error if it was previously set
        setErrors({ ...errors, pinCode: "" });
      } else {
        // Set error if non-digit characters are entered
        setErrors({
          ...errors,
          pinCode: "Pin code should contain only digits",
        });
      }
    }
  };

  const handleProceed = (e) => {
    e.preventDefault();
    console.log(mobileNumber, fullName, city, address, pinCode);
    console.log("Hello");
    setCheckOutVisible(true);
  };
  const IndianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];
  return (
    <>
      {CheckOutVisible ? (
        <CheckOut
          mobileNumber={mobileNumber}
          fullName={fullName}
          city={city}
          address={address}
          pinCode={pinCode}
        />
      ) : (
        <form onSubmit={handleProceed}>
          <section className="jm-address-form-section">
            <div className="jm-address-form-container" onSubmit={handleProceed}>
              <div className="jm-address-form-box">
                <h1>BILLING & SHIPPING</h1>
                <div className="jm-address-form-input-container">
                  <label>Full name</label>
                  <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={handleFullNameChange}
                    required
                    className="jm-addres-input"
                  />
                  {errors.fullName && (
                    <p className="error">{errors.fullName}</p>
                  )}
                </div>
                <div className="jm-address-form-input-container">
                  <label>Mobile Number</label>
                  <input
                    type="tel"
                    id="mobileNumber"
                    value={mobileNumber}
                    onChange={handleMobileNumberChange}
                    required
                    className="jm-addres-input"
                  />
                  {errors.mobileNumber && (
                    <p className="error">{errors.mobileNumber}</p>
                  )}
                </div>
                <div className="jm-address-form-input-container">
                  <label htmlFor="state">State</label>
                  <select
                    id="state"
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    required
                    className="jm-addres-input select-state"
                  >
                    <option value="">Select State</option>
                    {IndianStates.map((state, index) => (
                      <option key={index} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="jm-address-form-input-container">
                  <label htmlFor="City">City</label>
                  <input
                    type="text"
                    id="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    className="jm-addres-input"
                  />
                  {errors.city && <p className="error">{errors.city}</p>}
                </div>
                <div className="jm-address-form-input-container">
                  <label>Address</label>
                  <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    className="jm-addres-input"
                  />
                  {errors.address && <p className="error">{errors.address}</p>}
                </div>
                <div className="jm-address-form-input-container">
                  <label>Pin Code</label>
                  <input
                    type="text"
                    id="pinCode"
                    value={pinCode}
                    onChange={handlePinCodeChange}
                    required
                    className="jm-addres-input"
                  />
                  {errors.pinCode && <p className="error">{errors.pinCode}</p>}
                </div>
              </div>
              <div className="jm-address-form-save-button-container">
                <button type="submit">Save & Proceed</button>
              </div>
            </div>
          </section>
          <section className="jm-product-bottom-placeorder-section">
            <div className="jm-product-bottom-placeorder-container">
              <div className="jm-product-free-deleivry">
                Yay! Get FREE delivery with this order.
              </div>
              <div className="jm-product-price-order-container ">
                <div className="jm-product-detail-price-container">
                  <p className="jm-product-detail-price-text">
                    {product.price}
                  </p>
                  <p className="jm-product-detail-saved-price-text">
                    You Saved ₹{formattedPriceDifference}.00
                  </p>
                </div>
                <div className="jm-product-detail-place-order-container">
                  <button
                    className="jm-product-detail-order-text"
                    type="submit"
                  >
                    Save & Proceed
                  </button>
                </div>
              </div>
            </div>
          </section>
        </form>
      )}
    </>
  );
};

export default AddressForm;
