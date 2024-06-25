import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPersonaje } from "../services/api";
import "../App.css";
import Filtro from "../components/filtroPersonaje";

function ListadoPersonaje() {
  const [personajes, setPersonajes] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");

  useEffect(() => {
    const getCharacters = async () => {
      const data = await fetchPersonaje();
      setPersonajes(data);
    };
    getCharacters();
  }, []);

  const handleFiltroChange = (event) => {
    setFiltro(event.target.value);
  };

  const filteredPersonajes = personajes.filter((personaje) => {
    const nombreMatch = personaje.name.toLowerCase().includes(filtro.toLowerCase());
    const statusMatch = status === "" || personaje.status === status;
    const speciesMatch = species === "" || personaje.species === species;

    return nombreMatch && statusMatch && speciesMatch;
  });

  return (
    <div className="container">
      <h1>Listado de personajes</h1>

      <div className="filter-container" style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={filtro}
          onChange={handleFiltroChange}
          placeholder="Buscar por nombre..."
          className="filter-select"
        />
        <p>Personajes Disponibles: {personajes.length}</p>
      </div>

      <Filtro status={status} setStatus={setStatus} species={species} setSpecies={setSpecies} />

      <div className="personaje-listado">
        {filteredPersonajes.length === 0 ? (
          <p>No se encontraron personajes</p>
        ) : (
          filteredPersonajes.map((personaje) => (
            <Link key={personaje.id} to={`/personaje/${personaje.id}`}>
              <div className="personaje">
                <img src={personaje.image} alt={personaje.name} />
                <h2>{personaje.name}</h2>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default ListadoPersonaje;
