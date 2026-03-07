import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

export default function Admin() {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);

  // Form fields
  const [marca, setMarca] = useState("");
  const [modello, setModello] = useState("");
  const [anno, setAnno] = useState("");
  const [prezzo, setPrezzo] = useState("");
  const [immagine, setImmagine] = useState("");

  // Check login on mount
  useEffect(() => {
    if (!localStorage.getItem("adminLogged")) {
      navigate("/login");
    }
  }, [navigate]);

  // Load cars
  const loadCars = () => {
    fetch("http://localhost:4000/api/cars")
      .then(res => res.json())
      .then(data => setCars(data.cars));
  };

  useEffect(() => {
    loadCars();
  }, []);

  // Add car
  const handleAddCar = (e) => {
    e.preventDefault();
    if (!marca || !modello || !anno || !prezzo) {
      alert("Compila tutti i campi obbligatori");
      return;
    }

    fetch("http://localhost:4000/api/cars", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ marca, modello, anno, prezzo, immagine })
    }).then(() => {
      setMarca("");
      setModello("");
      setAnno("");
      setPrezzo("");
      setImmagine("");
      loadCars();
    });
  };

  // Delete car
  const handleDelete = (id) => {
    if (window.confirm("Vuoi eliminare questa auto?")) {
      fetch(`http://localhost:4000/api/cars/${id}`, {
        method: "DELETE"
      }).then(() => loadCars());
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("adminLogged");
    navigate("/login");
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Area Admin</h1>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      <p>Gestione inventario</p>

      <form className="admin-form" onSubmit={handleAddCar}>
        <input placeholder="Marca" value={marca} onChange={e => setMarca(e.target.value)} />
        <input placeholder="Modello" value={modello} onChange={e => setModello(e.target.value)} />
        <input placeholder="Anno" value={anno} onChange={e => setAnno(e.target.value)} />
        <input placeholder="Prezzo" value={prezzo} onChange={e => setPrezzo(e.target.value)} />
        <input placeholder="Immagine (es: /images/audi.jpg)" value={immagine} onChange={e => setImmagine(e.target.value)} />
        <button type="submit">➕ Aggiungi auto</button>
      </form>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Auto</th>
            <th>Anno</th>
            <th>Prezzo</th>
            <th>Azioni</th>
          </tr>
        </thead>
        <tbody>
          {cars.map(car => (
            <tr key={car.id}>
              <td>{car.marca} {car.modello}</td>
              <td>{car.anno}</td>
              <td>{car.prezzo} €</td>
              <td>
                <button className="delete-btn" onClick={() => handleDelete(car.id)}>
                  ❌ Elimina
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}