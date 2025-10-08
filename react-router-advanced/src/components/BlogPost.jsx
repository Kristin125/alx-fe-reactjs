// src/components/BlogPost.jsx
import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Blog Post ID: {id}</h2>
      <p>This is the content for blog post number {id}.</p>
    </div>
  );
};

export default BlogPost;
