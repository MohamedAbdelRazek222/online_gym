import React, { useState, useEffect } from "react";
// ----------- Sanity --------------
import { client } from "../../../lib/client";
// ---------- Images -------------
import header from "../../assets/images/products.jpg";

// ---------- Components ----------
import SecondNavbar from "../../Components/SecondNavbar";
import Header from "../../Components/Header";
import ProductCard from "../../Components/ProductCard";
import Insta from "../../Components/Insta";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { modalClose } from "../../redux/cartSlice";
import Modal from "react-bootstrap/Modal";

export default function Products() {
  // ============== connect with sanity ===========
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch('*[_type == "product"]')
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  useEffect(() => setFiltered(products), [products]);

  // ================= filter =========
  const allcategories = [
    "الكل",
    ...new Set(products.map((product, index) => product.category)),
  ];

  const filter = (category) => {
    if (category === "الكل") {
      setFiltered(products);
      return;
    }
    setFiltered(products.filter((product) => product.category === category));
  };

  // ======== Modal Alert ===========
  const dispatch = useDispatch();
  const { showModal } = useSelector((state) => state.cart);
  const handleClose = () => dispatch(modalClose());

  return (
    <>
      <SecondNavbar />
      {/* ---------- Header ------------ */}
      <Header title={"#PRODUCTS"} img={header} />

      {/* =========== Content ========= */}
      <h2 className="hack-font-lg fw-bold text-center text-dark my-2">#SHOP</h2>
      {!loading ? (
        <div className="container-fluid py-4">
          <div className="row d-flex">
            <div className="filter-container col-lg-2 px-0 text-center">
              {allcategories.map((category, index) => (
                <button
                  key={category}
                  className="filterBtn d-lg-block btn-2 fw-bold text-capitalize"
                  onClick={() => filter(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="col-lg-10">
              <div className="bd-grid">
                {filtered &&
                  filtered.map((product) => (
                    <ProductCard product={product} key={product.id} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="d-flex flex-column justify-content-center align-items-center my-5 py-5 bg-light">
            <p className="fs-1 fw-bold mb-4">Loading...</p>
            <i className="bx bx-loader-circle fs-1"></i>
          </div>
        </div>
      )}

      {/* =========== Insta Images ========= */}
      <Insta />

      {/* =========== Modal ============ */}
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
