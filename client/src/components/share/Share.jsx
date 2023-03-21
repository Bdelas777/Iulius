import React from "react";
import "./share.css";
import MovieIcon from "@mui/icons-material/Movie";
import LabelIcon from "@mui/icons-material/Label";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src="/assets/users/1.jpeg"
            alt="Foto de Perfil"
          />
          <input
            placeholder="¿En que estas pensando, Bernardo?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <MovieIcon htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Media</span>
            </div>
            <div className="shareOption">
              <LabelIcon htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Etiqueta</span>
            </div>
            <div className="shareOption">
              <AddLocationAltIcon htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Ubicación</span>
            </div>
            <div className="shareOption">
              <EmojiEmotionsIcon htmlColor="#faee57" className="shareIcon" />
              <span className="shareOptionText">Emoji</span>
            </div>
          </div>
          <button className="shareButton">Compartir</button>
        </div>
      </div>
    </div>
  );
}
