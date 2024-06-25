import React from "react";

// La funcion de Filtro se encarga de mostrar los filtros de Status y Species, en donde se puede filtrar los personajes por su estado y especie
function Filtro({ status, setStatus, species, setSpecies}) {
    return (
        <div className="filter">
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="">Status</option>
                <option value="Alive">Alive</option>
                <option value="Dead">Dead</option>
                <option value="unknown">Unknown</option>
            </select>
            <select value={species} onChange={(e) => setSpecies(e.target.value)}>
                <option value="">Species</option>
                <option value="Human">Human</option>
                <option value="Alien">Alien</option>
                <option value="Humanoid">Humanoid</option>
                <option value="Poopybutthole">Poopybutthole</option>
                <option value="Mytholog">Mytholog</option>
                <option value="Animal">Animal</option>
                <option value="Robot">Robot</option>
                <option value="Cronenberg">Cronenberg</option>
                <option value="Disease">Disease</option>
                <option value="Parasite">Parasite</option>
                <option value="unknown">Unknown</option>
            </select>
        </div>
    );
    
}

export default Filtro;