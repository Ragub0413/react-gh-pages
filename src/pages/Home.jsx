import React, { useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services/Services";
import DividerServices from "../components/dividerServices";
import Project from "../components/Projects/Project";
import { Layout } from "../components/Layout";
import Testimonials from "../components/Testimonials/Testimonials";
import Contact from "../components/Contact";

const Home = () => {
  useEffect(() => {
    document.title =
      "Mr. Quick Fix | Specializing in Home Repair and Improvements";
  }, []);

  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <DividerServices />
      <Project />
      <Testimonials />
      <Contact />
    </Layout>
  );
};

export default Home;
