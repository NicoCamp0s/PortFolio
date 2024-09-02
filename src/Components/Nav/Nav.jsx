import React from 'react';
import styles from'./nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li><a href="#home">Inicio</a></li>
        <li><a href="#works">Proyectos</a></li>
        <li><a href="#Skills">Habilidades</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  )
}

export default Nav;