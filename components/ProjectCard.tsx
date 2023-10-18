"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Props {
  img: string;
  gitLink: string;
}

const ProjectCard = ({ img, gitLink }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-80 h-80 group overflow-hidden rounded-lg">
      <Image
        src={img}
        alt="Product"
        width={350}
        height={350}
        objectFit="cover"
        className="group-hover:blur-sm"
      />
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center  ${
          isHovered ? "bottom-0 opacity-100 " : "opacity-0"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col gap-4">
          <button className="bg-black text-white px-6 py-2 hover:bg-gray-700 rounded-lg bg-gradient-to-l from-gray-800 via-gray-900 to-gray-950 hover:from-orange-950 hover:to-orange-800 duration-500 focus:shadow-outline transform transition-transform ease-in-out hover:scale-110">
            <a href={gitLink} target="_blank" rel="noopener noreferrer">
              GIT
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
