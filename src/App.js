import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListadoPersonaje from "./components/listadoPersonaje";
import InfoPersonaje from "./components/infoPersonaje";
import Filtro from "./components/filtroPersonaje";


// Se importa el componente de ListadoPersonaje y se utiliza en la funcion de App
// En donde se utiliza el componente de Router para poder navegar entre las rutas de la aplicacion

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/filtro" element={<Filtro />} />
        <Route path="/" element={<ListadoPersonaje />} />
        <Route path="/personaje/:id" element={<InfoPersonaje />} />
      </Routes>
    </Router>
  );
}

export default App;