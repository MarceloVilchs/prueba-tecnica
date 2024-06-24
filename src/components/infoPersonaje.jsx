
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPersonajeID } from '../services/api';

// La funcion de InfoPersonaje se encarga de mostrar la informacion de un personaje en especifico
function InfoPersonaje() {

    const { id } = useParams();
    const [ personaje, setPersonaje ] = useState( null );

    useEffect(() => {
        const getPersonaje = async () => {
            const data = await fetchPersonajeID( id );
            setPersonaje( data );
        };
        getPersonaje();
    } , [ id ]);

    if ( !personaje ) {
        return <div>Cargando...</div>;
    }

// Se retorna la informacion del personaje en especifico en donde se muestra la imagen, nombre, status, especie, genero y origen
    return (
        <div>

            <img src={ personaje.image } alt={ personaje.name } />
            <h2>{ personaje.name }</h2>
            <p>Status: { personaje.status }</p>
            <p>Species: { personaje.species }</p>
            <p>Gender: { CharacterData.gender }</p>
            <p>Origin: { CharacterData.origin.name }</p>

        </div>

    );
    
}
export default InfoPersonaje;