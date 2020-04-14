import React from 'react';
import { render } from 'react-dom';

const Saludo = ()=>{
  const nombre = 'Smith';
  const idioma = "es";
  return (
    <div>
      {
        idioma === "es" ? <p> Hola </p> : <p> Hello </p> 
      }
    </div>
  )
}

const Saludo = ()=>{
  const nombre = 'Smith';
  const idioma = "es";
  return (
    <div>
      {
        idioma === "es" && <p> Hola </p>
      }
      {
        idioma === "en" && <p> Hello </p>
      }
    </div>
  )
}

const App = ()=>{
  return <h1><Saludo/> Hola mundo </h1>;
}

render(<App />, document.getElementById('react-app'));