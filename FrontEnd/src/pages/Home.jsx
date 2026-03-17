import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-content">
          <h1>Benvenuto nella Concessionaria</h1>
          <p>Scopri le migliori offerte di auto nuove e usate</p>

          <Link to="/inventario" className="btn-primary">
            Vai all’inventario
          </Link>
        </div>

        <div className="hero-image">
          <img src="/images/hero-car.jpg" alt="Auto" />
        </div>
      </section>
    </>
  );
}