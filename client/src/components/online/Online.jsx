import React from "react";
import "./online.css";

export default function Online({ usuario }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="rightBarFriend">
      <div className="rightbarProfileImgContainer">
        <img
          src={PF + usuario.fotoPerfil}
          alt="Amigos Activos"
          className="rightbarProfileImg"
        />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{usuario.username}</span>
    </li>
  );
}
