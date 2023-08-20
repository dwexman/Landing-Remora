import React from "react";
import Card1 from "../../components/cards/card1";
import "./acerca-de.css";

export function AcercaDe () {
    return (
        <div className="jumbotron">
        <div className="container">
        <div className="container-fluid p-5 mb-4 bg-light rounded-4">
            <h1 className="tittle">Acerca De</h1>
            <img src="https://www.thehumancapitalhub.com/_next/image?url=https%3A%2F%2Fthehubbackend.com%2Fmedia%2F91422-disrupting_the_hr_workforce_5cc32496b50f0.jpg&w=1920&q=75" class="card-img-top img-fluid rounded" alt="..."/>
            <p className="text">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
            <button className="button" type="button">
            <a className="nav-link" href="contacto">Contáctanos</a>
            </button>
        </div>
        </div>
        </div>
    )
    }
    

    

export default AcercaDe