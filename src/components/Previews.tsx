"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { div } from "framer-motion/client";

const products = [
  {
    title: "Moonbeam",
    link: "",
    thumbnail: "/company-profile.png",
  },
  {
    title: "Starry Night",
    link: "",
    thumbnail: "/umkm.png",
  },
  {
    title: "Sunrise",
    link: "",
    thumbnail: "/todo.png",
  },
  {
    title: "Ocean Wave",
    link: "",
    thumbnail: "/kopi.png",
  },
  {
    title: "Forest Whisper",
    link: "",
    thumbnail: "/company-profile.png",
  },
  {
    title: "Desert Mirage",
    link: "",
    thumbnail: "/umkm.png",
  },
  {
    title: "Mountain Echo",
    link: "",
    thumbnail: "/todo.png",
  },
  {
    title: "City Lights",
    link: "",
    thumbnail: "/kopi.png",
  },
  {
    title: "Night Sky",
    link: "",
    thumbnail: "/todo.png",
  },
  {
    title: "River Flow",
    link: "",
    thumbnail: "/company-profile.png",
  },
  {
    title: "Valley View",
    link: "",
    thumbnail: "/kopi.png",
  },
  {
    title: "Meadow Breeze",
    link: "",
    thumbnail: "/umkm.png",
  },
  {
    title: "Twilight Dream",
    link: "",
    thumbnail: "/todo.png",
  },
  {
    title: "Canyon Echoes",
    link: "",
    thumbnail: "/company-profile.png",
  },
  {
    title: "Garden Path",
    link: "",
    thumbnail: "/kopi.png",
  },
];

const Preview = () => {
  return (
    <div className="bg-zinc-800 text-white">
      <HeroParallax products={products} />
      {/* jangan lupa vh diaikin kalo mau nambah */}
    </div>
  );
};

export default Preview;
