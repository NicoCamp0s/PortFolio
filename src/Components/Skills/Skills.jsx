import React from 'react'
import styles from "./Skills.module.css"
import { FrontSkills, BackSkills, DevOpsSkills } from './SkillsData'

const Skills = () => {
  return (
    <section id="Skills" className={styles.skillsContainer}>
    <h2 className={styles.title}>Habilidades</h2>
      <div className={styles.frontContainer}>
        <h3 className={styles.subTitle}>Frontend</h3>
      {FrontSkills.map((skill, index) => (
        <a 
          key={index} 
          href={skill.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.skillContainer}
        >
          <h3 className={styles.skillName}>{skill.name}</h3>
          <img src={skill.img} alt={skill.name} className={styles.skillIcon} />
        </a>
      ))}
      </div>
      <div className={styles.backContainer}>
        <h3 className={styles.subTitle}>Backend</h3>
      {BackSkills.map((skill, index) => (
        <a 
          key={index} 
          href={skill.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.skillContainer}
        >
          <h3 className={styles.skillName}>{skill.name}</h3>
          <img src={skill.img} alt={skill.name} className={styles.skillIcon} />
        </a>
      ))}
      </div>
      <div className={styles.devOpsContainer}>
        <h3 className={styles.subTitle}>DevOps</h3>
      {DevOpsSkills.map((skill, index) => (
        <a 
          key={index} 
          href={skill.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.skillContainer}
        >
          <h3 className={styles.skillName}>{skill.name}</h3>
          <img src={skill.img} alt={skill.name} className={styles.skillIcon} />
        </a>
      ))}
      </div>
    </section>
  )
}

export default Skills