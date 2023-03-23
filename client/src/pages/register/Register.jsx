import React from "react";
import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Iulius</h3>
          <span className="registerDesc">
            Conectaté con el mundo y conoce un nuevo vivir con Iulius.
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <input placeholder="Nombre" className="registerInput" />
            <input placeholder="Correo" className="registerInput" />
            <input placeholder="Contraseña" className="registerInput" />
            <input
              placeholder="Confirma tu contraseña"
              className="registerInput"
            />
            <button className="registerButton">Registrarse</button>
            <button className="registerRegisterButton">Iniciar sesión</button>
          </div>
        </div>
      </div>
    </div>
  );
}
