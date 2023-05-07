import React from "react";
import Blogs from "../components/Blog/Blogs";
import Navbar from "../constants/Navbar";
import Footer from "../constants/Footer";

const BlogPage = () => {
  return (
    <>
      <Navbar />
      <Blogs />
      <Footer />
    </>
  );
};

export default BlogPage;
