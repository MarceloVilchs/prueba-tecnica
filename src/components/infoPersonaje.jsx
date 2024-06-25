
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPersonajeID } from '../services/api';
import '../App.css';
import { Link } from 'react-router-dom';

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
    <div className="container">
      <div className="personaje-detalles">
      <Link to="/" className="atras-btn">ATRAS</Link>
      <br />
      <br />
        <img src={personaje.image} alt={personaje.name} />
        <h2>{personaje.name}</h2>
        <p>Status: {personaje.status}</p>
        <p>Species: {personaje.species}</p>
        <p>Gender: {personaje.gender}</p>
        <p>Origin: {personaje.origin.name}</p>
      </div>

      
    </div>
  );
}
export default InfoPersonaje;