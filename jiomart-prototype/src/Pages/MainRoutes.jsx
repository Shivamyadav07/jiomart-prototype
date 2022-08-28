import React from "react";
import { Routes, Route } from "react-router-dom";
import { DescriptionPage } from "../components/DescriptionPage/DescriptionPage";
import MainHome from "../HomePage/MainHome";
import CartPage from "./CartPage";
import Login from "./Login";
import Signup from "./Signup";
import OrderSummaryPage from "./OrderSummaryPage";
import { Beauty } from "./ProductPages/Beauty";
import { Electronics } from "./ProductPages/Electronics";
import { Fashion } from "./ProductPages/Fashion";
import { Groceries } from "./ProductPages/Groceries";
import { HomeKitchen } from "./ProductPages/HomeKitchen";
import { Jewellery } from "./ProductPages/Jewellery";
import { PremiumFruits } from "./ProductPages/PremiumFruits";
import PaymentPage from "./PaymentPage";
import OrderConfirmedPage from "./OrderConfirmedPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainHome />}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route> 
      <Route path="/order" element={<OrderSummaryPage />}></Route>
      <Route path="/beauty" element={<Beauty/>}></Route>
      <Route path="/electronics" element={<Electronics/>}></Route>
      <Route path="/fashion" element={<Fashion/>}></Route>
      <Route path="/homeKitchen" element={<HomeKitchen/>}></Route>
      <Route path="/jewellery" element={<Jewellery/>}></Route>
      <Route path="/groceries" element={<Groceries/>}></Route>
      <Route path="/premiumfruits" element={<PremiumFruits/>}></Route>
      <Route path="/product/:id" element={<DescriptionPage/>}></Route>
      <Route path="/payment" element={<PaymentPage/>}></Route>
      <Route path="/orderplaced" element={<OrderConfirmedPage/>}></Route>
    </Routes>
  );
};

export default MainRoutes;
