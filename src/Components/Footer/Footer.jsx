import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>© 2024 Nicolás Campos. Todos los derechos reservados.</p>
        <div className={styles.socials}>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GitHub</a>
          <a href="mailto:nikovic123@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Gmail</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
