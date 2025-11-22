import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function BlogList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1337/api/posts?populate=*")
      .then(res => setPosts(res.data.data || []))
      .catch(err => alert("Backend error: " + err.message));
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "2rem",
        padding: "2rem",
      }}
    >
      {posts.length === 0 && <h2>No posts found!</h2>}
      {posts.map(post => {
        const img = post.Image && post.Image[0];
        return (
          <div
            key={post.id}
            style={{
              background: "#232A36",
              color: "#fff",
              borderRadius: "14px",
              boxShadow: "0 2px 12px #2224",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {img && img.url && (
              <img
                src={`http://localhost:1337${img.url}`}
                style={{
                  width: "100%",
                  height: "160px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "1rem"
                }}
                alt={img.name || post.Title}
              />
            )}
            <h2 style={{ margin: "1rem 0 .5rem 0", textAlign: "center" }}>{post.Title}</h2>
            <Link
              to={`/post/${post.id}`}
              style={{
                color: "#ff9100",
                fontWeight: "bold",
                textDecoration: "none",
                border: "2px solid #ff9100",
                borderRadius: "8px",
                padding: "0.5rem 1rem",
                marginTop: "1rem"
              }}
            >
              Read More
            </Link>
          </div>
        );
      })}
    </div>
  );
}
