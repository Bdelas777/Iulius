import { React, useState, useEffect, useContext } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/" + usuario._id);
      setPosts(res.data);
    };
    fetchPosts();
  }, [username, usuario._id]);

  return (
    <div className="feed">
      <div className="feedWrappper">
        <Share />
        {/* Este es un ejemplo si pones datos */}
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
