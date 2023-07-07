import React, { useState, useEffect } from "react";
import PackageCard from "../../Components/PackageCard";

// ----------- Sanity --------------
import { client } from "../../../lib/client";

import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

export default function Packages() {
  // ============== connect with sanity ===========
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    if (packages.length == 0) {
      client
        .fetch('*[_type == "packages"]')
        .then((data) => {
          setPackages(data);
        })
        .catch(console.error);
    }
  }, []);

  const [filterd, setFilterd] = useState("diet");

  const [selectedPackage, setSelectedPackage] = useState({
    name: "",
    price: 0,
    features: [],
  });

  const updateSelected = (name, price) => {
    setSelectedPackage({ ...selectedPackage, name, price });
  };

  // =========== add package to cart ========
  const dispatch = useDispatch();
  const add = () => {
    dispatch(addToCart(selectedPackage));
  };

  // ============ Additional =============
  const additionalFeatures = [
    {
      fName: "متابعه مع الكابتن يوميا",
      fprice: 200,
    },
    {
      fName: "متابعه فون مع الكابتن يوميا ومكالمه فيديو شهريا",
      fprice: 400,
    },
  ];

  const addFeature = (e) => {
    const price = parseInt(e.target.value);
    if (e.target.checked) {
      setSelectedPackage((prevPackage) => ({
        ...prevPackage,
        features: [
          ...prevPackage.features,
          { name: e.target.name, price: price },
        ],
      }));
    } else {
      setSelectedPackage((prevPackage) => ({
        ...prevPackage,
        features: prevPackage.features.filter(
          (feature) => feature.price !== price
        ),
      }));
    }
  };

  return (
    <div className="container py-5">
      {/* ========= Packages ========== */}

      <h2 className="fw-bold text-light text-center mb-5 text-uppercase fs-1">
        Choose your <span style={{ color: `#aa0000` }}>package</span>
      </h2>

      <div className="d-flex justify-content-around w-50 m-auto mb-5">
        <button className="btn-1 fs-5" onClick={() => setFilterd("diet")}>
          Diet
        </button>
        <button
          className="btn-2 fs-5"
          onClick={() => setFilterd("training-diet")}
        >
          Training & Diet
        </button>
      </div>

      {packages.length == 0 && (
        <div className="container">
          <div className="d-flex flex-column justify-content-center align-items-center my-5 py-5 bg-light">
            <p className="fs-1 fw-bold mb-4">Loading...</p>
            <i className="bx bx-loader-circle fs-1"></i>
          </div>
        </div>
      )}

      {packages.length !== 0 && (
        <div className="row">
          {filterd == "diet" && (
            <div className="row gap-4 p-3 m-auto">
              <PackageCard
                package={packages.find((dd) => dd.name === "Diet - 1 Month")}
                add={updateSelected}
              />
              <PackageCard
                package={packages.find((dd) => dd.name === "Diet - 2 Month")}
                add={updateSelected}
              />
              <PackageCard
                package={packages.find((dd) => dd.name === "Diet - 3 Month")}
                add={updateSelected}
              />
            </div>
          )}

          {filterd == "training-diet" && (
            <div className="row gap-4 p-3 m-auto">
              <PackageCard
                package={packages.find(
                  (dd) => dd.name === "Diet and Training - 1 Month"
                )}
                add={updateSelected}
              />
              <PackageCard
                package={packages.find(
                  (dd) => dd.name === "Diet and Training - 2 Month"
                )}
                add={updateSelected}
              />
              <PackageCard
                package={packages.find(
                  (dd) => dd.name === "Diet and Training - 3 Month"
                )}
                add={updateSelected}
              />
            </div>
          )}
        </div>
      )}

      {/* ========== Total Cost ============== */}
      <div className="container bg-light text-dark p-4 mt-5">
        <h2 className="text-center text-uppercase fw-bold mb-4 hack-font-md">
          Selected <span className="red">Package</span>
        </h2>
        <div className="row pt-3">
          <div className="col-md-6 mb-4">
            <h4 className="fs-3 fw-bold mb-3">
              Package: <span className="red">{selectedPackage.name}</span>
            </h4>
            <h4 className="fs-3 fw-bold">
              Total Cost:{" "}
              <span className="red">
                {parseInt(selectedPackage.price) +
                  parseInt(
                    selectedPackage.features
                      .map((item) => {
                        return item.price;
                      })
                      .reduce((accumulator, price) => {
                        if (typeof price === "number") {
                          return accumulator + price;
                        }
                        return accumulator;
                      }, 0)
                  )}
              </span>
            </h4>

            {selectedPackage.name && (
              <button className="btn-1 mt-4 fw-bold" onClick={add}>
                add to Cart
              </button>
            )}
          </div>

          {/* =============== Additional Features ======= */}
          <div className="col-md-6 text-dark">
            <h4 className="fw-bold fs-4 mb-3">Additional Features</h4>
            {additionalFeatures.map((element) => (
              <div className="d-flex" dir="rtl">
                <input
                  key={element.fName}
                  type={"checkbox"}
                  name={element.fName}
                  value={element.fprice}
                  onClick={(e) => addFeature(e)}
                />
                <label className="fs-5 mx-3 mb-2">{element.fName}</label>
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
