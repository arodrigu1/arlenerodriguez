import React from 'react';
import './style.css'
import Picture from "../../images/IMG_1653.JPG"

function Jumbotron () {
  return (
  <div class="jumbotron jumbotroncolor">
    
    <h1 class="display-4 name">Arlene Rodriguez</h1>
    <p class="lead"></p>
    <hr class="my-4" />
    <img id="profilepic" src={Picture} class="card-img-top" alt="Picture" />
    <p class="lead"></p>
    
  </div>
  )
}

export default Jumbotron;
