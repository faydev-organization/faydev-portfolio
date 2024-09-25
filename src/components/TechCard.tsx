import { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";

interface TechCardProps {
  logo: StaticImageData;
  name: string;
  level?: string;
}

const TechCard: React.FC<TechCardProps> = ({ logo, name, level }) => {
  return (
    <div className="relative flex items-center p-4 bg-transparent cursor-default rounded-lg shadow-custom-white-mini2 border border-white hover:bg-gray-700 transform hover:scale-105 transition-transform duration-300 group">
      <div className="flex-shrink-0 mr-4">
        <Image
          src={logo}
          alt={name}
          className="w-12 h-12 sm:w-12 sm:h-12 lg:w-auto lg:h-12"
        />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <span className="text-white text-center block group-hover:hidden">
          {name}
        </span>
        <div className="hidden flex-col items-center group-hover:flex transition-all duration-300">
          <span className="text-white text-center">{name}</span>
          {/* {level && <span className="text-gray-400 text-sm">{level}</span>} */}
        </div>
      </div>
    </div>
  );
};

export default TechCard;
