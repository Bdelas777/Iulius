import React, { useState, useEffect } from "react";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";
import axios from "axios";
import { useParams } from "react-router";

export default function Profile() {
  const [usuario, setUsuario] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const username = useParams().username;

  useEffect(() => {
    const fetchUsuario = async () => {
      const res = await axios.get(`/usuarios?username=${username}`);
      setUsuario(res.data);
    };
    fetchUsuario();
  }, [username]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={usuario.fotoCover || PF + "users/noCover.png"}
                alt=""
              />
              <img
                className="profileUserImg"
                src={usuario.fotoPerfil || PF + "users/noAvatar.png"}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{usuario.username}</h4>
              <span className="profileInfoDesc">{usuario.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar usuario={usuario} />
          </div>
        </div>
      </div>
    </>
  );
}
