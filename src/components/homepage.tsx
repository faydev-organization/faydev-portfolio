"use client";
import React from "react";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Homepage = () => {
  return (
    <>
      <section id="home" className="bg-black text-white pt-24 py-12 md:py-24">
        <div className="flex justify-center items-center">
          <div
            data-aos="fade-left"
            data-aos-once="true"
            className="flex flex-col md:flex-row border-2 border-slate-800 rounded-xl shadow-sm shadow-white p-8 md:p-10 mx-4 md:mx-10 gap-8 items-center justify-center"
          >
            <div className="mr-8 md:mr-12">
              <Image
                data-aos="fade"
                data-aos-once="true"
                data-aos-delay="1200"
                className="rounded-full object-cover w-48 h-48 md:w-64 md:h-64"
                src="/profilepic.jpeg"
                alt="profile"
                width={200}
                height={200}
              />
            </div>

            <div
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-delay="800"
              className="flex flex-col gap-4 md:gap-5"
            >
              <p className="text-xl md:text-3xl">Hello World, I'm</p>
              <h2 className="font-bold text-3xl md:text-4xl">
                Muhammad Fayash Wahyudha
              </h2>
              <p className="text-lg md:text-2xl">Full Stack Developer</p>
              <p className="text-lg md:text-2xl">
                Welcome To My Personal Website
              </p>
              <div className="flex justify-center md:justify-start gap-5">
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
                  onClick={() =>
                    window.open("https://github.com/wahyudhafayash")
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
