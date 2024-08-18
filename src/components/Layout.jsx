import React from "react";
import Topline from "../components/Navigation/Line";
import Topnav from "./Navigation/Topnav";
import Mainnav from "./Navigation/Mainnav";
import Footer from "./Footer";

export const Layout = ({ children }) => {
  return (
    // This layout use for all pages to render Navbar
    <>
      <Topline></Topline>
      <Topnav></Topnav>
      <Mainnav></Mainnav>
      <div>{children}</div>
      <Footer></Footer>
    </>
  );
};
