import styles from './nav.module.css';
import { useEffect, useState } from 'react';

const Nav = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDesktopNav, setShowDesktopNav] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY < 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const handleLinkClick = () => setMenuOpen(false);
  const showNavDesktop = atTop || showDesktopNav;

  return (
    <nav
      className={styles.nav}
      onMouseEnter={() => setShowDesktopNav(true)}
      onMouseLeave={() => setShowDesktopNav(false)}
    >
      <button className={styles.menuButton} onClick={toggleMenu}>☰</button>

      <div className={`${styles.sideMenu} ${menuOpen ? styles.open : ''}`}>
        <ul className={styles.navList}>
          <li><a href="#Inicio" className={styles.navLink} onClick={handleLinkClick}>Inicio</a></li>
          <li><a href="#Home" className={styles.navLink} onClick={handleLinkClick}>Sobre Mi</a></li>
          <li><a href="#Skills" className={styles.navLink} onClick={handleLinkClick}>Habilidades</a></li>
          <li><a href="#Works" className={styles.navLink} onClick={handleLinkClick}>Proyectos</a></li>
          <li><a href="#Contact" className={styles.navLink} onClick={handleLinkClick}>Contacto</a></li>
          <li>
            <button onClick={toggleDarkMode} className={styles.button}>
              {darkMode ? "🌞 Modo Claro" : "🌙 Modo Oscuro"}
            </button>
          </li>
        </ul>
      </div>

      {menuOpen && <div className={styles.overlay} onClick={toggleMenu} />}

      <ul className={`${styles.navListDesktop} ${showNavDesktop ? styles.visible : styles.hidden}`}>
        <li><a href="#Inicio" className={`${styles.navLink} ${activeSection === 'Inicio' ? styles.active : ''}`}>Inicio</a></li>
        <li><a href="#Home" className={`${styles.navLink} ${activeSection === 'Home' ? styles.active : ''}`}>Sobre Mi</a></li>
        <li><a href="#Skills" className={`${styles.navLink} ${activeSection === 'Skills' ? styles.active : ''}`}>Habilidades</a></li>
        <li><a href="#Works" className={`${styles.navLink} ${activeSection === 'Works' ? styles.active : ''}`}>Proyectos</a></li>
        <li><a href="#Contact" className={`${styles.navLink} ${activeSection === 'Contact' ? styles.active : ''}`}>Contacto</a></li>
        <li>
          <button onClick={toggleDarkMode} className={styles.button}>
            {darkMode ? "🌞 Modo Claro" : "🌙 Modo Oscuro"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
