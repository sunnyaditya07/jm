import React from "react";
import Header from "./Header";
import "./DownloadApp.scss";
const DownloadApp = () => {
  return (
    <div>
      <Header />
      <section className="jm-download-page-section">
        <div className="jm-download-page-container">
          <img
            src={require("../../assets/playstore.png")}
            width="100px"
            alt="playystore"
          />
          <p className="jm-download-page-download-text">
            Download Our app to Track your Order
          </p>
          <p className="jm-download-page-download-button">
            <a href="https://www.google.com" target="_blank" rel="noreferrer">
              Download
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default DownloadApp;
