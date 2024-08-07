// components/Navbar.js
"use client";

import { useState } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-800 bg-opacity-30 backdrop-blur-lg p-4 fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <a href="/" className="text-white text-2xl font-bold">
            Fay
            <span className="border-2 mx-1 px-2 py-1 rounded-lg text-slate-800 bg-white border-slate-800">
              DEV
            </span>
          </a>
        </div>
        <div className="block lg:hidden">
          <IconButton
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:bg-gray-700"
          >
            <MenuIcon />
          </IconButton>
        </div>
        <div className="hidden lg:flex lg:items-center lg:w-auto">
          <div className="text-lg lg:flex-grow flex justify-center w-full">
            <a
              href="#home"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mx-4"
            >
              Home
            </a>
            <a
              href="#about"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mx-4"
            >
              About
            </a>
            <a
              href="#skills"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mx-4"
            >
              Skills
            </a>
            <a
              href="#project"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mx-4"
            >
              Project
            </a>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-4 text-center">
          <a href="#home" className="block mt-2 text-white hover:text-gray-300">
            Home
          </a>
          <a
            href="#about"
            className="block mt-2 text-white hover:text-gray-300"
          >
            About
          </a>
          <a
            href="#skills"
            className="block mt-2 text-white hover:text-gray-300"
          >
            Skills
          </a>
          <a
            href="#project"
            className="block mt-2 text-white hover:text-gray-300"
          >
            Project
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
