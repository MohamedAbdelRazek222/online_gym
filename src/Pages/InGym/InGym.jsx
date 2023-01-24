import React from "react";
import Header from "../../Components/Header";
import inGYM from "../../assets/images/inGYM.jpeg";
import online from "../../assets/images/online.jpeg";

export default function InGym() {
  return (
    <>
      {/* ================= Header ============== */}
      <Header title={"Trainin with the Coach"} img={inGYM} />

      {/* =============== Methods ============ */}
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
          <div className="col-12">
            <div class="reason">
              <span class="text headline-3">I don’t have time.</span>
            </div>
            <div class="reason">
              <span class="text headline-3">I'm not fit enough.</span>
            </div>
            <div class="reason">
              <span class="text headline-3">I'm tried everything.</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================ Reasons ================ */}
      <div className="container-fluid">
        <div className="row gap-3 py-5 px-5">
          <div className="col bg-light rounded py-3">
            <img src={inGYM} className="w-100" />
            <div
              style={{ borderTop: `3px solid #aa0000` }}
            >
                <h3 className="fw-bold">Reason 1</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi soluta dolorem aut, est minima voluptate sunt enim
                  distinctio eum eius architecto explicabo quod dicta, porro
                  repellendus dolore amet totam a?
                </p>
            </div>
          </div>

          <div className="col bg-light rounded py-3">
            <img src={online} className="w-100" />
            <div
              style={{ borderTop: `3px solid #aa0000` }}
            >
                <h3 className="fw-bold">Reason 1</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi soluta dolorem aut, est minima voluptate sunt enim
                  distinctio eum eius architecto explicabo quod dicta, porro
                  repellendus dolore amet totam a?
                </p>
            </div>
          </div>

          <div className="col bg-light rounded py-3">
            <img src={inGYM} className="w-100" />
            <div
              style={{ borderTop: `3px solid #aa0000` }}
            >
                <h3 className="fw-bold">Reason 1</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi soluta dolorem aut, est minima voluptate sunt enim
                  distinctio eum eius architecto explicabo quod dicta, porro
                  repellendus dolore amet totam a?
                </p>
            </div>
          </div>
        </div>
      </div>



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
    </>
  );
}
