import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => (
  <div className="container mx-auto p-4">
    <Navbar />
    {children}
  </div>
);

export default Layout;
