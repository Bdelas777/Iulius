import React from "react";
import "./closeFriend.css";
export default function CloseFriend({ usuario }) {
  return (
    <li className="sidebarFriend">
      <img
        className="sidebarFriendImg"
        src={usuario.fotoPerfil}
        alt="Imagenes de amigos"
      />
      <span className="sidebarFriendName"> {usuario.username}</span>
    </li>
  );
}
