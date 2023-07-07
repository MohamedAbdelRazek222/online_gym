import React from "react";

import eslam from "../assets/images/eslam.jpeg";
import sohila from "../assets/images/sohila.jpg";

function About() {
  return (
    <div className="container-fluid dark text-light px-4 py-4" id="about">
      <div className="row pb-5" style={{ borderBottom: `4px solid #dc3545` }}>
        <div className="col-md-7 d-flex align-items-center">
          <img src={eslam} className="w-100" />
        </div>
        <div className="col-md-5 d-flex flex-column justify-content-center">
          <h3 className="mb-4 hack-font-md">
            Coach <span className="text-danger fw-bold">ESLAM</span>
          </h3>
          <p className="lead">
            Gym Trainer with a unique background in Mathematical Education from
            Menoufia University.
            <br />
            Alongside his academic achievements, Islam has obtained several
            notable certifications in the fitness industry.
            <br />
            As an Online Fitness Trainer, he possesses the knowledge and
            expertise to guide individuals towards their fitness goals through
            virtual platforms.
          </p>
        </div>
      </div>
      <div className="row pt-5">
        <div className="col-md-5 d-flex flex-column justify-content-center">
          <h3 className="hack-font-md">
            Coach <span className="text-danger fw-bold">SOHILA</span>
          </h3>
          <p className="lead py-4">
            Sohila, a highly knowledgeable Nutrition Expert with a strong
            educational background in Home Economics from Menoufia University.
            <br />
            She has further honed her expertise by obtaining valuable
            certifications in the field. As a Clinical Nutritionist, Sohila
            possesses the skills to assess and address specific nutritional
            needs and health conditions. Her specialization as a Sports
            Nutritionist equips her with the understanding of optimal nutrition
            for athletic performance.
          </p>
        </div>
        <div className="col-md-7 d-flex align-items-center">
          <img src={sohila} className="w-100" />
        </div>
      </div>
    </div>
  );
}

export default About;
