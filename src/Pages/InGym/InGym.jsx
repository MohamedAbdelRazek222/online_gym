import React from "react";
import SecondNavbar from "../../Components/SecondNavbar";
import Header from "../../Components/Header";

import headerPic from "../../assets/images/inGYM.jpeg";
import inGYM from "../../assets/images/gymPic-1.jpeg";
import inGYM2 from "../../assets/images/gymPic-2.jpeg";

import reason1 from "../../assets/images/inGYM2.jpg";
import reason2 from "../../assets/images/insta2.jpg";

import eslam from "../../assets/images/eslam.jpg";

export default function InGym() {
  return (
    <>
      <SecondNavbar />
      {/* ================= Header ============== */}
      <Header title={"#Training with the Coach"} img={headerPic} />

      {/* =============== Methods ============ */}
      <div className="container-fluid dark text-light px-4 py-4">
        <div className="row pb-5" style={{ borderBottom: `4px solid #dc3545` }}>
          <div className="col-md-7 d-flex align-items-center">
            <img src={eslam} className="w-100" />
          </div>
          <div className="col-md-5 d-flex flex-column justify-content-center">
            <h3 className="mb-4 hack-font-md">
              Coach <span className="text-danger fw-bold">ESLAM</span>
            </h3>
            <p className="lead">
              Gym Trainer with a unique background in Mathematical Education
              from Menoufia University.
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
        <div className="row pt-4">
          <div className="col-12">
            <div class="reason">
              <span class="text">I don’t have time.</span>
            </div>
            <div class="reason">
              <span class="text">I'm not fit enough.</span>
            </div>
            <div class="reason">
              <span class="text">I'm tried everything.</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================ Reasons ================ */}
      <div className="container-fluid">
        <div className="row gap-3 py-5 px-5">
          <div className="col-md gray rounded px-0">
            <div className="card-img">
              <img src={reason2} className="w-100" />
            </div>
            <div className="px-2">
              <h3 className="fw-bold my-2 hack-font-md">Reason 1</h3>
              <p className="lead fs-5">
                Expertise: Our coach brings a wealth of knowledge and experience
                to help you reach your fitness goals. They are well-versed in
                designing effective programs and have a track record of
                delivering results.
              </p>
            </div>
          </div>

          <div className="col-md gray rounded px-0">
            <div className="card-img">
              <img src={reason1} className="w-100" />
            </div>
            <div className="px-2">
              <h3 className="fw-bold my-2 hack-font-md">Reason 2</h3>
              <p className="lead fs-5">
                Personalized Approach: With a focus on individual needs, our
                coach creates customized training programs tailored to your
                specific goals and fitness level. Whether you choose online or
                gym training.
              </p>
            </div>
          </div>

          <div className="col-md gray rounded px-0">
            <div className="card-img">
              <img src={inGYM} className="w-100" />
            </div>
            <div className="px-2">
              <h3 className="fw-bold my-2 hack-font-md">Reason 3</h3>
              <p className="lead fs-5">
                Support and Motivation: Our coach is dedicated to your success
                and provides ongoing support and motivation. Whether you train
                online or in the gym, they will keep you accountable, offer
                guidance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =============== in GYM ================= */}
      <div className="container-fluid dark text-light px-4 py-4" id="about">
        <div className="row pb-5" style={{ borderBottom: `4px solid #dc3545` }}>
          <div className="col-md-7 d-flex align-items-center">
            <img src={inGYM} className="w-100" />
          </div>
          <div className="col-md-5 d-flex flex-column justify-content-center">
            <h3 className="mb-4 hack-font-md">
              Muscle <span className="text-danger fw-bold">building</span>
            </h3>
            <p className="lead">
              If you have wasted years trying in vain to gain size – stop!
              <br />
              Our proven formula for maximum muscle growth is the fast-track you
              need for the physique you desire.
            </p>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-md-5 d-flex flex-column justify-content-center">
            <h3 className="hack-font-md">
              Improve <span className="text-danger fw-bold">health</span>
            </h3>
            <p className="lead py-4">
              Good health is our most valuable asset. Whether you want to
              overcome obesity, diabetes, hypertension or high cholesterol, we
              deliver quantifiable results to improve your health that will pay
              dividends for life.
            </p>
          </div>
          <div className="col-md-7 d-flex align-items-center">
            <img src={inGYM2} className="w-100" />
          </div>
        </div>
      </div>

      <a
        className="btn btn-success mt-4 p-2"
        style={{
          bottom: `40px`,
          right: `30px`,
          zIndex: `10`,
          position: `fixed`,
          borderRadius: `50%`,
        }}
        href="https://wa.me/+201090002058"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fs-1 bx bxl-whatsapp bx-flip-horizontal bx-tada"></i>
      </a>
    </>
  );
}
