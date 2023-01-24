import React from "react";
import { Link, Outlet } from "react-router-dom";

import inGYM from "../../assets/images/inGYM.jpeg";
import online from "../../assets/images/online.jpeg";
import Header from "../../Components/Header";
import Split from "../../Components/Split";

export default function About() {
  return (
    <>
      {/* ---------- Header ------------ */}
      <Header title={"TRAIN"} img={inGYM} />

      {/* =============== Switch =============== */}
      <div className="container-fluid">
        <Split
          leftTitle={"Packages"}
          leftImg={inGYM}
          leftLink={"packages"}
          rightTitle={"Consult the Coach"}
          rightImg={online}
          rightLink={"consultation"}
        />
      </div>

      {/* ================ Content ============ */}
      <div className="bg-dark">
        <Outlet />
      </div>
    </>
  );
}
