import React from 'react'

export default function Header(props) {

    const { title, img } = props;

  return (
    <div
        className="bg-primary d-flex align-items-center justify-content-center position-relative"
        style={{
          background: `url(${img}) no-repeat center center/cover`,
          height: `95vh`,
        }}
      >
        <div className="overlay"></div>
        <h1
          className="text-uppercase text-center text-light fw-bold fs-1 position-relative"
          style={{ zIndex: `2` }}
        >
          {title}
        </h1>
      </div>
  )
}
