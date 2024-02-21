import React from "react";
import Header from "../reusable/Header";
import HeroSection from "./HeroSection";
import ProductList from "../product/ProductList";
import Footer from "../reusable/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductList />
      <Footer />
    </>
  );
};

export default Home;
