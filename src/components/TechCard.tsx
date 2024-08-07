import { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";

interface TechCardProps {
  logo: StaticImageData;
  name: string;
  level: string;
}

const TechCard: React.FC<TechCardProps> = ({ logo, name, level }) => {
  return (
    <div className="relative flex items-center w-72 h-20 p-4 m-2 bg-black cursor-default rounded-lg shadow-md border border-white hover:bg-gray-700 transform hover:scale-110 transition-transform duration-300 group">
      <Image src={logo} alt={name} className="w-auto h-12 mr-4 " />
      <div className="flex-1 flex flex-col items-center justify-center">
        <span className="text-white text-center block group-hover:hidden">
          {name}
        </span>
        <div className="hidden flex-col items-center group-hover:flex transition-all duration-300">
          <span className="text-white text-center">{name}</span>
          {level && <span className="text-gray-400 text-sm">{level}</span>}
        </div>
      </div>
    </div>
  );
};

export default TechCard;
