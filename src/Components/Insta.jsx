import React from "react";

import eslam from "../assets/images/eslam.jpg";
import inGYM from "../assets/images/inGYM2.jpg";
import insta from "../assets/images/insta2.jpg";

function Insta() {
  return (
    <div className="images">
      <h2 className="hack-font-lg fw-bold text-center text-dark">#ONE_MORE</h2>
      <div className="container m-auto gap-3 row py-4 px-0">
        <div className="col-md px-0" style={{ overflow: `hidden` }}>
          <a
            href="https://www.instagram.com/coacheslam44/?igshid=ZDdkNTZiNTM="
            target="_blank"
          >
            <img src={eslam} className="h-100 insta-img" />
          </a>
        </div>

        <div className="col-md px-0">
          <div className="mb-3 bg-primary" style={{ overflow: `hidden` }}>
            <a
              href="https://www.instagram.com/coacheslam44/?igshid=ZDdkNTZiNTM="
              target="_blank"
            >
              <img src={inGYM} className="w-100 insta-img" />
            </a>
          </div>
          <div style={{ overflow: `hidden` }}>
            <a
              href="https://www.instagram.com/coacheslam44/?igshid=ZDdkNTZiNTM="
              target="_blank"
            >
              <img src={insta} className="w-100 insta-img" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insta;
