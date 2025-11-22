import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1337/api/posts?populate=*")
      .then(res => {
        setPosts(res.data.data || []);
        // Collect categories from posts, remove duplicates efficiently
        const cats = Array.from(
          new Set(
            res.data.data
              .map(post => post.Category?.trim())
              .filter(cat => !!cat)
          )
        );
        setCategories(cats);
      });
  }, []);

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "2rem auto" }}>
      <h1>Categories</h1>
      {categories.length === 0 ? (
        <p>No categories found.</p>
      ) : (
        <ul style={{ fontSize: "1.2rem" }}>
          {categories.map(cat => (
            <li key={cat} style={{ marginBottom: "0.7rem", fontWeight: "bold" }}>
              {cat}
              <ul style={{ marginLeft: "1.4rem", marginTop: "0.3rem" }}>
                {posts
                  .filter(post => post.Category === cat)
                  .map(post => (
                    <li key={post.id} style={{ marginBottom: "0.4rem" }}>
                      {post.Title}
                    </li>
                  ))
                }
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
