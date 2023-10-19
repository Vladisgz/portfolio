import React from "react";
import Title from "./Title";
import { IoSchoolSharp } from "react-icons/io5";
import { FaUniversity } from "react-icons/fa";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <div className="wrapper">
      <Title text="Образование" icon={<IoSchoolSharp />} />
      <EducationCard
        title="СамГТУ"
        subTitle="ФАИТ (Магистр)"
        yearEd="2010 - 2016"
        icon={<FaUniversity />}
      />
    </div>
  );
};

export default Education;
