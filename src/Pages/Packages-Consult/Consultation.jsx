import React from "react";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/36e970d0-ad2f-11ed-a31e-753411848f80";

export default function Consultation() {
  return (
    <div className="container py-5">
      <div className="row">
        <h2 className="mb-4 pb-3 text-light hack-font-lg fw-bold ms-3 section-title text-center ">
          Keep in <span style={{ color: `#aa0000` }}>Touch</span>
        </h2>
        <div className="col-md-6">
          <form
            action={FORM_ENDPOINT}
            method="POST"
            target="_blank"
            className="py-3 px-4 container bg-light rounded"
          >
            <div className="my-2 row">
              <div className="col-6">
                <label htmlFor="firstName">
                  FIRST NAME: <span className="text-danger fs-5">*</span>
                </label>
                <br />
                <input
                  type="text"
                  name="firstName"
                  className="col-12 px-3 py-2"
                  required
                />
              </div>
              <div className="col-6">
                <label htmlFor="lastName">
                  LAST NAME: <span className="text-danger fs-5">*</span>
                </label>
                <br />
                <input
                  type="text"
                  name="lastName"
                  className="col-12 px-3 py-2"
                  required
                />
              </div>
            </div>

            <div className="my-2 row">
              <div className="col-6">
                <label htmlFor="Email">
                  EMAIL ADDRESS: <span className="text-danger fs-5">*</span>
                </label>
                <br />
                <input
                  type="email"
                  name="Email"
                  className="col-12 px-3 py-2"
                  required
                />
              </div>
              <div className="col-6">
                <label htmlFor="phone">
                  PHONE NUMBER: <span className="text-danger fs-5">*</span>
                </label>
                <br />
                <input
                  type="tel"
                  pattern="[0-9]{5,14}"
                  name="phone"
                  className="col-12 px-3 py-2"
                  required
                />
              </div>
            </div>

            <div className="my-2 row">
              <div className="col-12">
                <label htmlFor="subject">SUBJECT:</label>
                <br />
                <input
                  type="text"
                  name="subject"
                  className="col-12 px-3 py-2"
                />
              </div>
            </div>

            <div className="my-3 row">
              <div className="col-12">
                <label htmlFor="subject">DESCRIPTION:</label>
                <br />
                <textarea
                  placeholder="Your message"
                  name="message"
                  className="px-3 py-3 col-12"
                />
              </div>
            </div>

            <div className="my-4">
              <button className="btn-1 rounded fs-5 px-4" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>

        <div className="col-md-6 px-4 pt-4 text-light">
          <p className="lead fs-3 fw-bold">
            send your inquiry and the coach will
            <br />
            in the shortest time
          </p>
          <p className="fs-5">
            <span className="text-danger fw-bold">Email:</span> eslam@gmail.com
            <br />
            <span className="text-danger fw-bold">phone:</span> +20 01090002058
          </p>
        </div>
      </div>
    </div>
  );
}
