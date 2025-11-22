import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav style={{background:"#232A36",color:"#FFF",padding:"1rem 2rem",display:"flex",alignItems:"center",marginBottom:"2rem"}}>
      <div style={{fontWeight:"bold",fontSize:"1.3rem",marginRight:"2rem"}}>Tarun's Blog</div>
      <Link to="/" style={{color:"#FFF",marginRight:"2rem",textDecoration:"none"}}>Home</Link>
      <Link to="/categories" style={{color:"#FFF",marginRight:"2rem",textDecoration:"none"}}>Categories</Link>
      <Link to="/about" style={{color:"#FFF",marginRight:"2rem",textDecoration:"none"}}>About</Link>
      <Link to="/contact" style={{color:"#FFF",textDecoration:"none"}}>Contact</Link>
    </nav>
  );
}
