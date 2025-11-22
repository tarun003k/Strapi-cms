import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BlogList from "./BlogList";
import About from "./About";
import Contact from "./Contact";
import Categories from "./Categories";
import SinglePost from "./SinglePost";

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{
        background: "#232A36", padding: "1rem",
        display: "flex", gap: "2rem"
      }}>
        <Link to="/" style={{ color: "#fff", fontWeight: "bold" }}>Home</Link>
        <Link to="/categories" style={{ color: "#fff" }}>Categories</Link>
        <Link to="/about" style={{ color: "#fff" }}>About</Link>
        <Link to="/contact" style={{ color: "#fff" }}>Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/post/:id" element={<SinglePost />} />
      </Routes>
    </BrowserRouter>
  );
}
