import React from 'react';
import Instagram from "../../images/instagram.png"
import Github from "../../images/github.png"
import LinkedIn from "../../images/linkedin.png"


function Contact() {
  return (
    <>
      <h4 className="educationheader">Let's Talk! </h4>
    
<div class="container">
  <div class="row">
    <div class="col-sm">
      <h4>Email Me!</h4>
      <p class="about"><a href="mailto:arlene.rodriguez1@gmail.com">Send mail</a></p>
      <p class="about"><i class="far fa-envelope fa-4x"></i></p>
    </div>

    <div class="col-sm">
      <h4>Let's Get Social!</h4>
      <p class ="about">Check out my LinkedIn, Github or Instagram. </p>
      <p class ="about">

      <a href="https://www.linkedin.com/in/arlene-rodriguez-17a22254" target="_blank">
        <img id="social" src={LinkedIn} />
      </a>
      {/* <!-- Instagram --> */}
      <a href="https://www.instagram.com/arlene.nmn.rodriguez/" target="_blank">
        <img id="social" src={Instagram} />
      </a>
      {/* <!--Github--> */}
      <a href="https://github.com/arodrigu1" target="_blank" >
        <img id="social" src={Github} />
      </a>
        
      </p>
    </div>
  </div>
</div>

    </>
  )
}

export default Contact;