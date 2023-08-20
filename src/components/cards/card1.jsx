import React from "react";
import "./card.css";

export function Card1() {
  return (
   
        <div className="card" style={{ width: "18rem", display: "inline-block" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Acerca De</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="acerca-de" className="btn btn-primary">Acerca de</a>
          </div>
        </div>
      )

}

export default Card1