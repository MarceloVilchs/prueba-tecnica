
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPersonaje } from '../services/api';

// La funcion de ListadoPersonaje se encarga de mostrar la lista de personajes traida desde la API de Rick and Morty
function ListadoPersonaje() {

    const [ personajes, setPersonajes ] = useState([]);
    const [filtro, setFiltro] = useState('');
    

// Se utiliza la funcion de flecha para traer los datos de la API de Rick and Morty
    useEffect(() => {
        const getCharacters = async () => {
            const data = await fetchPersonaje();
            setPersonajes( data );
        };
        getCharacters();
    } , []);

    // Manejar cambios en el input de filtro
    const handleFiltroChange = (event) => {
        setFiltro(event.target.value);
    };

    // Filtrar la lista de personajes según el filtro actual
    const filteredPersonajes = personajes.filter((personaje) =>
        personaje.name.toLowerCase().includes(filtro.toLowerCase())
    );

// Retornamos la lista de personajes con su imagen y nombre 
    return (
        <div className='personaje-listado'>
        <h1>Listado de personajes</h1>
        <input
                type='text'
                value={filtro}
                onChange={handleFiltroChange}
                placeholder='Buscar por nombre...'
            />
        {filteredPersonajes.length === 0 ? (
                <p>No se encontraron personajes</p>
            ) : (
                filteredPersonajes.map((personaje) => (
                    <Link key={personaje.id} to={`/personaje/${personaje.id}`}>
                        <img src={personaje.image} alt={personaje.name} />
                        <h2>{personaje.name}</h2>
                    </Link>
                ))
            )}
        </div>
    );
    
}

export default ListadoPersonaje;