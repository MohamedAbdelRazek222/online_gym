import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import video from "../../assets/images/videoplayback.mp4";

import arm from "../../assets/images/left.png";
import back from "../../assets/images/background.jpg";

// ------- success images ---------
import img1 from "../../assets/images/1.jpeg";
import img2 from "../../assets/images/2.jpeg";
import img3 from "../../assets/images/3.jpeg";

import products from "../../assets/images/products.jpeg";
import articles from "../../assets/images/articles.jpeg";
import inGYM from "../../assets/images/inGYM.jpeg";
import online from "../../assets/images/online.jpeg";

import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import Split from "../../Components/Split";

export default function Home() {
  return (
    <>
      {/* ---------- Header ------------ */}
      <div
        className="bg-primary d-flex align-items-center justify-content-center position-relative"
        style={{ height: `95vh` }}
      >
        <video loop autoPlay muted id="header-video">
          <source src={video} type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <h1
          className="text-uppercase text-center text-light fw-bold fs-1 position-relative"
          style={{ zIndex: `2` }}
        >
          Do MOre
        </h1>
      </div>

      {/* -----------About ------------ */}
      <div className="container-fluid bg-dark text-light px-4 py-4">
        <div className="row pb-5" style={{ borderBottom: `4px solid #dc3545` }}>
          <div className="col-md-7">
            <img src={online} className="w-100" />
          </div>
          <div className="col-md-5 d-flex flex-column justify-content-center">
            <h3 className="mb-4">
              Coach <span className="text-danger fw-bold">ESLAM</span>
            </h3>
            <p className="lead">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              hic autem enim incidunt at asperiores sit id animi, officiis,
              nisi, aspernatur culpa dolores repellat. Necessitatibus nostrum
              officiis voluptas sint, sunt fugit optio voluptatem veniam iusto.
              Amet illo hic excepturi magni?
            </p>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-md-5 d-flex flex-column justify-content-center">
            <h3>
              Coach <span className="text-danger fw-bold">SAMA</span>
            </h3>
            <p className="lead py-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              hic autem enim incidunt at asperiores sit id animi, officiis,
              nisi, aspernatur culpa dolores repellat. Necessitatibus nostrum
              officiis voluptas sint, sunt fugit optio voluptatem veniam iusto.
              Amet illo hic excepturi magni?
            </p>
          </div>
          <div className="col-md-7">
            <img src={inGYM} className="w-100" />
          </div>
        </div>
      </div>

      {/* -------------success stories ---------- */}
      <div
        className="success container-fluid py-5"
        style={{
          backgroundImage: `url(${back})`,
          borderTop: `4px solid #dc3545`,
        }}
      >
        <div className="overlay2"></div>
        <div className="position-relative" style={{ zIndex: `2` }}>
          <h4 className="mb-4 pb-3 text-light fs-2 fw-bold ms-3 section-title position-relative">
            Success Stories
          </h4>

          <div className="d-flex justify-content-around align-items-center w-50 m-auto my-2 py-2 px-4">
            <div>
              <button className="btn-1 prev d-flex justify-content-center align-items-center">
                {/* <img src={arm} className="w-25" /> */}
                <span className="fs-3">Prev</span>
              </button>
            </div>
            <div>
              <button className="btn-2 next d-flex justify-content-center align-items-center">
                <span className="fs-3">Next</span>
                {/* <img
                  src={arm}
                  className="w-25"
                  style={{ transform: `scaleX(-1)` }}
                /> */}
              </button>
            </div>
          </div>

          <Swiper
            navigation={{
              nextEl: ".next",
              prevEl: ".prev",
            }}
            modules={[Navigation]}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="row gap-3 py-5 px-5">
                <div className="col bg-light rounded py-3">
                  <div
                    className="d-flex justify-content-between"
                    style={{ borderBottom: `3px solid #aa0000` }}
                  >
                    <div className="info pb-1">
                      <h5 className="fw-bold">
                        WEEKS: <span className="text-danger fw-bold">13</span>
                      </h5>
                      <h6 className="fw-bold">
                        Age: <span className="text-danger fw-bold">20</span>
                      </h6>
                    </div>
                    <div className="logo">Logo</div>
                  </div>
                  <img src={img1} className="w-100" />
                </div>
                <div className="col bg-light rounded py-3">
                  <div
                    className="d-flex justify-content-between"
                    style={{ borderBottom: `3px solid #aa0000` }}
                  >
                    <div className="info">
                      <div className="info pb-1">
                        <h5 className="fw-bold">
                          WEEKS: <span className="text-danger fw-bold">13</span>
                        </h5>
                        <h6 className="fw-bold">
                          Age: <span className="text-danger fw-bold">20</span>
                        </h6>
                      </div>
                    </div>
                    <div className="logo">Logo</div>
                  </div>
                  <img src={img2} className="w-100" />
                </div>
                <div className="col bg-light rounded py-3">
                  <div
                    className="d-flex justify-content-between"
                    style={{ borderBottom: `3px solid #aa0000` }}
                  >
                    <div className="info pb-1">
                      <h5 className="fw-bold">
                        WEEKS: <span className="text-danger fw-bold">13</span>
                      </h5>
                      <h6 className="fw-bold">
                        Age: <span className="text-danger fw-bold">20</span>
                      </h6>
                    </div>
                    <div className="logo">Logo</div>
                  </div>
                  <img src={img3} className="w-100" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="row gap-3 py-5 px-5">
                <div className="col bg-light rounded py-3">
                  <div
                    className="d-flex justify-content-between"
                    style={{ borderBottom: `3px solid #aa0000` }}
                  >
                    <div className="info pb-1">
                      <h5 className="fw-bold">
                        WEEKS: <span className="text-danger fw-bold">13</span>
                      </h5>
                      <h6 className="fw-bold">
                        Age: <span className="text-danger fw-bold">20</span>
                      </h6>
                    </div>
                    <div className="logo">Logo</div>
                  </div>
                  <img src={img1} className="w-100" />
                </div>
                <div className="col bg-light rounded py-3">
                  <div
                    className="d-flex justify-content-between"
                    style={{ borderBottom: `3px solid #aa0000` }}
                  >
                    <div className="info">
                      <div className="info pb-1">
                        <h5 className="fw-bold">
                          WEEKS: <span className="text-danger fw-bold">13</span>
                        </h5>
                        <h6 className="fw-bold">
                          Age: <span className="text-danger fw-bold">20</span>
                        </h6>
                      </div>
                    </div>
                    <div className="logo">Logo</div>
                  </div>
                  <img src={img2} className="w-100" />
                </div>
                <div className="col bg-light rounded py-3">
                  <div
                    className="d-flex justify-content-between"
                    style={{ borderBottom: `3px solid #aa0000` }}
                  >
                    <div className="info pb-1">
                      <h5 className="fw-bold">
                        WEEKS: <span className="text-danger fw-bold">13</span>
                      </h5>
                      <h6 className="fw-bold">
                        Age: <span className="text-danger fw-bold">20</span>
                      </h6>
                    </div>
                    <div className="logo">Logo</div>
                  </div>
                  <img src={img3} className="w-100" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="row gap-3 py-5 px-5">
                <div className="col bg-light rounded py-3">
                  <div
                    className="d-flex justify-content-between"
                    style={{ borderBottom: `3px solid #aa0000` }}
                  >
                    <div className="info pb-1">
                      <h5 className="fw-bold">
                        WEEKS: <span className="text-danger fw-bold">13</span>
                      </h5>
                      <h6 className="fw-bold">
                        Age: <span className="text-danger fw-bold">20</span>
                      </h6>
                    </div>
                    <div className="logo">Logo</div>
                  </div>
                  <img src={img1} className="w-100" />
                </div>
                <div className="col bg-light rounded py-3">
                  <div
                    className="d-flex justify-content-between"
                    style={{ borderBottom: `3px solid #aa0000` }}
                  >
                    <div className="info">
                      <div className="info pb-1">
                        <h5 className="fw-bold">
                          WEEKS: <span className="text-danger fw-bold">13</span>
                        </h5>
                        <h6 className="fw-bold">
                          Age: <span className="text-danger fw-bold">20</span>
                        </h6>
                      </div>
                    </div>
                    <div className="logo">Logo</div>
                  </div>
                  <img src={img2} className="w-100" />
                </div>
                <div className="col bg-light rounded py-3">
                  <div
                    className="d-flex justify-content-between"
                    style={{ borderBottom: `3px solid #aa0000` }}
                  >
                    <div className="info pb-1">
                      <h5 className="fw-bold">
                        WEEKS: <span className="text-danger fw-bold">13</span>
                      </h5>
                      <h6 className="fw-bold">
                        Age: <span className="text-danger fw-bold">20</span>
                      </h6>
                    </div>
                    <div className="logo">Logo</div>
                  </div>
                  <img src={img3} className="w-100" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* ------------ Products & Articles ------- */}
      <div className="container-fluid">
        <div className="row p-5 bg-dark">
          <h3
            className="px-3 py-5 fw-bold text-uppercase text-light fs-1 mb-0"
            style={{ borderLeft: `5px solid #aa0000` }}
          >
            Take care of your <span style={{ color: `#aa0000` }}>body</span>
          </h3>
        </div>
        <Split
          leftTitle={"Products"}
          leftImg={products}
          leftLink={"/products"}
          rightTitle={"Articles"}
          rightImg={articles}
          rightLink={"/articles"}
        />
      </div>

      {/* ---------------- Testimonials ---------- */}
      <div
        className="container-fluid d-flex justify-content-center py-5"
        style={{ position: `relative` }}
      >
        <video loop autoPlay muted id="header-video">
          <source src={video} type="video/mp4" />
        </video>
        <div className="overlay"></div>

        <div className="row p-5 w-100" style={{ zIndex: `2` }}>
          <div className="col-md-4 d-flex align-items-center">
            <h3
              className="px-3 py-5 fw-bold text-uppercase fs-1"
              style={{ borderLeft: `5px solid #aa0000`, color: `#aa0000` }}
            >
              What Our Parteners Say
            </h3>
          </div>
          <div
            className="col-md-8 d-flex align-items-center px-3 py-5"
            style={{ background: `rgba(255, 255, 255, .7)` }}
          >
            <button className="btn bg-danger text-light pre-testi ">
              <BsArrowLeft className="fs-2" style={{ zIndex: `10` }} />
            </button>

            <Swiper
              navigation={{
                nextEl: ".next-testi",
                prevEl: ".pre-testi",
              }}
              modules={[Navigation]}
              loop={true}
              className="mySwiper"
            >
              <SwiperSlide>
                <p
                  className="p-5 bg-light m-auto text-center rounded"
                  style={{ width: `95%` }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate nobis quisquam repellendus fugit odit vitae mollitia
                  sunt quis iure aliquid corporis dicta reiciendis laborum
                  nihil, at tempore veniam adipisci omnis.
                </p>
              </SwiperSlide>

              <SwiperSlide>
                <p
                  className="p-5 bg-light m-auto text-center rounded"
                  style={{ width: `95%` }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate nobis quisquam repellendus fugit odit vitae mollitia
                </p>
              </SwiperSlide>

              <SwiperSlide>
                <p
                  className="p-5 bg-light m-auto text-center rounded"
                  style={{ width: `95%` }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate nobis quisquam repellendus fugit odit vitae mollitia
                  sunt quis iure aliquid corporis dicta reiciendis laborum
                  nihil.
                </p>
              </SwiperSlide>
            </Swiper>

            <button className="btn bg-danger text-light next-testi">
              <BsArrowRight className="fs-2" />
            </button>
          </div>
        </div>
      </div>

      {/* ------------ Online & Offline Training ------- */}
      <div className="container-fluid">
        <div className="row p-5 bg-dark">
          <h3
            className="px-3 py-5 fw-bold text-uppercase text-light fs-1 mb-0"
            style={{ borderLeft: `5px solid #aa0000` }}
          >
            Ready to Work With Coach{" "}
            <span style={{ color: `#aa0000` }}>Eslam?</span>
          </h3>
        </div>
        <Split
          leftTitle={"In GYM"}
          leftImg={inGYM}
          leftLink={"/ingym"}
          rightTitle={"Online Training"}
          rightImg={online}
          rightLink={"/packages&consultaion"}
        />
      </div>
    </>
  );
}
