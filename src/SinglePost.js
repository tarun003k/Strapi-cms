import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
export default function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    axios.get(`http://localhost:1337/api/posts/${id}?populate=*`)
      .then(res => setPost(res.data.data))
      .catch(err => alert(`Backend Error: ${err.message}`));
  }, [id]);
  if (!post) return <div>Loading...</div>;
  const img = post.Image && post.Image[0];
  return (
    <div>
      {img && img.url && (
        <img
          src={`http://localhost:1337${img.url}`}
          style={{ width: "400px", borderRadius: "9px" }}
          alt={img.name || post.Title}
        />
      )}
      <h1>{post.Title}</h1>
      <div>{post.Tags}</div>
      <div>{post.published_date}</div>
      {post.Content && post.Content.map((block, idx) =>
        block.type === "paragraph" &&
        <p key={idx}>{block.children[0]?.text}</p>
      )}
      <Link to="/">← Back</Link>
    </div>
  );
}
