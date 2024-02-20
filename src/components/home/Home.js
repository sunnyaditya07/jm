import React from "react";
import Header from "../reusable/Header";
import HeroSection from "./HeroSection";
import ProductList from "../product/ProductList";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductList />
    </>
  );
};

export default Home;
