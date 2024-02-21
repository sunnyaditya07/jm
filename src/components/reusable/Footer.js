import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="jm-footer-container">
      <section className="jm-footer-section">
        <div className="jm-footer-image-section">
          <img
            src={require("../../assets/shopping.jpg")}
            alt="shopping"
            className="jm-footer-shopping-image"
          />
          <img
            src={require("../../assets/cares.jpg")}
            alt="shopping"
            className="jm-footer-shopping-image"
          />
        </div>
      </section>
      <section className="jm-footer-detail-section">
        <div className="jm-footer-detail-box">
          <div>
            <ul>
              <li className="jm-footer-detail-title">All Categories</li>
              <li>Grocery</li>
              <li>Electronics</li>
              <li>Fashion</li>
              <li>Beauty</li>
              <li>Home & Kitchen</li>
              <li>Premium Fruits</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="jm-footer-detail-title">Popular Categories</li>
              <li>Staples</li>
              <li> Beverages</li>
              <li> Personal Care </li>
              <li> Home Care </li>
              <li> Fruits & Vegetables </li>
              <li> Baby Care </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="jm-footer-detail-title">Customer Account</li>
              <li> My Account </li>
              <li> My Orders </li>
              <li> Wishlist </li>
              <li> Payment Methods </li>
              <li> Delivery Addresses </li>
              <li> JioMart Wallet </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="jm-footer-detail-title">Help & Support</li>
              <li> About Us </li>
              <li> FAQ </li>
              <li> Terms & Conditions </li>
              <li> Privacy Policy </li>
              <li> E-waste Policy </li>
              <li> Cancellation & Return Policy </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="jm-footer-bottom-navigation-section">
        <div className="jm-footer-bottom-navigation-bottom-bar">
          <div className="jm-footer-bottom-navigation-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="jm-footer-naviagtion-home-icon"
            >
              <path
                d="M22.0702 9.31017L14.4502 2.70017C13.939 2.25018 13.2813 2.00195 12.6002 2.00195C11.9192 2.00195 11.2615 2.25018 10.7502 2.70017L3.13023 9.31017C2.8977 9.5094 2.7303 9.77382 2.64968 10.0692C2.56906 10.3646 2.57894 10.6774 2.67803 10.9671C2.77712 11.2569 2.96086 11.5102 3.2055 11.6944C3.45013 11.8785 3.74439 11.9851 4.05023 12.0002H4.60023V19.0002C4.60023 19.7958 4.9163 20.5589 5.47891 21.1215C6.04152 21.6841 6.80458 22.0002 7.60023 22.0002H10.6002V16.0002H14.6002V22.0002H17.6002C18.3959 22.0002 19.1589 21.6841 19.7215 21.1215C20.2842 20.5589 20.6002 19.7958 20.6002 19.0002V12.0002H21.1502C21.4561 11.9851 21.7503 11.8785 21.995 11.6944C22.2396 11.5102 22.4233 11.2569 22.5224 10.9671C22.6215 10.6774 22.6314 10.3646 22.5508 10.0692C22.4702 9.77382 22.3028 9.5094 22.0702 9.31017Z"
                fill="currentColor"
                fill-opacity="0.65"
              ></path>
            </svg>
            <p>Home</p>
          </div>
          <div className="jm-footer-bottom-navigation-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.8003 6H20.8003C21.0655 6 21.3199 5.89464 21.5074 5.70711C21.6949 5.51957 21.8003 5.26522 21.8003 5C21.8003 4.73478 21.6949 4.48043 21.5074 4.29289C21.3199 4.10536 21.0655 4 20.8003 4H11.8003C11.5351 4 11.2807 4.10536 11.0932 4.29289C10.9057 4.48043 10.8003 4.73478 10.8003 5C10.8003 5.26522 10.9057 5.51957 11.0932 5.70711C11.2807 5.89464 11.5351 6 11.8003 6ZM6.80029 4H4.80029C4.26986 4 3.76115 4.21071 3.38608 4.58579C3.01101 4.96086 2.80029 5.46957 2.80029 6V8C2.80029 8.53043 3.01101 9.03914 3.38608 9.41421C3.76115 9.78929 4.26986 10 4.80029 10H6.80029C7.33073 10 7.83943 9.78929 8.21451 9.41421C8.58958 9.03914 8.80029 8.53043 8.80029 8V6C8.80029 5.46957 8.58958 4.96086 8.21451 4.58579C7.83943 4.21071 7.33073 4 6.80029 4ZM6.80029 14H4.80029C4.26986 14 3.76115 14.2107 3.38608 14.5858C3.01101 14.9609 2.80029 15.4696 2.80029 16V18C2.80029 18.5304 3.01101 19.0391 3.38608 19.4142C3.76115 19.7893 4.26986 20 4.80029 20H6.80029C7.33073 20 7.83943 19.7893 8.21451 19.4142C8.58958 19.0391 8.80029 18.5304 8.80029 18V16C8.80029 15.4696 8.58958 14.9609 8.21451 14.5858C7.83943 14.2107 7.33073 14 6.80029 14ZM20.8003 8H11.8003C11.5351 8 11.2807 8.10536 11.0932 8.29289C10.9057 8.48043 10.8003 8.73478 10.8003 9C10.8003 9.26522 10.9057 9.51957 11.0932 9.70711C11.2807 9.89464 11.5351 10 11.8003 10H20.8003C21.0655 10 21.3199 9.89464 21.5074 9.70711C21.6949 9.51957 21.8003 9.26522 21.8003 9C21.8003 8.73478 21.6949 8.48043 21.5074 8.29289C21.3199 8.10536 21.0655 8 20.8003 8ZM20.8003 14H11.8003C11.5351 14 11.2807 14.1054 11.0932 14.2929C10.9057 14.4804 10.8003 14.7348 10.8003 15C10.8003 15.2652 10.9057 15.5196 11.0932 15.7071C11.2807 15.8946 11.5351 16 11.8003 16H20.8003C21.0655 16 21.3199 15.8946 21.5074 15.7071C21.6949 15.5196 21.8003 15.2652 21.8003 15C21.8003 14.7348 21.6949 14.4804 21.5074 14.2929C21.3199 14.1054 21.0655 14 20.8003 14ZM20.8003 18H11.8003C11.5351 18 11.2807 18.1054 11.0932 18.2929C10.9057 18.4804 10.8003 18.7348 10.8003 19C10.8003 19.2652 10.9057 19.5196 11.0932 19.7071C11.2807 19.8946 11.5351 20 11.8003 20H20.8003C21.0655 20 21.3199 19.8946 21.5074 19.7071C21.6949 19.5196 21.8003 19.2652 21.8003 19C21.8003 18.7348 21.6949 18.4804 21.5074 18.2929C21.3199 18.1054 21.0655 18 20.8003 18Z"
                fill="currentColor"
                fill-opacity="0.65"
              ></path>
            </svg>

            <p>Categories</p>
          </div>
          <div className="jm-footer-bottom-navigation-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16 6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6ZM20 16.5C20 19.5376 16.4183 22 12 22C7.58172 22 4 19.5376 4 16.5C4 13.4624 7.58172 11 12 11C16.4183 11 20 13.4624 20 16.5Z"
                fill="currentColor"
                fill-opacity="0.65"
              ></path>
            </svg>
            <p>Account</p>
          </div>
          <div className="jm-footer-bottom-navigation-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8003 4.00015C14.4645 4.04167 13.1877 4.55952 12.2003 5.46015C11.213 4.55952 9.93607 4.04167 8.60031 4.00015C7.88628 3.99475 7.17837 4.13206 6.51815 4.40403C5.85792 4.676 5.2587 5.07715 4.75565 5.58392C4.25261 6.09069 3.8559 6.69286 3.58881 7.35507C3.32171 8.01728 3.18963 8.72619 3.20031 9.44015C3.20031 12.8102 5.83031 15.8702 10.3603 20.0002L10.8503 20.4502C11.219 20.7875 11.7006 20.9745 12.2003 20.9745C12.7 20.9745 13.1816 20.7875 13.5503 20.4502L14.0403 20.0102C18.5703 15.8602 21.2003 12.8002 21.2003 9.44015C21.211 8.72619 21.0789 8.01728 20.8118 7.35507C20.5447 6.69286 20.148 6.09069 19.645 5.58392C19.1419 5.07715 18.5427 4.676 17.8825 4.40403C17.2222 4.13206 16.5143 3.99475 15.8003 4.00015Z"
                fill="currentColor"
                fill-opacity="0.65"
              ></path>
            </svg>
            <p>WishList</p>
          </div>
          <div className="jm-footer-bottom-navigation-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.1001 5.75041L13.1001 3.13041C12.6487 2.96174 12.1516 2.96174 11.7001 3.13041L4.70015 5.75041C4.62024 5.78774 4.54335 5.83121 4.47015 5.88041L12.4001 8.93041L20.3301 5.93041C20.2588 5.86396 20.1818 5.80374 20.1001 5.75041ZM3.40015 7.62041V16.3804C3.40086 16.7873 3.52569 17.1844 3.75798 17.5185C3.99026 17.8527 4.31894 18.108 4.70015 18.2504L11.4001 20.7604V10.6904L3.40015 7.61041V7.62041ZM21.4001 7.62041L13.4001 10.7004V20.7604L20.1001 18.2504C20.4813 18.108 20.81 17.8527 21.0423 17.5185C21.2746 17.1844 21.3994 16.7873 21.4001 16.3804V7.62041Z"
                fill="currentColor"
                fill-opacity="0.65"
              ></path>
            </svg>
            <p>Orders</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
