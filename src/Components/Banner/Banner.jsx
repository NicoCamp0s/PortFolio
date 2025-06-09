import styles from './banner.module.css';

const Banner = () => {
  return (
    <section id='Inicio' className={styles.banner}>
      <h2>FullStack Developer</h2>
      <h2>Nicolás Campos</h2>
      <img src="/image/icono.svg" alt="Avatar de Nicolás" />
      <p>Hola, soy Nico. Soy un desarrollador web fullstack comprometido con crear productos funcionales, escalables y pensados para el usuario.</p>
    </section>
  );
};

export default Banner;
