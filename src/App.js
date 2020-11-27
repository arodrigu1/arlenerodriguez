import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


const App = () => {

  return (
      <Router>
       
        
          <Navbar />
          
          <Route exact path="/" component={Home} />
          <Route exact path="/Portfolio" component={Projects} />
          <Footer />
      </Router>
  );

}

export default App;


