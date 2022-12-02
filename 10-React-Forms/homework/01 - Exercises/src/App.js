import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Contact from "./components/Contact/Contact";
// import CardDetail from "./components/CardDetail/CardDetail.jsx";
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(inputs) {
  const errors ={}
  if (!inputs.name) {
    errors.name = 'Se requiere un nombre';
 }if (!regexEmail.test(inputs.email)) {
    errors.email = 'Debe ser un correo electrónico';
 }if (inputs.phone<=0){
  errors.phone = 'Sólo números positivos'
 }if (!inputs.subject){
  errors.subject = "Se requiere un asunto"
 }if (!inputs.message){
  errors.message = "Se requiere un mensaje"
 }
 return errors
}

export default function App() {
 
  


  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
