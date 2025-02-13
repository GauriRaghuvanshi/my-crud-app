import React from "react";
import Navbar from "./Navbar";



const Layout = ({ children }) => (
    <div className="container mx-auto p-4">
      <Navbar />
      <h1 className="text-3xl font-bold text-center my-4">CRUD App</h1>
      {children}
    </div>
  );
  export default Layout;