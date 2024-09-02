import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>© 2024 Nicolás Campos. Todos los derechos reservados.</p>
        <div className={styles.socials}>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GitHub</a>
        </div>
        {/* <p className={styles.contact}>Contacto: <a href="mailto:your-email@example.com" className={styles.email}>your-email@example.com</a></p> */}
      </div>
    </footer>
  )
}

export default Footer
