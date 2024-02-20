import React from "react";
import "./Header.scss";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="jm-header-container">
        <div className="jm-header-box">
          <section className="jm-header-section">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 50 50"
                className="js-header-hamburger"
              >
                <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
              </svg>
            </div>
            <div className="jm-header-logo-title-container">
              <h1
                onClick={() => {
                  navigate("/");
                }}
              >
                JioMart
              </h1>
            </div>
            {/* <div className="jm-header-location-container">
              <div className="jm-header-location-box">
                <button className="jm-header-location-button">
                  <svg
                    height="48"
                    viewBox="0 0 48 48"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    className="jm-header-location-logo"
                  >
                    <path d="M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
                    <path d="M0 0h48v48h-48z" fill="none" />
                  </svg>
                  <span className="js-header-deliver-to">Deliver to </span>
                  <span className="js-header-deliver-location">
                    Mumbai 400020
                  </span>
                </button>
              </div>
            </div> */}
          </section>
          <section className="jm-header-search-signin-section">
            <div className="jm-header-search-box">
              <span>
                <svg
                  height="512px"
                  id="Layer_1"
                  version="1.1"
                  viewBox="0 0 512 512"
                  width="512px"
                  xmlns="http://www.w3.org/2000/svg"
                  className="jm-header-seacrh-icon"
                >
                  <path d="M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3  c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2  c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2  c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search JioMart"
                className="jm-header-search-input"
              />
              <svg
                enable-background="new 0 0 32 32"
                height="32px"
                version="1.1"
                viewBox="0 0 32 32"
                width="32px"
                xmlns="http://www.w3.org/2000/svg"
                className="jm-header-list-icon"
              >
                <g id="Guides" />
                <g id="Mail" />
                <g id="Cloud" />
                <g id="Home" />
                <g id="Back" />
                <g id="Next" />
                <g id="Reload" />
                <g id="Buble" />
                <g id="Accept" />
                <g id="Reject" />
                <g id="User" />
                <g id="Download" />
                <g id="Upload" />
                <g id="Camera" />
                <g id="Notification" />
                <g id="About" />
                <g id="Search" />
                <g id="Cart" />
                <g id="Sound" />
                <g id="List">
                  <path d="M9.2285,16c0,0.8281-0.6709,1.5-1.5,1.5s-1.5-0.6719-1.5-1.5c0-0.8301,0.6709-1.5,1.5-1.5S9.2285,15.1699,9.2285,16z    M7.7285,20.5c-0.8291,0-1.5,0.6699-1.5,1.5c0,0.8281,0.6709,1.5,1.5,1.5s1.5-0.6719,1.5-1.5   C9.2285,21.1699,8.5576,20.5,7.7285,20.5z M7.7285,8.5c-0.8291,0-1.5,0.6719-1.5,1.5c0,0.8301,0.6709,1.5,1.5,1.5   s1.5-0.6699,1.5-1.5C9.2285,9.1719,8.5576,8.5,7.7285,8.5z M25.7715,15h-14.043c-0.5527,0-1,0.4473-1,1s0.4473,1,1,1h14.043   c0.5527,0,1-0.4473,1-1S26.3242,15,25.7715,15z M25.7285,21h-14.043c-0.5527,0-1,0.4473-1,1s0.4473,1,1,1h14.043   c0.5527,0,1-0.4473,1-1S26.2813,21,25.7285,21z M11.6855,11h14.043c0.5527,0,1-0.4473,1-1s-0.4473-1-1-1h-14.043   c-0.5527,0-1,0.4473-1,1S11.1328,11,11.6855,11z" />
                </g>
                <g id="Settings" />
              </svg>
            </div>
            <div className="jm-header-cart-box">
              <svg
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                className="jm-header-cart-icon"
              >
                <rect fill="none" height="256" width="256" />
                <path d="M96,216a16,16,0,1,1-16-16A16,16,0,0,1,96,216Zm88-16a16,16,0,1,0,16,16A16,16,0,0,0,184,200ZM228.1,67.2a8.1,8.1,0,0,0-6.4-3.2H48.3L40.2,35.6A16.1,16.1,0,0,0,24.8,24H8A8,8,0,0,0,8,40H24.8l9.8,34.1v.2L61,166.6A24.1,24.1,0,0,0,84.1,184h95.8A24.1,24.1,0,0,0,203,166.6l26.4-92.4A8,8,0,0,0,228.1,67.2Z" />
              </svg>
            </div>
            <div className="jm-header-signin-box">
              <svg
                version="1.1"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="jm-header-profile-icon"
              >
                <g id="info" />
                <g id="icons">
                  <g id="user">
                    <ellipse cx="12" cy="8" rx="5" ry="6" />
                    <path d="M21.8,19.1c-0.9-1.8-2.6-3.3-4.8-4.2c-0.6-0.2-1.3-0.2-1.8,0.1c-1,0.6-2,0.9-3.2,0.9s-2.2-0.3-3.2-0.9    C8.3,14.8,7.6,14.7,7,15c-2.2,0.9-3.9,2.4-4.8,4.2C1.5,20.5,2.6,22,4.1,22h15.8C21.4,22,22.5,20.5,21.8,19.1z" />
                  </g>
                </g>
              </svg>
              <p>Sign In</p>
            </div>
          </section>
        </div>
      </div>
      <div className="jm-header-secondary-container">
        <div className="jm-header-secondary-box">
          <section className="jm-header-secondary-section">
            <p>Groceries</p>
            <p>Premium Fruits</p>
            <p>Home & Kitchen</p>
            <p>Fashion</p>
            <p>Electronics</p>
            <p>Beauty</p>
            <p>Jewellery</p>
            <p>Home Improvement</p>
            <p>Sports, Toys & Luggage</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Header;
