import React from "react";
import "./style.css";
import passwordgenerator from "../../images/passwordgenerator.PNG";
import Dayplanner from "../../images/Dayplanner.PNG";
import JSQuiz from "../../images/JSQuiz.PNG";
import weather from "../../images/weather.PNG";
import budget from "../../images/budget.PNG";
import FitnessTracker from "../../images/FitnessTracker.PNG"

function ListGroup() {
    return (

      <span>
        <div class="card projectcard">
        <a href="https://github.com/arodrigu1/Code-Quiz">
                  <img id="img" src={JSQuiz} class="card-img-top" alt="JavaScript Quiz" />
               </a>
                <div class="card-body">
                  <h5 class="card-title">JavaScript Quiz</h5>
                </div>
        </div>

        <div class="card projectcard">
        <a href="https://github.com/arodrigu1/PasswordGenerator">
                  <img id="img" src={passwordgenerator} class="card-img-top" alt="Password Generator" />
               </a>
                <div class="card-body">
                  <h5 class="card-title">Password Generator</h5>
                </div>
        </div>

        <div class="card projectcard">
        <a href ="https://github.com/arodrigu1/day-planner">
                  <img id="img" src={Dayplanner} class="card-img-top" alt="Day Planner" />
               </a>
                <div class="card-body">
                  <h5 class="card-title">Day Planner</h5>
                </div>
        </div>

        <div class="card projectcard">
        <a href ="https://github.com/arodrigu1/Weather-Dashboard">
                  <img id="img" src={weather} class="card-img-top" alt="Weather Dashboard" />
               </a>
                <div class="card-body">
                  <h5 class="card-title">Weather Dashboard</h5>
                </div>
        </div>

        <div class="card projectcard">
        <a href ="https://github.com/arodrigu1/Budget-Tracker">
                  <img id="img" src={budget} class="card-img-top" alt="Budget Tracker" />
               </a>
                <div class="card-body">
                  <h5 class="card-title">Budget Tracker</h5>
                </div>
        </div>

        <div class="card projectcard">
        <a href ="https://github.com/arodrigu1/Fitness-Tracker">
                  <img id="img" src={FitnessTracker} class="card-img-top" alt="Fitness Tracker" />
               </a>
                <div class="card-body">
                  <h5 class="card-title">Fitness Tracker</h5>
                </div>
        </div>



      </span>

      
    );
}

export default ListGroup;