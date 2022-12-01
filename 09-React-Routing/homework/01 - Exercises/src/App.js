import React from "react";
/* eslint-disable */
import Home from "./components/Home/Home.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Shipping from "./components/Shipping/Shipping.jsx";
import Promotions from "./components/Promotions/Promotions.jsx";
import CardDetail from "./components/CardDetail/CardDetail.jsx";
import { Routes, Route } from "react-router-dom";
/* eslint-disable */

export default function App() {
  return (
    <>
      <NavBar path="/" />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/shipping" element={<Shipping />} />
        <Route exact path="/promotions" element={<Promotions />} />
        <Route exact path="/cruises/:id" element={<CardDetail />} />
      </Routes>
    </>
  );
}
