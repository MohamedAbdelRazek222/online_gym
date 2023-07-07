import React from "react";
import SecondNavbar from "../../Components/SecondNavbar";

import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, modalClose } from "../../redux/cartSlice";
import Modal from "react-bootstrap/Modal";

import { urlFor } from "../../../lib/client";

export default function ProductDetails() {
  const { state } = useLocation();

  const dispatch = useDispatch();
  const add = () => {
    dispatch(addToCart(state));
  };

  // ======== Modal Alert ===========
  const { showModal } = useSelector((state) => state.cart);
  const handleClose = () => dispatch(modalClose());

  return (
    <>
      <SecondNavbar />
      <div className="container-fluid py-5">
        <h2 className="text-center pt-5 fw-bold">Product Details</h2>
        <div className="row py-5 px-4">
          <div className="col-md-6 d-flex justify-content-center my-4">
            <img src={urlFor(state.image[0])} className="col-10" />
          </div>
          <div className="col-md-6 rounded gray pt-5 px-4">
            <h4 className="fw-bold">{state.name}</h4>
            <p className="my-5 lead">{state.details}</p>
            <p className="my-4 fw-bold">$ {state.price}</p>
            <hr className="col-6" />

            <button
              className="btn-1 px-1 me-3 my-3 px-md-3"
              onClick={() => add()}
            >
              Add To Cart
            </button>
            <Link to="/products">
              <button className="btn-2 px-1 px-md-3">Back To Shoping</button>
            </Link>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>This Item is Already in Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body className="red">Hope you enjoy Shoping with us</Modal.Body>
        <Modal.Footer>
          <Link to="/cart">
            <button className="btn-1 px-3 rounded" onClick={handleClose}>
              Your Cart
            </button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}
