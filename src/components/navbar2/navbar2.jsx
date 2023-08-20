import React from "react";
import "./navbar2.css";
import logo from "../../logo.png"
import { Link } from "react-router-dom";

export function Navbar2 () {
    return(
     
        <header className="main-header">

  <nav className="navbar navbar-expand-lg main-nav px-0">
    <Link className="navbar-brand" to="home">
                      <img src={logo} alt="remora"/>
                    </Link>
   
    <div className="collapse navbar-collapse" id="mainMenu">
      <ul className="navbar-nav ml-auto text-uppercase f1">
        <li>
          <Link to="/" className="active active-first">home</Link>
        </li>
        <li>
          <Link to="/acerca-de">acerca de</Link>
        </li>
        <li>
          <Link to="/quienes-somos">quienes somos</Link>
        </li>
        <li>
          <Link to="/contacto">contacto</Link>
        </li>
      </ul>
    </div>
  </nav>
  </header>

)
}
