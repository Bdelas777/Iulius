import React, { useRef } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const password2 = useRef();
  const historial = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (password2.current.value !== password.current.value) {
      password2.current.setCustomValidity("Las contraseñas no coinciden");
    } else {
      const usuario = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", usuario);
        historial("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Iulius</h3>
          <span className="registerDesc">
            Conectaté con el mundo y conoce un nuevo vivir con Iulius.
          </span>
        </div>
        <div className="registerRight" onSubmit={handleClick}>
          <form className="registerBox">
            <input
              placeholder="Nombre"
              className="registerInput"
              ref={username}
              required
            />
            <input
              placeholder="Correo"
              className="registerInput"
              ref={email}
              required
              type="email"
            />
            <input
              placeholder="Contraseña"
              className="registerInput"
              ref={password}
              required
              type="password"
              minLength="6"
            />
            <input
              placeholder="Confirma tu contraseña"
              className="registerInput"
              ref={password2}
              required
              type="password"
              minLength="6"
            />
            <button className="registerButton" type="submit">
              Registrarse
            </button>
            <button className="registerRegisterButton">Iniciar sesión</button>
          </form>
        </div>
      </div>
    </div>
  );
}
