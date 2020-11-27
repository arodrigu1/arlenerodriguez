import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                Arlene Rodriguez
        </Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/about"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            About
              </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/Portfolio"
                            className={window.location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"}
                        >
                            Portfolio
              </Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link
                            to="#Contact"
                            className={window.location.pathname === "#Contact" ? "nav-link active" : "nav-link"}
                        >
                            Contact
              </Link>
                    </li> */}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;



// import React from 'react';
 
// function Navbar () {
//   return (
// <nav class="navbar navbar-expand-lg navbar-light bg-light">
//       <div class="container">
//         {/* <!-- Brand and toggle get grouped for better mobile display --> */}
//         <a class="navbar-brand" href="index.html" id="logo">Arlene Rodriguez</a>
//         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
//           aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
//         <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
//           <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
//             <li class="nav-item">
//               <a class="nav-link" href="index.html">About</a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" href="Portfolio.html">Portfolio</a>
//             </li>
//             <li class="nav-item active">
//               <a class="nav-link" href="contact.html">Contact</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar;

