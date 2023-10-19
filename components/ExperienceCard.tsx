import React, { ReactNode } from "react";
import { BiLogoReact } from "react-icons/bi";

interface Props {
  title: string;
  subTitle: string;
  icon: ReactNode;
}

const ExperienceCards = ({ title, subTitle, icon }: Props) => {
  return (
    <div className="flex items-center gap-4">
      <span className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-transparent border-[1px] border-white flex items-center justify-center">
        <span className="text-2xl md:text-3xl">{icon}</span>
      </span>
      <div>
        <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
        <p className="text-base lg:tracking-wide text-gray-400">{subTitle}</p>
      </div>
    </div>
  );
};

export default ExperienceCards;
