import React from "react";
import { Link } from "react-router-dom";

export default function Split(props) {
  const { leftTitle, leftImg, leftLink, leftIcon, rightTitle, rightImg, rightLink, rightIcon } =
    props;

  return (
    <div className="row">
      <div
        className="col-md-6 d-flex justify-content-center align-items-center position-relative py-5"
        style={{
          background: `url(${leftImg}) no-repeat center center/cover`,
          borderRight: `5px solid #fff`,
        }}
      >
        <div className="overlay"></div>
        <div
          className="text-dark w-50 py-4 text-center"
          style={{ background: `rgba(255, 255, 255, .5)`, zIndex: `2`, margin: `100px 0px` }}
        >
          <div className="fs-1 mb-4">
            <i class={`bx bx-${leftIcon}`}></i>
          </div>
          <Link to={`${leftLink}`} style={{ textDecoration: "none" }}>
            <button className="btn-1 fw-bold fs-5 mb-3">{leftTitle}</button>
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
          className="text-dark w-50 py-4 text-center"
          style={{ background: `rgba(255, 255, 255, .5)`, zIndex: `2`, margin: `100px 0px`  }}
        >
          <div className="fs-1 mb-4">
            <i class={`bx bx-${rightIcon}`}></i>
          </div>
          <Link to={`${rightLink}`} style={{ textDecoration: "none" }}>
            <button className="btn-2 fw-bold fs-5 mb-3">{rightTitle}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
