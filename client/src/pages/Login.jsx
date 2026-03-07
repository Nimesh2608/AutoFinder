import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("adminLogged")) {
      navigate("/admin");
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("adminLogged", "true");
      navigate("/admin");
    } else {
      alert("Credenziali errate");
    }
  };

  return (
    <div className="container login-container">
      <h1>Login Admin</h1>
      <div className="login-box">
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Accedi</button>
        </form>
        <p className="login-hint">
          Demo: <strong>admin / admin123</strong>
        </p>
      </div>
    </div>
  );
}