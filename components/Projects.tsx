import React from "react";
import Title from "./Title";
import { VscProject } from "react-icons/vsc";

import coffeeProject from "../public/img/projects/Coffee.png";
import portfolioSite from "../public/img/projects/Vladislav-Khorenko-Frontend-Dev.png";
import ProjectCard from "./ProjectCard";
import projectSite from "../public/img/projects/Easy-shopping-by-Vladis.png";
import nikeSite from "../public/img/projects/NikeApp.png"

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Проекты" icon={<VscProject />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">
        <ProjectCard
          img={coffeeProject.src}
          gitLink="https://github.com/Vladisgz/coffee-site"
        />
        <ProjectCard
          img={portfolioSite.src}
          gitLink="https://github.com/Vladisgz/portfolio"
        />
        <ProjectCard
          img={projectSite.src}
          gitLink="https://github.com/Vladisgz/siteproject.git"
          demoLink="https://siteproject-liard.vercel.app/"
        />
        <ProjectCard
          img={nikeSite.src}
          gitLink="https://github.com/Vladisgz/shoesit"
          demoLink="https://shoesit-delta.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
