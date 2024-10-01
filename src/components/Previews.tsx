"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

const products = [
  {
    title: "",
    link: "https://ai-kids-story-builder-phi.vercel.app/",
    thumbnail: "/ai3.png",
  },
  {
    title: "",
    link: "https://netflix-clone-nextjs-nine-psi.vercel.app/",
    thumbnail: "/netflix1.png",
  },
  {
    title: "",
    link: "https://vite-iphone-15.vercel.app/",
    thumbnail: "/iphone1.png",
  },
  {
    title: "",
    link: "https://ai-kids-story-builder-phi.vercel.app/",
    thumbnail: "/ai5.png",
  },
  {
    title: "",
    link: "https://vite-iphone-15.vercel.app/",
    thumbnail: "/iphone4.png",
  },
  {
    title: "",
    link: "https://faycalculator.netlify.app/",
    thumbnail: "/calculator.png",
  },
  {
    title: "",
    link: "https://umkm-six.vercel.app/",
    thumbnail: "/umkm.png",
  },
  {
    title: "",
    link: "https://vite-iphone-15.vercel.app/",
    thumbnail: "/iphone2.png",
  },
  {
    title: "",
    link: "https://netflix-clone-nextjs-nine-psi.vercel.app/",
    thumbnail: "/netflix3.png",
  },
  {
    title: "",
    link: "https://ai-kids-story-builder-phi.vercel.app/",
    thumbnail: "/ai2.png",
  },
  {
    title: "",
    link: "https://vite-iphone-15.vercel.app/",
    thumbnail: "/iphone5.png",
  },
  {
    title: "",
    link: "https://netflix-clone-nextjs-nine-psi.vercel.app/",
    thumbnail: "/netflix2.png",
  },
  {
    title: "",
    link: "https://idol-group-company.vercel.app/",
    thumbnail: "/company-profile.png",
  },
  {
    title: "",
    link: "https://vite-iphone-15.vercel.app/",
    thumbnail: "/iphone3.png",
  },
  {
    title: "",
    link: "https://ai-kids-story-builder-phi.vercel.app/",
    thumbnail: "/ai4.png",
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
