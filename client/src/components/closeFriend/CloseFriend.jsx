import React from "react";
import "./closeFriend.css";
export default function CloseFriend({ usuario }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="sidebarFriend">
      <img
        className="sidebarFriendImg"
        src={PF + usuario.fotoPerfil}
        alt="Imagenes de amigos"
      />
      <span className="sidebarFriendName"> {usuario.username}</span>
    </li>
  );
}
