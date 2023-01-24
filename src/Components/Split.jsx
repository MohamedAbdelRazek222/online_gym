import React from "react";
import { Link } from "react-router-dom";

export default function Split(props) {
  const { leftTitle, leftImg, leftLink, rightTitle, rightImg, rightLink } =
    props;

  return (
    <div className="row" style={{ height: `90vh` }}>
      <div
        className="col-md-6 d-flex justify-content-center align-items-center position-relative py-5"
        style={{
          background: `url(${leftImg}) no-repeat center center/cover`,
          borderRight: `5px solid #fff`,
        }}
      >
        <div className="overlay"></div>
        <div
          className="text-dark w-75 py-5 text-center"
          style={{ background: `rgba(255, 255, 255, .7)`, zIndex: `2` }}
        >
          <Link to={`${leftLink}`} style={{ textDecoration: "none" }}>
            <button className="btn-1 fw-bold fs-5">{leftTitle}</button>
          </Link>
        </div>
      </div>

      <div
        className="col-md-6 d-flex justify-content-center align-items-center position-relative py-5"
        style={{
          background: `url(${rightImg}) no-repeat center center/cover`,
          borderLeft: `5px solid #fff`,
        }}
      >
        <div className="overlay"></div>
        <div
          className="text-dark w-75 py-5 text-center"
          style={{ background: `rgba(255, 255, 255, .7)`, zIndex: `2` }}
        >
          <Link to={`${rightLink}`} style={{ textDecoration: "none" }}>
            <button className="btn-2 fw-bold fs-5">{rightTitle}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
