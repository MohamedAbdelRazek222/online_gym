import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Split(props) {
  const { leftTitle, leftImg, leftLink, leftIcon, rightTitle, rightImg, rightLink, rightIcon } =
    props;

  const [borderStyle, setBorderStyle] = useState(
    window.innerWidth >= 768 ? "borderRight" : "borderTop"
  );

  useEffect(() => {
    const handleResize = () => {
      setBorderStyle(window.innerWidth >= 768 ? "borderRight" : "borderTop");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="row">
      <div
        className={`col-md-6 d-flex justify-content-center align-items-center position-relative py-5`}
        style={{
          background: `url(${leftImg}) no-repeat center center/cover`,
          [borderStyle]: window.innerWidth >= 768 ? "5px solid #fff" : "none",
          boxSizing: "border-box",
        }}
      >
        <div className="overlay"></div>
        <div
          className="text-dark w-50 py-4 text-center"
          style={{ background: `rgba(255, 255, 255, .5)`, zIndex: `2`, margin: `100px 0px` }}
        >
          <div className="fs-1 mb-4">
            <i className={`bx bx-${leftIcon}`}></i>
          </div>
          <Link to={`${leftLink}`} style={{ textDecoration: "none" }}>
            <button className="btn-1 fw-bold fs-3 mb-3 hack-font">{leftTitle}</button>
          </Link>
        </div>
      </div>

      <div
        className={`col-md-6 d-flex justify-content-center align-items-center position-relative py-5`}
        style={{
          background: `url(${rightImg}) no-repeat center center/cover`,
          borderTop: window.innerWidth < 768 ? "5px solid #fff" : "none",
          boxSizing: "border-box",
        }}
      >
        <div className="overlay"></div>
        <div
          className="text-dark w-50 py-4 text-center"
          style={{ background: `rgba(255, 255, 255, .5)`, zIndex: `2`, margin: `100px 0px` }}
        >
          <div className="fs-1 mb-4">
            <i className={`bx bx-${rightIcon}`}></i>
          </div>
          <Link to={`${rightLink}`} style={{ textDecoration: "none" }}>
            <button className="btn-2 fw-bold fs-3 mb-3 hack-font">{rightTitle}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
