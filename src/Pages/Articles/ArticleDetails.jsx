import React from "react";
import { Link, useLocation } from "react-router-dom";
import { urlFor } from "../../../lib/client";

import SecondNavbar from "../../Components/SecondNavbar";
import Header from "../../Components/Header";
import headerpic from "../../assets/images/articles2.jpg";

export default function ArticleDetails() {
  const { state } = useLocation();

  return (
    <>
      <SecondNavbar />
      <Header title={"#READ"} img={headerpic} />
      <div className="container-fluid py-1">
        <div className="row my-5">
          <div className="col-md-5">
            <img src={urlFor(state.image[0])} className="w-100 mb-3" />
          </div>
          <div className="col-md-7">
            <h3 className="fw-bold mb-4">{state.title}</h3>
            <p className="lead pe-3">{state.content}</p>
          </div>
        </div>
      </div>
    </>
  );
}
