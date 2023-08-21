import React from "react";
import "./contacto.css";

export function Contacto () {
    return (
    <div className="container">
        <div className="mb-3">
        <label for="exampleFormControlInput1" class="label">Nombre</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Nombre"/>
        <label for="exampleFormControlInput1" class="label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        <select className="form-select" aria-label="Default select example">
  <option selected>Elige una opción</option>
  <option value="1">Consultor Softland</option>
  <option value="2">Referido</option>
  <option value="3">Cliente</option>
</select>
       <div className="mb-3">
      <label for="exampleFormControlTextarea1" class="textArea">Escribe tu consulta</label>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Escribe tu consulta"></textarea>
    </div>

    </div>
    <button type="button" className="btn btn-primary">Enviar</button>
    </div>
 )
}

export default Contacto 