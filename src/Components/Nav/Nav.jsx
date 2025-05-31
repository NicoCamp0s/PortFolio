import styles from'./nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li><a href="#home" className={styles.navLink}>Inicio</a></li>
        <li><a href="#works" className={styles.navLink}>Proyectos</a></li>
        <li><a href="#Skills" className={styles.navLink}>Habilidades</a></li>
        <li><a href="#contact" className={styles.navLink}>Contacto</a></li>
      </ul>
    </nav>
  )
}

export default Nav;