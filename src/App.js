import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListadoPersonaje from "./components/listadoPersonaje";

// Se importa el componente de ListadoPersonaje y se utiliza en la funcion de App
// En donde se utiliza el componente de Router para poder navegar entre las rutas de la aplicacion

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListadoPersonaje />} />
      </Routes>
    </Router>
  );
}

export default App;