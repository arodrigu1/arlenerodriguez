import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import About from "../../components/About/About";
import Jumbotron from "../../components/Jumbotron/Jumbotron";

function Home() {
  return (
    <div>
    <Navbar />
    <Jumbotron />
    <About />
    </div>
  );
}

export default Home;