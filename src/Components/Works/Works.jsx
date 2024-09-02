import React, { useState } from 'react';
import styles from './works.module.css';

const Works = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "Medconnect",
      description: "MedConnect es una aplicación web desarrollada como plataforma de gestión de citas. Su característica destacada es el sistema integral de gestión de horarios, que brinda a los usuarios una experiencia perfecta para reservar citas y manejar todas las tareas administrativas necesarias dentro del centro médico a través del panel de administración. La plataforma cuenta con un inicio de sesión externo con Google.",
      technologies: "React, Redux, Node.js, Next.js, FireBase",
      link: "#",
      image: "/image/imagenWeatherApi.jpeg"
    },
    {
      title: "PI Food",
      description: "Proyecto intermedio de la cursada, una SPA realizada a partir de la API spoonacular, este proyecto muestra una serie de recetas donde podremos filtrarlas, ordenardlas y buscar alguna en particular con su informacion en detalle. ESCRIBIRLO MEJOR",
      technologies: "React, Redux, Node.js, Express y Sequelize",
      link: "#",
      image: "/image/imagenWeatherApi.jpeg"
    },
    {
      title: "PI Countries",
      description: "Proyecto intermedio de la cursada, una SPA realizada a partir de la API restcountries, este proyecto muestra los paises del mundo donde podremos filtrarlos, ordenardlos y buscar alguno en particular con su informacion en detalle, ademas de poder crearles una actividad turistica.  ESCRIBIRLO MEJOR",
      technologies: "React, Redux, Node.js, Express y Sequelize",
      link: "#",
      image: "/image/imagenWeatherApi.jpeg"
    },
    {
      title: "GameZone",
      description: "Nuestro proyecto grupal consiste en una página web que se asemeja a la plataforma Steam, donde los usuarios pueden comprar juegos en línea. ",
      technologies: "React, Redux, Node.js, Express, sequelize, FireBase",
      link: "#",
      image: "/image/imagenWeatherApi.jpeg"
    },
    {
      title: "Weather Api",
      description: "Aplicacion simple donde muestra el clima en la ubicacion solicitada por ciudad",
      technologies: "React, boostrap",
      link: "#",
      image: "/image/imagenWeatherApi.jpeg"
    }
  ];

  const handleMouseEnter = (index) => {
    setHoveredProject(index);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <section id="works" className={styles.works}>
      <h2 className={styles.title}>Proyectos</h2>
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${styles.project} ${hoveredProject === index ? styles.expanded : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} />
            {hoveredProject === index && (
              <div className={styles.details}>
                <p>{project.description}</p>
                <p><strong>Tecnologías:</strong> {project.technologies}</p>
                
                <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
