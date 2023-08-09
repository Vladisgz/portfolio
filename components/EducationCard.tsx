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
      <span className="h-12 w-12 mb:flex-wrap rounded-full bg-black border-[1px] border-white flex items-center justify-center">
        <span className="text-3xl">{icon}</span>
      </span>
      <div>
        <h3 className="text-xl font-bold lg:text-2xl">{title}</h3>
        <p className="text-base lg:tracking-wide text-gray-400">{subTitle}</p>
        <p className="text-base lg:tracking-wide text-gray-400">{yearEd}</p>
      </div>
    </div>
  );
};

export default EducationCard;
