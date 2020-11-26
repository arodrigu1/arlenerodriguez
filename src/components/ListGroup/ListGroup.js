import React from "react";
import Col from "../Col";
import "./style.css";
import passwordgenerator from "../../images/passwordgenerator.PNG";
import Dayplanner from "../../images/Dayplanner.PNG";
import JSQuiz from "../../images/JSQuiz.PNG";

function ListGroup(props) {
    return (
        <div>
            <Col size="xs-12 sm-12 md-4 lg-4">
                <div className="list-group" id="list-tab" role="tablist">
                    <a className="list-group-item list-group-item-action active" id="list-pw-list" data-toggle="list" href="#list-pw" role="tab" aria-controls="pw">Password Generator</a>
                    <a className="list-group-item list-group-item-action" id="list-dayplanner-list" data-toggle="list" href="#list-dayplanner" role="tab" aria-controls="dayplanner">Day Planner</a>
                    <a className="list-group-item list-group-item-action" id="list-codequiz-list" data-toggle="list" href="#list-codequiz" role="tab" aria-controls="codequiz">Code Quiz</a>
                </div>
            </Col>

            <Col size="xs-12 sm-12 md-8 lg-8">
                <div className="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="list-pw" role="tabpanel" aria-labelledby="list-pw-list">
                        <img id="img" src={passwordgenerator} alt="Password Generator" width="100%" />
                        <p><b>Password Generator</b></p>
                        <p>Deployed at: N/A - internal app</p>
                        <p>GitHub repository: <a href="https://github.com/arodrigu1/PasswordGenerator" target="_blank">https://github.com/arodrigu1/PasswordGenerator</a></p>
                    </div>
                    <div className="tab-pane fade" id="list-dayplanner" role="tabpanel" aria-labelledby="list-dayplanner-list">
                        <img id="img" src={Dayplanner} alt="Dayplanner" width="100%" />
                        <p><b>Day Planner</b></p>
                        <p>Deployed at: <a href="UPDATETHIS" target="_blank">UPDATE THIS</a></p>
                        <p>GitHub repository: <a href="https://github.com/arodrigu1/Day-Planner" target="_blank"></a></p>              
                    </div>
                    <div className="tab-pane fade" id="list-codequiz" role="tabpanel" aria-labelledby="list-codequiz-list">
                        <img id="img" src={JSQuiz} alt="Code-Quiz" width="100%" />
                        <p><b>Code Quiz</b></p>
                        <p>GitHub repository: <a href="https://github.com/arodrigu1/Code-Quiz" target="_blank">https://github.com/arodrigu1/Code-Quiz</a></p>
                    </div>
                </div>
            </Col>

        </div>
    );
}

export default ListGroup;