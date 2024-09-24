"use client";

import Navbar from "@/components/Navbar";
import Homepage from "@/components/homepage";
import Aboutpage from "@/components/aboutpage";
import Skills from "@/components/pageComp/skills";
import Previews from "@/components/Previews";
import Projectpage from "@/components/projectpage";
import BreakRows from "@/components/section/BreakRows";
// import Contactpage from "@/components/contactpage";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

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
