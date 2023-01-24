import React from "react";
import Header from "../../Components/Header";
import inGYM from "../../assets/images/inGYM.jpeg";
import online from "../../assets/images/online.jpeg";
import empty from "../../assets/images/emptyCart.jpg";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  increaseAmount,
  decreaseAmount,
  removeFromCart,
} from "../../redux/cartSlice";

export default function Cart() {
  const { selectedItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const increase = (title) => {
    dispatch(increaseAmount(title));
  };

  const decrease = (title) => {
    dispatch(decreaseAmount(title));
  };

  const remove = (title) => {
    dispatch(removeFromCart(title));
  };

  return (
    <>
      <Header title={"#Your Order"} img={inGYM} />

      {(selectedItems.length && (
        <div className="container-fluid py-4 bg-dark">
          <h2 className="text-center text-light fw-bold mb-4">
            Just One Step Left to Complete Your <span className="text-danger">Order</span>
          </h2>
          <div className="row">
            <div className="col-md-6 bg-danger">
              <h3 className="text-center fw-bold my-4">Your Order</h3>
              {selectedItems.map((item) => (
                <>
                  <div className="d-flex bg-light">
                    <div className="col-5">
                      <img src={online} className="w-100" />
                    </div>
                    <div className="col-7 px-3 position-relative">
                      <p>Product: {item.title}</p>
                      <p>Price: {item.price}</p>
                      <div>
                        Count:{" "}
                        <button
                          className="btn btn-danger"
                          onClick={() => decrease(item)}
                        >
                          <i className="bx bx-minus" />
                        </button>{" "}
                        <span className="mx-4 fs-4">{item.count}</span>
                        <button
                          className="btn btn-success"
                          onClick={() => increase(item)}
                        >
                          <i className="bx bx-plus" />
                        </button>
                      </div>
                      <p>Total Price: {item.orderPrice}</p>

                      <button
                        className="btn btn-danger position-absolute" style={{right: `0`, top: `5px`}}
                        onClick={() => remove(item)}
                      >
                        <i class="bx bxs-trash-alt" />
                      </button>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div className="col-md-6 bg-warning">
              <h3 className="text-center fw-bold my-4">Your Info</h3>
              <form
                // action={FORM_ENDPOINT}
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
                      // pattern="(010 | 011 | 012 | 015){1}[0-9]{8}"
                      // pattern="[+]{1}[0-9]{11,14}"
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
          </div>
        </div>
      )) || (
        <div className="fs-3 rounded bg-light col-8 m-auto py-3 my-4 text-center">
          <p className="fw-bold mb-4 py-1 text-uppercase">Your Cart is Empty</p>
          <Link to="/products">
            <button className="btn-1 mb-5">Back To Products</button>
            <br />
          </Link>
          <img src={empty} className="col-4" />
        </div>
      )}
    </>
  );
}
