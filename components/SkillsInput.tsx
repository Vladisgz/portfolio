import React from "react";

interface Props {
  title: string;
  link: string;
}

const SkillsInput = ({ title, link }: Props) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <p className="border border-orange-400 px-4 py-2 md:px-6 md:py-2 text-base md:text-lg tracking-wide bg-transparent text-gray-500 hover:text-white hover:border-orange-700 rounded-lg duration-300">
        {title}
      </p>
    </a>
  );
};

export default SkillsInput;
