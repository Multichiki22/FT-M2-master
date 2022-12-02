import React from "react";
import "./Contact.modules.css";
// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(inputs) {
  const errors = {};
  if (!inputs.name) {
    errors.name = "Se requiere un nombre";
  }
  if (!regexEmail.test(inputs.email)) {
    errors.email = "Debe ser un correo electrónico";
  }
  if (inputs.phone <= 0) {
    errors.phone = "Sólo números positivos";
  }
  if (!inputs.subject) {
    errors.subject = "Se requiere un asunto";
  }
  if (!inputs.message) {
    errors.message = "Se requiere un mensaje";
  }
  return errors;
}

export default function Contact() {
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    phone: 0,
    subject: "",
    message: "",
  });

  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const handleSubmit = function (evento) {
    evento.preventDefault();
    if (Object.values(errors).length == 0) {
      alert("Datos completos");
      setInputs({
        name: "",
        email: "",
        phone: 0,
        subject: "",
        message: "",
      });
      setErrors({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } else {
      alert("Debes corregir los errores");
    }
  };

  const handleChange = (evento) => {
    const propiedad = evento.target.name;
    const valor = evento.target.value;
    setInputs({
      ...inputs,
      [propiedad]: valor,
    });
    setErrors(
      validate({
        ...inputs,
        [propiedad]: valor,
      })
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          className={errors.name && "warning"}
          type="text"
          value={inputs.name}
          name="name"
          onChange={handleChange}
          placeholder="Escribe tu nombre..."
        />
        <p className="danger">{errors.name}</p>
        <label>Correo Electrónico:</label>
        <input
          className={errors.email && "warning"}
          type="text"
          value={inputs.email}
          name="email"
          onChange={handleChange}
          placeholder="Escribe tu email..."
        />
        <p className="danger">{errors.email}</p>
        <label>Teléfono:</label>
        <input
          className={errors.phone && "warning"}
          type="number"
          value={inputs.phone}
          name="phone"
          onChange={handleChange}
          placeholder="Escribe un teléfono..."
        />
        <p className="danger">{errors.phone}</p>
        <label>Asunto:</label>
        <input
          className={errors.subject && "warning"}
          type="text"
          value={inputs.subject}
          name="subject"
          onChange={handleChange}
          placeholder="Escribe el asunto..."
        />
        <p className="danger">{errors.subject}</p>
        <label>Mensaje:</label>
        <textarea
          className={errors.message && "warning"}
          type="text"
          value={inputs.message}
          name="message"
          onChange={handleChange}
          placeholder="Escribe tu mensaje..."
        />
        <p className="danger">{errors.message}</p>
        <button type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}
