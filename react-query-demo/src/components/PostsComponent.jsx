import React from "react";
import { useQuery } from "@tanstack/react-query";

// Fetch function for posts
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

const PostsComponent = () => {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 60000,          // Data is fresh for 1 minute
    cacheTime: 300000,         // Cached for 5 minutes before garbage collection
    refetchOnWindowFocus: false, // Prevent refetch when switching tabs
    keepPreviousData: true,    // Keep old data visible while fetching new
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "left" }}>
      <button onClick={() => refetch()} style={{ marginBottom: "1rem" }}>
        {isFetching ? "⏳ Refreshing..." : "🔄 Refresh Posts"}
      </button>

      {posts.slice(0, 10).map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ddd",
            padding: "1rem",
            borderRadius: "8px",
            marginBottom: "1rem",
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsComponent;
