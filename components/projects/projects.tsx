import React from "react";
import classes from './projects.module.scss';
import Image from "next/image";
import PageLink from "../ui/link";




const ProjectListSection: React.FC = () => {
  return (
    <section id='projects' className={classes.projects}>
      <div className={classes['projects__heading']}>
        <h2>Projects</h2>
<PageLink href='#'>contact me</PageLink>
      </div>

      
       
    </section>
  );
}

export default ProjectListSection;

