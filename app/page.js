import About from "@/components/About";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import TempModules from "@/components/TempModules";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Features />
      <TempModules />
      <Footer />
    </>
  );
};

export default page;
