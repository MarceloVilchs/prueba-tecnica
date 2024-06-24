
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchCharacter } from '../services/fetchCharacter';

// La funcion de listadoPersonaje se encarga de mostrar la lista de personajes traida desde la API de Rick and Morty
function ListadoPersonaje() {

    const [ personajes, setPersonajes ] = useState([]);

// Se utiliza la funcion de flecha para traer los datos de la API de Rick and Morty
    useEffect(() => {
        const getCharacters = async () => {
            const data = await fetchCharacter();
            setPersonajes( data );
        };
        getCharacters();
    } , []);

// Retornamos la lista de personajes con su imagen y nombre 
    return (
        <div >
            <h1>Listado de personajes</h1>
                { personajes.map(( personaje ) => (
                    <Link to={ `/personaje/${ personaje.id }`}>
                        <img src={ personajes.image } alt={ personajes.name } />
                        <h2>{ personajes.name }</h2>

                    </Link>
                ))}
        </div>
    );
}

export default ListadoPersonaje;