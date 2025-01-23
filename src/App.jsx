import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title="Our Program" subtitle="What We Offer" />
        <Programs />
        <About />
        <Title title="Gallery" subtitle="Campus Photos" />
        <Campus />
        <Title title="TESTIMONIALS" subtitle="What Student Says" />
        <Testimonials />
        <Title title="CONTACT US" subtitle="Get in Touch" />
        <Contact />
      </div>
    </div>
  );
};

export default App;
