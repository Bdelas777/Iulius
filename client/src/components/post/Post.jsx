import React, { useState, useEffect } from "react";
import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [usuario, setUsuario] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUsuario = async () => {
      const res = await axios.get(`/usuarios?userId=${post.userId}`);
      setUsuario(res.data);
    };
    fetchUsuario();
  }, [post.userId]);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${usuario.username}`}>
              <img
                className="postProfileImg"
                src={
                  usuario.fotoPerfil
                    ? PF + usuario.fotoPerfil
                    : PF + "users/noAvatar.png"
                }
                alt="Foto de perfil"
              />
            </Link>
            <span className="postUsername">{usuario.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={PF + post.imagen} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={`${PF}like.png`}
              onClick={likeHandler}
              alt="Me gusta"
            />
            <img
              className="likeIcon"
              src={`${PF}encanta.png`}
              onClick={likeHandler}
              alt="Me encanta"
            />
            <span className="postLikeCounter">A {like} personas les gusta</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comentarios</span>
          </div>
        </div>
      </div>
    </div>
  );
}
