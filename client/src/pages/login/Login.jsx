import React, { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { usuario, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  console.log(usuario);
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
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Correo"
              type="email"
              className="loginInput"
              ref={email}
              required
            />
            <input
              placeholder="Contraseña"
              type="password"
              className="loginInput"
              ref={password}
              required
              minLength="6"
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="secondary" size="20px" />
              ) : (
                "Iniciar Sesión"
              )}
            </button>
            <span className="loginForgot">¿Olvidaste tu contraseña?</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="secondary" size="20px" />
              ) : (
                "Crea una cuenta"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
