"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/section/Hero";
import Aboutpage from "@/components/section/About";
import Skills from "@/components/section/Skills";
import Previews from "@/components/section/Previews";
import Projectpage from "@/components/section/Project";
import BreakRows from "@/components/BreakRows";
// import Contactpage from "@/components/contactpage";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <BreakRows />
      <Aboutpage />
      <Previews />
      <Skills />
      <Projectpage />
      {/* <Contactpage /> */}
    </main>
  );
};

export default Home;
