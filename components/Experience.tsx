import React from "react";
import Title from "./Title";
import { MdWorkHistory } from "react-icons/md";
import { SiSparkar } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FcElectronics } from "react-icons/fc";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Опыт работы" icon={<MdWorkHistory />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ExperienceCard
          title="Freelancer"
          subTitle="SparkAr Creator"
          year="2020-2022"
          icon={<SiSparkar />}
        />
        <ExperienceCard
          title="Freelancer"
          subTitle="Frontend-разработчик"
          year="May 2020 - August 2021"
          icon={<IoLogoJavascript />}
        />
        <ExperienceCard
          title="Freelancer"
          subTitle="React Frontend-разработчик"
          year="November 2022 - Present"
          icon={<FaReact />}
        />
      </div>
    </div>
  );
};

export default Experience;
