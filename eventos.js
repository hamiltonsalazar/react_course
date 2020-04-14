import React, { useState } from "react";
import { render } from "react-dom";

const Saludo = () =>{
  const [name, setName] = useState("vacío");
  return(
    <div>
    {/* SyntheticEvent */}
      <input type="text" onChange={ (ev)=> setName(ev.target.value) }/>
      <p>Hola {name}</p>
    </div>
  );
}


const App = () => {
 return <div><Saludo /></div>
}

render(<App />, document.getElementById("react-app"));