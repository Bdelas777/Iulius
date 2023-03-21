import React from "react";
import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Usuarios } from "../../data.js";

export default function Post({ post }) {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Usuarios.filter((u) => u.id === post.userId)[0].fotoPerfil}
              alt="Foto de perfil"
            />
            <span className="postUsername">
              {Usuarios.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">
            {post?.desc}
            <img
              className="postImg"
              src={post.imagen}
              alt="Publicacion de usuario"
            />
          </span>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="/assets/like.png" alt="Me gusta" />
            <img
              className="likeIcon"
              src="/assets/encanta.png"
              alt="Me encanta"
            />
            <span className="postLikeCounter">
              A {post.like} personas les gusta
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comentarios</span>
          </div>
        </div>
      </div>
    </div>
  );
}
