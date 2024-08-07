"use client";

import Navbar from "@/components/Navbar";
import Homepage from "@/components/homepage";
import Aboutpage from "@/components/aboutpage";
import Skills from "@/components/pageComp/skills";
import Projectpage from "@/components/projectpage";
// import Contactpage from "@/components/contactpage";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      offset: 50,
      delay: 200,
      duration: 1000,
      easing: "ease",
      once: true,
    });

    {
      router.replace("/");
    }
  }, [router]);

  return (
    <main>
      <Navbar />
      <Homepage />
      <Aboutpage />
      <Skills />
      <Projectpage />
      {/* <Contactpage /> */}
    </main>
  );
};

export default Home;
