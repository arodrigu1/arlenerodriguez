import React from "react";
import About from "../../components/About/About";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import Education from "../../components/Education/Education";
import Contact from "../../components/Contact/Contact";
import "./style.css"

function Home() {
  return (
    <>
    <Jumbotron />
    <About />
    <Education />
    <Contact />
    </>
  
  );
}

export default Home;