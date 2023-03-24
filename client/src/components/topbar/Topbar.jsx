import React from "react";
import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo"> Iulius</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input
            placeholder="Busca amigos o publica un video o una foto"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Inicio</span>
          <span className="topbarLink">Perfil</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ChatIcon />
            <span className="topbarBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsIcon />
            <span className="topbarBadge">1</span>
          </div>
        </div>
        <img
          src="/assets/users/1.jpeg"
          alt="Ejemplo de foto"
          className="topbarImg"
        />
      </div>
    </div>
  );
}
