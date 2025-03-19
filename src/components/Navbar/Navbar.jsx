import React from "react";
// import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"; // Import CSS module
import logo from "../assets/logo192.png"; // Import logo

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      { <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div> }

      <ul className={styles.navLinks}>
        {/* <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contacto">Contacto</Link></li> */}
        {/* <li><Link to="/coche">Coche</Link></li> */}
        {/* <li><Link to="usuarios">Usuarios</Link></li>
        <li><Link to="formulario">Formulario</Link></li> */}
        <li>Home</li>
        
        
      </ul>
    </nav>
  );
};

export default Navbar;