import React from "react";
import "./rightbar.css";
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
            <strong>Benvenuto</strong> y <strong>otros 3 amigos</strong>{" "}
            cumplean años hoy
          </span>
        </div>
        <img src="/assets/ad.jpg" alt="Anuncio" className="rightbarAd" />
        <h4 className="rightbarTitle">Amigos Online</h4>
        <ul className="rightbarFriendsList">
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="/assets/users/3.jpeg"
                alt="Amigos Activos"
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Chalky</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="/assets/users/4.jpeg"
                alt="Amigos Activos"
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Luis</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="/assets/users/5.jpeg"
                alt="Amigos Activos"
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Mister G</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
