"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { div } from "framer-motion/client";

const products = [
  {
    title: "Moonbeam",
    link: "",
    thumbnail: "/todo.png",
  },
  {
    title: "Cursor",
    link: "",
    thumbnail: "/umkm.png",
  },
  {
    title: "Rogue",
    link: "",
    thumbnail: "/company-profile.png",
  },
  {
    title: "Editorially",
    link: "",
    thumbnail: "/kopi.png",
  },
  {
    title: "Editrix AI",
    link: "",
    thumbnail: "/todo.png",
  },
  {
    title: "Pixel Perfect",
    link: "",
    thumbnail: "/kopi.png",
  },
  {
    title: "Algochurn",
    link: "",
    thumbnail: "/umkm.png",
  },
  {
    title: "Aceternity UI",
    link: "",
    thumbnail: "/todo.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "",
    thumbnail: "/kopi.png",
  },
  // {
  //   title: "SmartBridge",
  //   link: "",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  // },
  // {
  //   title: "Renderwork Studio",
  //   link: "",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  // },
  // {
  //   title: "Creme Digital",
  //   link: "",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  // },
  // {
  //   title: "Golden Bells Academy",
  //   link: "",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  // },
  // {
  //   title: "Invoker Labs",
  //   link: "",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  // },
  // {
  //   title: "E Free Invoice",
  //   link: "",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  // },
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
