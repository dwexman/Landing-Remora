import React from "react";
import "./jumbotron.css"; 

export function Jumbotron () {
return (
    <div className="jumbotron">
    <div className="container">
    <div className="container-fluid p-5 mb-4 bg-light rounded-4">
        <h1 className="tittle">Bienvenidos</h1>
        <img src="https://hbr.org/resources/images/article_assets/2014/10/Mar20_05_1187745190.jpg" class="card-img-top img-fluid rounded" alt="..."/>
        <p className="text">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
        <button className="button" type="button">
        <a className="nav-link" href="contacto">Contáctanos</a>
        </button>
    </div>
    </div>
    </div>
)
}

export default Jumbotron 