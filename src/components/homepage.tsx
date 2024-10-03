"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ProfilePic from "../../public/photos.jpeg";
import { FlipWords } from "./ui/flip-words";
import { Cover } from "./ui/cover";

const Homepage = () => {
  return (
    <section
      id="home"
      className="bg-zinc-800 text-white pt-24 py-12 md:py-48 lg:min-h-screen lg:flex lg:items-center lg:justify-center lg:py-24"
    >
      <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-10 gap-10">
        <div className="flex justify-center mb-6 md:mb-0">
          <Image
            data-aos="fade"
            data-aos-once="true"
            data-aos-delay="1000"
            className="rounded-full object-cover w-76 h-76 md:w-[500px] md:h-auto border-4 border-white shadow-custom-white"
            src={ProfilePic}
            alt="profile"
            width={600}
            height={600}
          />
        </div>

        <div className="flex flex-col gap-4 md:gap-5 text-center md:text-left">
          <p className="text-4xl md:text-3xl">Hello World, I'm</p>

          <Cover className="font-bold text-3xl md:text-4xl">
            Muhammad Fayash Wahyudha
          </Cover>

          <div className="bg-transparent rounded-md p-1.5 flex justify-center md:justify-start">
            <h1 className="text-xl text-white">I'm</h1>
            <FlipWords
              className="text-xl text-white"
              words={[
                "Web Developer",
                "Full-Stack Developer",
                "Front-End Developer",
                "Back-End Developer",
                "Freelancer",
              ]}
              duration={1500}
            />
          </div>

          <p className="text-lg md:text-2xl">Welcome To My Personal Website</p>

          <div className="flex justify-center md:justify-start gap-8">
            <InstagramIcon
              className="cursor-pointer hover:text-slate-500"
              style={{ fontSize: 30 }}
              onClick={() =>
                window.open("https://www.instagram.com/wahyudhafayash_/")
              }
            />
            <LinkedInIcon
              className="cursor-pointer hover:text-slate-500"
              style={{ fontSize: 30 }}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/muhammad-fayash-wahyudha-a92818292/"
                )
              }
            />
            <GitHubIcon
              className="cursor-pointer hover:text-slate-500"
              style={{ fontSize: 30 }}
              onClick={() => window.open("https://github.com/wahyudhafayash")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
