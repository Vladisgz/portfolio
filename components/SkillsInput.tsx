import React from "react";

interface Props {
  title: string;
  link: string;
}

const SkillsInput = ({ title, link }: Props) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <p className="border border-orange-400 px-6 py-2 text-lg tracking-wide bg-transparent text-gray-500 hover:text-white hover:border-orange-700 hover:bg-black rounded-lg duration-300">
        {title}
      </p>
    </a>
  );
};

export default SkillsInput;
