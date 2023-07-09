import React, { useState, useEffect } from "react";
import Typical from "react-typical";

import NavBar from "../../Components/NavBar";
import About from "../../Components/About";
import Split from "../../Components/Split";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import video from "../../assets/images/video.mp4";
import back from "../../assets/images/background.jpg";

// ------- success images ---------
import img1 from "../../assets/images/stories/1.jpg";
import img2 from "../../assets/images/stories/2.jpg";
import img3 from "../../assets/images/stories/3.jpg";
import img4 from "../../assets/images/stories/4.jpeg";
import img5 from "../../assets/images/stories/5.jpeg";
import img6 from "../../assets/images/stories/6.jpg";
import img7 from "../../assets/images/stories/7.jpg";
import img8 from "../../assets/images/stories/8.jpg";
import img9 from "../../assets/images/stories/bicep.png";
import img10 from "../../assets/images/stories/bicep2.png";

import products from "../../assets/images/products2.jpg";
import articles from "../../assets/images/articles.jpg";
import inGYM from "../../assets/images/inGYM2.jpg";
import online from "../../assets/images/online.jpg";

// ------- Icons ---------
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import SuccessCard from "../../Components/SuccessCard";

export default function Home() {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isLoaded, setIsLoaded] = useState(false);
  const steps = [
    "Unleash Your ",
    "",
  ];

  useEffect(() => {
    setIsLoaded(true);
    setTimeout(startTyping, 3000);
  }, []);

  const startTyping = () => {
    if (currentIndex < steps.length) {
      const currentText = steps[currentIndex];
      setCurrentIndex(currentIndex + 1);
      if (currentText === "") {
        setText("");
      } else {
        animateText(currentText);
      }
    } else {
      setCurrentIndex(0);
      setTimeout(startTyping, 3000);
    }
  };

  const animateText = (currentText) => {
    let index = 0;
    let interval = setInterval(() => {
      if (index <= currentText.length) {
        setText(currentText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(startTyping, 3000);
      }
    }, 100);
  };
  return (
    <>
      <NavBar />
      {/* ---------- Header ------------ */}
      <div
        className="bg-primary d-flex align-items-center justify-content-center position-relative"
        style={{ height: `100vh` }}
        id="home"
      >
        <video loop autoPlay muted id="header-video">
          <source src={video} type="video/mp4" />
        </video>
        <div className="overlay"></div>
        {isLoaded && (
          <h1 className="header-title text-uppercase text-center text-light fw-bold position-relative p-4" style={{ zIndex: 2 }}>
            <span style={{ whiteSpace: "pre-wrap" }}>{text}</span>
            <span className="red">Power</span>
          </h1>
        )}
      </div>
      <style>
        {`
        .header-title {
          font-size: 6rem;
          line-height: 1.2;
        }

        @media (max-width: 768px) {
          .header-title {
            font-size: 3rem;
          }
        }
      `}
      </style>
      {/* -----------About ------------ */}
      <About />

      {/* -------------success stories ---------- */}
      <div
        className="success container-fluid py-5"
        id="stories"
        style={{
          backgroundImage: `url(${back})`,
          borderTop: `4px solid #dc3545`,
        }}
      >
        <div className="overlay2"></div>
        <div className="position-relative" style={{ zIndex: `2` }}>
          <h4 className="mb-4 pb-3 text-light hack-font-lg fw-bold ms-3 section-title position-relative">
            Success Stories
          </h4>

          <div className="d-flex justify-content-center align-items-center w-50 m-auto my-2 py-2 px-4">
          <div className="d-flex justify-content-center mx-1">
          <button className="btn-1 prev hack-font rounded d-flex align-items-center">
                <img  style={{ width: "2rem", height: "2rem"}} src={img9} alt="" className="me-2" />   
                <span className="fs-3"> Prev </span>
              </button>
              
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn-2 next hack-font rounded d-flex align-items-center">
                <span className="fs-3">  Next </span>
                <img  style={{ width: "2rem", height: "2rem"}} src={img10} alt="" className="me-2" /> 
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
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <SuccessCard age={24} img={img1} />
            </SwiperSlide>
            <SwiperSlide>
              <SuccessCard age={22} img={img2} />
            </SwiperSlide>
            <SwiperSlide>
              <SuccessCard age={23} img={img3} />
            </SwiperSlide>
            <SwiperSlide>
              <SuccessCard age={24} img={img4} />
            </SwiperSlide>
            <SwiperSlide>
              <SuccessCard age={25} img={img5} />
            </SwiperSlide>
            <SwiperSlide>
              <SuccessCard age={22} img={img6} />
            </SwiperSlide>
            <SwiperSlide>
              <SuccessCard age={27} img={img7} />
            </SwiperSlide>
            <SwiperSlide>
              <SuccessCard age={23} img={img8} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* ------------ Products & Articles ------- */}
      <div className="container-fluid" id="products-articles">
        <div className="row p-5 dark">
          <h3 className="hack-font-lg px-3 py-5 fw-bold text-uppercase text-light mb-0 border-left">
            Take care of your <span className="red">body</span>
          </h3>
        </div>
        <Split
          leftTitle={"Products"}
          leftImg={products}
          leftLink={"/products"}
          leftIcon={"capsule"}
          rightTitle={"Articles"}
          rightImg={articles}
          rightLink={"/articles"}
          rightIcon={"news"}
        />
        <div className="row p-5 dark"></div>
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
            <p className="hack-font-md px-3 py-5 fw-bold text-uppercase border-left red">
              What Our Parteners Say
            </p>
          </div>
          <div className="col-md-8 d-flex align-items-center px-3 py-5 fs-5">
            <button className="d-none d-lg-block btn-1 pre-testi rounded">
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
                <div
                  className="p-4 pb-2 m-auto text-center rounded"
                  style={{
                    width: `95%`,
                    background: `rgba(255, 255, 255, .5)`,
                  }}
                >
                  <q>
                    I achieved remarkable results and surpassed my weight loss
                    goals. Their personalized training programs and motivation
                    pushed me to discover my true potential.
                  </q>
                  <p className="text-end mt-3 fst-italic">- Mohamed Aglan</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="p-4 pb-2 m-auto text-center rounded"
                  style={{
                    width: `95%`,
                    background: `rgba(255, 255, 255, .5)`,
                  }}
                >
                  <q>
                    My fitness coach's expertise and tailored approach helped me
                    break through plateaus, gain muscle, and improve my overall
                    fitness.
                  </q>
                  <p className="text-end mt-3 fst-italic">- Abdelrazik</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="p-4 pb-2 m-auto text-center rounded"
                  style={{
                    width: `95%`,
                    background: `rgba(255, 255, 255, .5)`,
                  }}
                >
                  <q>
                    Training with my fitness coach has been a delight. Their
                    passion and knowledge created a challenging yet achievable
                    program.
                  </q>
                  <p className="text-end mt-3 fst-italic">- Mina</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="p-4 pb-2 m-auto text-center rounded"
                  style={{
                    width: `95%`,
                    background: `rgba(255, 255, 255, .5)`,
                  }}
                >
                  <q>
                    Grateful for my fitness coach's dedication and ability to
                    push me beyond my limits. Their positive energy and
                    encouragement kept me committed.
                  </q>
                  <p className="text-end mt-3 fst-italic">- Mohamed El-Nahas</p>
                </div>
              </SwiperSlide>
            </Swiper>

            <button className="d-none d-lg-block btn-1 next-testi rounded">
              <BsArrowRight className="fs-2" />
            </button>
          </div>
        </div>
      </div>

      {/* ------------ Online & Offline Training ------- */}
      <div className="container-fluid" id="packages">
        <div className="row p-5 dark">
          <h3 className="hack-font-lg px-3 py-5 fw-bold text-uppercase text-light mb-0 border-left">
            Ready to Work With Coach
            <span className="red"> Eslam?</span>
          </h3>
        </div>
        <Split
          leftTitle={"In GYM"}
          leftImg={inGYM}
          leftLink={"/ingym"}
          leftIcon={"dumbbell"}
          rightTitle={"Online"}
          rightImg={online}
          rightLink={"/packages&consultaion/packages"}
          rightIcon={"desktop"}
        />
      </div>
    </>
  );
}
