import React from "react";
import { enviarForm } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";

const ContactUs = () => {
  const [form, setForm] = React.useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
 });

 const dispatch = useDispatch();

 const handleSubmit =(evento)=>{
  evento.preventDefault();
  dispatch(enviarForm(form))
  setForm({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
 })
 }
 const handleInput = (evento) =>{
  setForm({
    ...form,
    [evento.target.name] : evento.target.value
  })

 }
  return (
    <div className="contactBg">
      <input name="nombre" onChange={handleInput} value={form.nombre}></input>
      <input name="email" onChange={handleInput} value={form.email}></input>
      <input name="asunto" onChange={handleInput} value={form.asunto}></input>
      <input name="mensaje" onChange={handleInput} value={form.mensaje}></input>
      <button onClick={handleSubmit}>ENVIAR</button>
    </div>
  );
};

export default ContactUs;
