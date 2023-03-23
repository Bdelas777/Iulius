import React from "react";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Iulius</h3>
          <span className="loginDesc">
            Conectaté con el mundo y conoce un nuevo vivir con Iulius.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Correo" className="loginInput" />
            <input placeholder="Contraseña" className="loginInput" />
            <button className="loginButton">Iniciar Sesión</button>
            <span className="loginForgot">¿Olvidaste tu contraseña?</span>
            <button className="loginRegisterButton">Crea una cuenta</button>
          </div>
        </div>
      </div>
    </div>
  );
}
