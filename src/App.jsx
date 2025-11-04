import React, { useState, useEffect } from "react";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/products/Products";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <BrowserRouter>
        <Navbar />
        <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
