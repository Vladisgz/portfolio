import React from "react";
import Title from "./Title";
import { MdWorkHistory } from "react-icons/md";
import { SiSparkar } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Опыт работы" icon={<MdWorkHistory />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ExperienceCard
          title="ISF Intevo"
          subTitle="Fullstack-разработчик"
          year="Январь 2024 - Сентябрь 2024"
          icon={<FiGlobe />}
        />
        <ExperienceCard
          title="Freelancer"
          subTitle="SparkAr Creator"
          year="2020-2022"
          icon={<SiSparkar />}
        />
        <ExperienceCard
          title="Freelancer"
          subTitle="Frontend-разработчик"
          year="Май 2020 - Август 2021"
          icon={<IoLogoJavascript />}
        />
        <ExperienceCard
          title="Freelancer"
          subTitle="React Frontend-разработчик"
          year="Ноябрь 2022 - По настоящее время"
          icon={<FaReact />}
        />
      </div>
    </div>
  );
};

export default Experience;
