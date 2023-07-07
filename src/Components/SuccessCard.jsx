import React from "react";
import logo from "../assets/images/logos.png";

function SuccessCard({ img, age }) {
  return (
    <div className="mx-2 bg-light rounded">
      <div
        className="d-flex justify-content-between align-items-center px-3"
        style={{ borderBottom: `3px solid #aa0000` }}
      >
        <div className="info pb-1">
          <h4 className="fw-bold">
            Age: <span className="text-danger fw-bold">{age}</span>
          </h4>
        </div>
        <div className="logo p-1"><img src={logo} alt="logo" width={70} height={70} className="w-100" /></div>
      </div>
      <div className="card-img">
        <img src={img} className="w-100" />
      </div>
    </div>
  );
}

export default SuccessCard;
