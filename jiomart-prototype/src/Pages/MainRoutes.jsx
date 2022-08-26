import React from "react";
import { Routes, Route } from "react-router-dom";
import MainHome from "../HomePage/MainHome";
import CartPage from "./CartPage";
import OrderSummaryPage from "./OrderSummaryPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainHome />}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
      <Route path="/order" element={<OrderSummaryPage />}></Route>
    </Routes>
  );
};

export default MainRoutes;
