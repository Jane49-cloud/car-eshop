import {
  FaCreditCard,
  FaBriefcase,
  FaCar,
  FaBlog,
  FaHandsHelping,
  FaPaypal,
} from "react-icons/fa";
import React from "react";

const sublinks = [
  {
    page: "All cars",
    links: [
      { label: "Brand New", icon: <FaCar />, url: "/" },
      { label: "Old cars", icon: <FaCar />, url: "/" },
      { label: "Import cars", icon: <FaCar />, url: "/" },
    ],
  },

  {
    page: "Blogs",
    links: [
      { label: "Blogs", icon: <FaBlog />, url: "/blog" },
      // { label: "libraries", icon: <FaBook />, url: "/" },
      { label: "help", icon: <FaHandsHelping />, url: "/faqs" },
      { label: "billing", icon: <FaPaypal />, url: "/" },
    ],
  },
  {
    page: "company",
    links: [
      { label: "about", icon: <FaBriefcase />, url: "/" },
      { label: "customers", icon: <FaCreditCard />, url: "/" },
    ],
  },
];

export default sublinks;
