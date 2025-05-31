import styles from './banner.module.css';

const Banner = () => {
  return (
    <section className={styles.banner}>
      <h2>Nicolás Campos</h2>
      <h2>FullStack Developer</h2>
      <img src="/image/icono.svg" alt="Avatar de Nicolás" />
      <p>Soy un desarrollador web apasionado por crear soluciones innovadoras y escalables.</p>
    </section>
  );
};

export default Banner;
