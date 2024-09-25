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

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    // Show alert for mobile users
    if (window.innerWidth < 768) {
      alert("Please use a desktop for the best experience.");
    }

    router.replace("/");
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
