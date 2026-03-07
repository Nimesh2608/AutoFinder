import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const isLogged = localStorage.getItem("adminLogged");

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">🚗 AutoFinder</div>

        <nav className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/inventario">Inventario</NavLink>
          {isLogged ? (
            <NavLink to="/admin">Admin</NavLink>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </nav>
      </div>
    </header>
  );
}
