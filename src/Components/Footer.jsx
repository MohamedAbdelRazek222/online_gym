import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="text-light">
        <div className="py-4 px-5 bg-red">
          <div className="row">
            <div className="col-md-5 ps-0">
              <img src={logo} alt="logo" width={150} height={150} />
            </div>
            <div className="col-md-7 row">
              <div className="col-8">
                <h4 className="fw-bold hack-font-md">Quick links</h4>
                <ul className="ps-0">
                  <li>
                    <Link to="/products">products</Link>
                  </li>
                  <li className="my-2">
                    <Link to="/articles">Articles</Link>
                  </li>
                  <li>
                    <Link to="/packages&consultaion/packages">Packages</Link>
                  </li>
                </ul>
              </div>
              <div className="col-4">
                <h4 className="fw-bold hack-font-md">Contact us</h4>
                <div className="icons d-flex mt-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=100089778207014"
                    target="_blank"
                  >
                    <i class="bx bxl-facebook-circle fs-1"></i>
                  </a>
                  <a
                    className="mx-3"
                    href="https://www.instagram.com/coacheslam44/?igshid=ZDdkNTZiNTM="
                    target="_blank"
                  >
                    <i class="bx bxl-instagram fs-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-dark py-2 text-center">
          <p className="hack-font fs-4 mb-0">
            Copy Rights Reserved &copy; {currentYear}
          </p>
        </div>
      </div>
    </>
  );
}
