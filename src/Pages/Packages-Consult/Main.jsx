import React from "react";
import { Outlet } from "react-router-dom";

//-----------------images
import packages from "../../assets/images/packages.jpg";
import online from "../../assets/images/online.jpg";

import SecondNavbar from "../../Components/SecondNavbar";
import Header from "../../Components/Header";
import Split from "../../Components/Split";

export default function About() {
  return (
    <>
      <SecondNavbar />
      {/* ---------- Header ------------ */}
      <Header title={"#Online Training"} img={online} />

      {/* =============== Switch =============== */}
      <div className="container-fluid">
        <div className="text-center py-5">
          <h2 className="fw-bold mb-5">
            Online <span className="red">Packages</span> and{" "}
            <span className="red">Consultation</span>
          </h2>
          <p className="lead fs-3 col-10 m-auto my-3">
            Introducing our Online Packages and Consultation services with our
            expert fitness coach! Whether you're unable to visit a gym or prefer
            the convenience of working out from home, our online programs are
            designed to bring the gym experience to you. With personalized
            workout plans tailored to your specific goals and fitness level.
          </p>
        </div>
        <Split
          leftTitle={"Packages"}
          leftImg={packages}
          leftLink={"packages"}
          leftIcon={"desktop"}
          rightTitle={"consult"}
          rightImg={online}
          rightLink={"consultation"}
          rightIcon={"support"}
        />
      </div>

      {/* ================ Content ============ */}
      <div className="bg-dark">
        <Outlet />
      </div>
    </>
  );
}
