import React from "react";
import "./rightbar.css";
import { Usuarios } from "../../data.js";
import Online from "../online/Online";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightWrapper">
        <div className="birthdayContainer">
          <img
            className="birthdayImg"
            src="/assets/regalo.png"
            alt="Icono de cumpleaños"
          />
          <span className="birthdayText">
            <strong>Benvenuto</strong> y <strong>otros 3 amigos</strong> cumplen
            años hoy
          </span>
        </div>
        <img src="/assets/ad.jpg" alt="Anuncio" className="rightbarAd" />
        <h4 className="rightbarTitle">Amigos Online</h4>
        <ul className="rightbarFriendsList">
          {Usuarios.map((u) => (
            <Online key={u.id} usuario={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
