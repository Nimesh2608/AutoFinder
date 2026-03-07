import { useEffect, useState } from "react";
import "./Inventario.css";

export default function Inventario() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/cars")
      .then(res => res.json())
      .then(data => setCars(data.cars));
  }, []);

  return (
    <div className="inventario">
      <h1>Inventario Auto</h1>
      <div className="grid">
        {cars.map(car => (
          <div className="card" key={car.id}>
            <div className="image-wrapper">
              <img src={car.immagine} alt={`${car.marca} ${car.modello}`} />
            </div>
            <div className="card-body">
              <h3>{car.marca} {car.modello}</h3>
              <p>Anno: {car.anno}</p>
              <span className="price">{car.prezzo} €</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}