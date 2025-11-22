export default function Contact() {
  return (
    <div style={{ padding: "2rem", maxWidth: "650px", margin: "2rem auto" }}>
      <h1>Contact</h1>
      <p>
        For questions, collaboration, or job opportunities, reach out directly:
      </p>
      <ul>
        <li>Email: <a href="mailto:yourmail@example.com">yourmail@example.com</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/">linkedin.com/in/yourprofile</a></li>
        <li>GitHub: <a href="https://github.com/">github.com/yourusername</a></li>
      </ul>
      <p>
        You can also use the contact form below to send a message.
      </p>
      <form
        style={{
          marginTop: "1rem",
          background: "#f6f6f6",
          padding: "1.2rem",
          borderRadius: "8px"
        }}
        onSubmit={e => { e.preventDefault(); alert("Message sent!"); }}
      >
        <input
          type="text"
          placeholder="Your Name"
          required
          style={{ width: "100%", marginBottom: "0.5rem", padding: "0.6rem", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          style={{ width: "100%", marginBottom: "0.5rem", padding: "0.6rem", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <textarea
          placeholder="Your Message"
          required
          style={{ width: "100%", marginBottom: "0.8rem", padding: "0.6rem", borderRadius: "5px", border: "1px solid #ccc", height: "80px" }}
        />
        <button
          type="submit"
          style={{ padding: "0.7rem 1.2rem", background: "#ff9100", color: "#fff", border: "none", borderRadius: "6px" }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
