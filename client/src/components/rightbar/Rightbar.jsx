import React from "react";
import "./rightbar.css";
import { Usuarios } from "../../data.js";
import Online from "../online/Online";

export default function Rightbar({ usuario }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const HomeRightbar = () => {
    return (
      <>
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
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">Informacion de usuario</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Ciudad: </span>
            <span className="rightbarInfoValue">{usuario.ciudad} </span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">De: </span>
            <span className="rightbarInfoValue">{usuario.de} </span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relación: </span>
            <span className="rightbarInfoValue">
              {usuario.relacion === 1
                ? "Soltero"
                : usuario.relacion === 2
                ? "Casado"
                : "Es complicado"}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src={`${PF}users/2.jpeg`}
              alt="Amigos"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollwingName"> Chocas Garcia</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}users/3.jpeg`}
              alt="Amigos"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollwingName"> Chalky Muffin</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}users/4.jpeg`}
              alt="Amigos"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollwingName"> Luis Perez</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightWrapper"></div>
      {usuario ? <ProfileRightbar /> : <HomeRightbar />}
    </div>
  );
}
