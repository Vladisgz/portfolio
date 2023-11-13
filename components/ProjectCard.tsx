"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Props {
  img: string;
  gitLink: string;
  demoLink?: string;
}

const ProjectCard = ({ img, gitLink, demoLink }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-72 h-72 md:w-80 md:h-80 group overflow-hidden rounded-lg">
      <Image
        src={img}
        alt="Product"
        width={350}
        height={350}
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
          <button className="px-4 py-2 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-950 tracking-wide text-white rounded-lg hover:from-orange-950 hover:to-orange-800 focus:shadow-outline transition-transform ease-in-out hover:scale-110 duration-500">
            <a href={gitLink} target="_blank" rel="noopener noreferrer">
              GIT
            </a>
          </button>
          {demoLink && (
            <button className="px-4 py-2 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-950 tracking-wide text-white rounded-lg hover:from-orange-950 hover:to-orange-800 focus:shadow-outline transition-transform ease-in-out hover:scale-110 duration-500">
              <a href={demoLink} target="_blank" rel="noopener noreferrer">
                Demo
              </a>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
