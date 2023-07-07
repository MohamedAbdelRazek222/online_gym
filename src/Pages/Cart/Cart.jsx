import React, { useEffect, useState } from "react";
import SecondNavbar from "../../Components/SecondNavbar";
import Header from "../../Components/Header";
import CartItem from "../../Components/CartItem";

import cart from "../../assets/images/cart.jpg";
import empty from "../../assets/images/emptyCart.jpg";

import ReactWhatsapp from "react-whatsapp";

// ========= Redux =========
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increaseAmount, decreaseAmount } from "../../redux/cartSlice";

export default function Cart() {
  const { selectedItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const increase = (title) => {
    dispatch(increaseAmount(title));
  };

  const decrease = (title) => {
    dispatch(decreaseAmount(title));
  };

  // ======== Handle Form Data ============
  const [clientData, setClientData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const formatClientData = (clientData) => {
    return `Name: ${clientData.firstName} ${clientData.lastName} \nEmail: ${clientData.email}\nPhone: ${clientData.phone}`;
  };

  const formatFeatures = (features) => {
    if (Array.isArray(features) && features.length > 0) {
      const featureNames = features.map((feature) => feature.name);
      return `Features: ${featureNames.join(", ")}`;
    }
    return "";
  };

  const inputChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setClientData({ ...clientData, [name]: value });
  };

  const [formEmpty, setFormEmpty] = useState(true);

  useEffect(() => {
    if (Object.values(clientData).includes("")) {
      setFormEmpty(true);
    } else setFormEmpty(false);
  }, [clientData]);

  return (
    <>
      <SecondNavbar />
      <Header title={"#Your Cart"} img={cart} />

      {(selectedItems.length && (
        <div className="container-fluid py-5 bg-dark">
          <h2 className="text-center text-light fw-bold mb-5">
            Just One Step Left to Complete Your{" "}
            <span className="text-danger">Order</span>
          </h2>
          <div className="row">
            <div className="col-lg-6">
              <h3 className="text-center fw-bold my-4 text-light">
                Your Order
              </h3>
              {selectedItems.map((item) =>
                item.title.toLowerCase().includes("diet") ? (
                  <CartItem item={item} />
                ) : (
                  <CartItem item={item}>
                    <div className="fs-5">
                      Count:{" "}
                      <button
                        className="btn btn-danger px-2 py-1"
                        onClick={() => decrease(item)}
                      >
                        <i className="bx bx-minus" />
                      </button>
                      <span className="mx-2 mx-md-3 fs-4">{item.count}</span>
                      <button
                        className="btn btn-success px-2 py-1"
                        onClick={() => increase(item)}
                      >
                        <i className="bx bx-plus" />
                      </button>
                    </div>

                    <div>
                      <p className="fs-5 mt-2">
                        Total Price:{" "}
                        <span className="red fw-bold">{item.orderPrice}</span>
                      </p>
                    </div>
                  </CartItem>
                )
              )}
            </div>
            <div className="col-lg-6">
              <h3 className="text-center fw-bold my-4 text-light">Your Info</h3>
              <form
                method="POST"
                target="_blank"
                className="py-3 px-4 container bg-light rounded"
              >
                <div className="my-2 row">
                  <div className="col-6">
                    <label htmlFor="firstName">FIRST NAME:</label>
                    <br />
                    <input
                      type="text"
                      name="firstName"
                      className="col-12 px-3 py-2"
                      required
                      onChange={(e) => inputChangeHandler(e)}
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="lastName">LAST NAME:</label>
                    <br />
                    <input
                      type="text"
                      name="lastName"
                      className="col-12 px-3 py-2"
                      required
                      onChange={(e) => inputChangeHandler(e)}
                    />
                  </div>
                </div>

                <div className="my-2 row">
                  <div className="col-6">
                    <label htmlFor="Email">EMAIL ADDRESS:</label>
                    <br />
                    <input
                      type="email"
                      name="email"
                      className="col-12 px-3 py-2"
                      required
                      onChange={(e) => inputChangeHandler(e)}
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="phone">PHONE NUMBER:</label>
                    <br />
                    <input
                      type="tel"
                      pattern="[0-9]{5,14}"
                      name="phone"
                      className="col-12 px-3 py-2"
                      required
                      onChange={(e) => inputChangeHandler(e)}
                    />
                  </div>
                </div>
                <input className="d-none" required />

                <div className="my-4">
                  {formEmpty ? (
                    <button
                      className="btn-1 rounded fs-5 px-4"
                      type="submit"
                      formAction=""
                    >
                      Order
                    </button>
                  ) : (
                    <ReactWhatsapp
                      className="btn-2 rounded fs-5 px-4"
                      number="+201090002058"
                      message={`Order Details:\n${selectedItems
                        .map(
                          (element) =>
                            `${element.title}: (${
                              element.count
                            }) - ${formatFeatures(element.features)}
                             Price: ${element.orderPrice} EG`
                        )
                        .join("\n")}\n\nClient Data:\n${formatClientData(
                        clientData
                      )}`}
                    >
                      Order
                    </ReactWhatsapp>
                  )}
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
