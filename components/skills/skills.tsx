import React from "react";
import classes from './skills.module.scss';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import Image from "next/image";


interface SkillProps {
  name: string;
  experience: string;
  icon: JSX.Element;
}

const skills: SkillProps[] = [
  { name: "HTML", experience: "Experience", icon: <FaHtml5 /> },
  { name: "CSS", experience: "Experience", icon: <FaCss3Alt /> },
  { name: "Javascript", experience: "Experience", icon: <IoLogoJavascript /> },
  { name: "NextJs", experience: "Experience", icon: <SiNextdotjs /> },
  { name: "React", experience: "Experience", icon: <FaReact /> },
  { name: "Sass", experience: "Experience", icon: <FaSass /> },
];

const SkillListSection: React.FC = () => {
  return (
    <section id='skills' className={classes.skills}>
        <div className={classes['skills__ring']}><Image  src={'/images/pattern-rings.svg'} width={530} height={80} alt='rings pattern' /></div>
      <h2 className={classes['skills__title']}>My Skills:</h2>
      <article className={classes["skill-items"]}>
        {skills.map((skill, index) => (
          <div key={index} className={classes["skill-items__item"]}>
            <h3 className={classes["skill-items__name"]}>{skill.name}{skill.icon}</h3>
            <p className={classes["skill-items__experience"]}>{skill.experience}</p>
          </div>
        ))}
      </article>
    </section>
  );
}

export default SkillListSection;

