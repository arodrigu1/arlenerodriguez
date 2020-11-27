import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper";
// import Contact from "./pages/Contact/Contact";

const App = () => {

  return (
      <Router>
       
        
          <Navbar />
          
          <Route exact path="/" component={Home} />
          <Route exact path="/Portfolio" component={Portfolio} />
        {/* <Route exact path="/getintouch" component={Contact} /> */}
         
          <Footer />
      \
      </Router>
  );

}

export default App;


