import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  link: string;
  img: string;
}

const ProjectCard = ({ title, link, img }: Props) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="w-80 h-80  overflow-hidden relative rounded-lg group">
        <Image
          className="object-cover translate-y-0 group-hover:-translate-y-[20%] transition-transform duration-[3s]"
          width={350}
          height={350}
          src={img}
          alt=""
        />
        <p className="absolute hidden group-hover:inline-block bottom-0 w-full py-1 bg-orange-700 text-white text-center font-semibold duration-500">
          {title}
        </p>
      </div>
    </a>
  );
};

export default ProjectCard;
