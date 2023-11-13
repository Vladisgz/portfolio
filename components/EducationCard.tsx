import React, { ReactNode } from "react";

interface Props {
  title: string;
  subTitle: string;
  yearEd: string;
  icon: ReactNode;
}

const EducationCard = ({ title, subTitle, icon, yearEd }: Props) => {
  return (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 md:h-12 md:w-12 md:flex-wrap rounded-full bg-transparent border-[1px] flex items-center justify-center">
        <span className="text-2xl md:text-3xl">{icon}</span>
      </div>
      <div className="">
        <h3 className="text-lg md:text-xl tracking-wide font-bold ">{title}</h3>
        <p className="text-sm md:text-base tracking-wide text-gray-400">
          {subTitle}
        </p>
        <p className="text-sm md:text-base tracking-wide text-gray-400">
          {yearEd}
        </p>
      </div>
    </div>
  );
};

export default EducationCard;
