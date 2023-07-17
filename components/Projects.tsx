import React from "react";
import Title from "./Title";
import Image from "next/image";
import { VscProject } from "react-icons/vsc";

import coffeeProject from "../public/img/projects/Coffee.png";
import portfolioSite from "../public/img/projects/PortfolioSite.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="wrapper">
      {/* <Title text='Projects' icon={<VscProject/>}/> */}
      <Title text="Проекты" icon={<VscProject />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={coffeeProject.src}
          title="Coffee Shops"
          link="https://github.com/Vladisgz/coffee-site"
        />
        <ProjectCard
          img={portfolioSite.src}
          title="Portfolio Site"
          link="https://github.com/Vladisgz/portfolio"
        />
      </div>
    </div>
  );
};

export default Projects;
