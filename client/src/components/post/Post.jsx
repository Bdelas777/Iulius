import React from "react";
import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="/assets/users/1.jpeg"
              alt="Foto de perfil"
            />
            <span className="postUsername">Bernardo de la S</span>
            <span className="postDate">Hace 10 minutos</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">
            ¡Hola!, esta es la primera publicación en Iulius
            <img
              className="postImg"
              src="/assets/posts/1.jpeg"
              alt="Publicacion de usuario"
            />
          </span>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="/assets/like.png" alt="" />
            <img className="likeIcon" src="/assets/encanta.png" alt="" />
            <span className="postLikeCounter">A 32 personas les gusta</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">8 comentarios</span>
          </div>
        </div>
      </div>
    </div>
  );
}
