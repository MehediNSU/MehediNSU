import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Project from "./components/project/Project";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";

const app = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Project />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default app;
