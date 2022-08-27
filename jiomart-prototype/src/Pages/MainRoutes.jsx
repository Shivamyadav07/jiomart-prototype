
import React from "react";
import { Routes, Route } from "react-router-dom";
import MainHome from "../HomePage/MainHome";
import CartPage from "./CartPage";
import Login from "./Login";
import Signup from "./Signup";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainHome />}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route> 
    </Routes>
  );
};

export default MainRoutes;
