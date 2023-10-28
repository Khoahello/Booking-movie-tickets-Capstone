import React from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";

export default function Layout({ children }) {
  return (
    <div className="space-y-5">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
