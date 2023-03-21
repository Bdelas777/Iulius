import React from "react";
import "./online.css";

export default function Online({ usuario }) {
  return (
    <li className="rightBarFriend">
      <div className="rightbarProfileImgContainer">
        <img
          src={usuario.fotoPerfil}
          alt="Amigos Activos"
          className="rightbarProfileImg"
        />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{usuario.username}</span>
    </li>
  );
}
