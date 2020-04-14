import React, { Component } from "react";
import { render } from "react-dom";

const nombres = [
  'Smith',
  'Hamilton',
  'Carlos',
  'María'
]

const Saludar = ({ nombre, idioma = 'en' }) =>{
  console.log(idioma);
  const saludo = idioma === 'es' ? 'Hola' : 'Hello';
  return <p> {saludo} {nombre} </p>
}

/*
Saludar.defaultProps = {
  idioma: 'en'
}
*/

const App = () => {
  return <div> <Saludar nombre='Smith' idioma = 'es'/></div>;
}

render(<App />, document.getElementById("react-app"));
