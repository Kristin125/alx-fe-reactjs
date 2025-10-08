import React from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { postId } = useParams();
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>📄 Blog Post ID: {postId}</h2>
      <p>This is a dynamically routed page for post {postId}.</p>
    </div>
  );
};

export default Post;
