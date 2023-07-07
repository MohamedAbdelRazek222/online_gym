import React from "react";

export default function Header(props) {
  const { title, img } = props;

  return (
    <div
      className="bg-primary d-flex align-items-center justify-content-center position-relative"
      style={{
        background: `url(${img}) no-repeat center center/cover`,
        height: `100vh`,
      }}
    >
      <div className="overlay"></div>
      <h1
        className="header-title text-uppercase text-center text-light fw-bold position-relative"
        style={{ zIndex: `2` }}
      >
        {title}
      </h1>
    </div>
  );
}
