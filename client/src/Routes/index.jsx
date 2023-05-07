import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/AuthPages/LoginPage";
import RegisterPage from "../pages/AuthPages/Register";
import ProductPage from "../pages/ProductPage";
import FaqsPage from "../pages/FaqsPage";
import BlogPage from "../pages/BlogPage";
import SingleBlogPage from "../pages/SingleBlogPage";
import CreatePageOne from "../pages/CreateCar/CreatePageOne";
import CreatePageTwo from "../pages/CreateCar/CreatePageTwo";
import CreatePageThree from "../pages/CreateCar/CreatePageThree";
import SingleCarpage from "../pages/SingleCarpage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/faqs" element={<FaqsPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="newcar/stepone" element={<CreatePageOne />} />
      <Route path="newcar/steptwo" element={<CreatePageTwo />} />
      <Route path="newcar/stepthree" element={<CreatePageThree />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/car/:id" element={<SingleCarpage />} />
      <Route path="/blog/:id" element={<SingleBlogPage />} />
    </Routes>
  );
};

export default AllRoutes;
