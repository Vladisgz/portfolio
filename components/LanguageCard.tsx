import React, { ReactNode } from "react";

interface Props {
  title: string;
  subTitle: string;
  icon: ReactNode;
}

const LanguageCard = ({ title, subTitle, icon }: Props) => {
  return (
    <div className="flex items-center gap-4">
      <span className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-transparent border-[1px] border-white flex items-center justify-center">
        <span className="text-2xl md:text-3xl">{icon}</span>
      </span>

      <div>
        <h3 className="text-lg tracking-wide md:text-xl font-bold">{title}</h3>
        <p className="text-sm md:text-base tracking-wide text-gray-400">
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default LanguageCard;
