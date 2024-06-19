"use client";

import Navbar from "@/components/Navbar";
import Homepage from "@/components/homepage";
import Aboutpage from "@/components/aboutpage";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Projectpage from "@/components/projectpage";
import Contactpage from "@/components/contactpage";

const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 50,
      delay: 200,
      duration: 1000,
      easing: "ease",
      once: true,
    });
  }, []);
  return (
    <main>
      <Navbar />
      <Homepage />
      <Aboutpage />
      <Projectpage />
      <Contactpage />
    </main>
  );
};

export default Home;
