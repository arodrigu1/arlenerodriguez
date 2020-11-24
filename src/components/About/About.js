import React from 'react';
import "./style.css"

function About () {
  return (

<div class="container">
  <div class="row">
    <div class="col-sm">
      <h4>Human Interaction</h4>
      <p class="header">Teamwork makes the dream work.</p>
      <p><i class="fas fa-users fa-5x"></i></p>
    </div>
    <div class="col-sm">
      <h4>Staying Active</h4>
      <p class ="header">Yoga, hiking, or biking? I'm there!</p>
      <p><i class="fas fa-hiking fa-5x"></i></p>
      
    </div>
    <div class="col-sm">
      <h4>New Adventures</h4>
      <p class="header">Visiting new places brings new knowledge.</p>
      <p><i class="fas fa-luggage-cart fa-5x"></i></p>
    </div>
  </div>
</div>
  )
}

export default About;