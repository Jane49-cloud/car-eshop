import React from "react";
import Hero from "../components/Home/Hero";
import CarData from "../components/carData/cars";
import Footer from "../constants/Footer";
import Navbar from "../constants/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CarData />
      <Footer />
    </>
  );
};

export default HomePage;
