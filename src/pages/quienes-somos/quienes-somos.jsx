import React from "react";
import "./quienes-somos.css"; 

export function QuienesSomos () {
    return (
        <div className="jumbotron">
        <div className="container">
        <div className="container-fluid p-5 mb-4 bg-light rounded-4">
            <h1 className="tittle">Quiénes Somos</h1>
            <img src="https://www.homecareinsight.co.uk/2020/07/connected-technology.jpg" class="card-img-top img-fluid rounded" alt="..."/>
            <p className="text">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
            <button className="button" type="button">
            <a className="nav-link" href="contacto">Contáctanos</a>
            </button>
        </div>
        </div>
        </div>
    )
    }
    
    export default QuienesSomos