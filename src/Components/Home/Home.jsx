import styles from './home.module.css'

const Home = () => {
  return (
    <section id="home" className={styles.home}>
      <h2>Sobre Mí</h2>
      <p>Hola, soy Nico. Tengo 22 años y soy un desarrollador Full Stack con experiencia en proyectos tanto individuales como grupales. Desde hace más de un año, estoy estudiando la carrera de Analista Programador Universitario (APU) en la Universidad Nacional de La Plata. 
      </p>
      <p>Aunque todavía no tengo claro cuál será mi objetivo profesional a largo plazo, me apasionan dos áreas: desarrollo web ydesarrollo de videojuegos. Me interesa el desarrollo web por la posibilidad de crear experiencias en línea interactivas y el desarrollo de videojuegos me fascina por la oportunidad de construir mundos virtuales. Estoy entusiasmado por aprender más sobre estas áreas y ver cuál de ellas se ajusta mejor a mis intereses y habilidades.</p>
      <p>Estoy emocionado por las oportunidades futuras y siempre estoy en busca de nuevos desafíos que me permitan seguir evolucionando como desarrollador.</p>
      <a href="/docs/Nicolas Campos CV.pdf" target="_blank" rel="noopener noreferrer" className={styles.cvLink}>
        <p className={styles.cvTitle}>Ver Currículum</p>
        <img src="/image/file_search.svg" alt="Ver currículum" className={styles.resumeIcon} />
      </a>
    </section>
  )
}

export default Home