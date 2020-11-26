// import React from 'react';
// import Navbar from './components/Navbar/Navbar';
// import Jumbotron from './components/Jumbotron/Jumbotron';
// import About from './components/About/About'
// import './App.css';

// function App() {
//   return (
//   <>
//     <Navbar />
//     <Jumbotron />
//     <About />
//   </>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
// import Contact from "./pages/Contact/Contact";

const App = () => {

  return (
    <div>
      <Router>
       
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        {/* <Route exact path="/getintouch" component={Contact} /> */}
        </Switch>
       
      </Router>
    </div>
  );

}

export default App;
