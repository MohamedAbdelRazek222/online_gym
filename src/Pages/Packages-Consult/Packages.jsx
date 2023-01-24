import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { addToCart } from "../../../redux/cartSlice";

export default function Packages() {
  const dispatch = useDispatch();

  const add = () => {
    dispatch(addToCart(product));
  };

  const [filterd, setFilterd] = useState("training");

  const [selectedPackage, setSelectedPackage] = useState({
    name: "",
    price: 0,
    features: [],
  });

  const updateSelected = (name, price) => {
    setSelectedPackage({ ...selectedPackage, name, price });
  };

  // ============ Additional =============
  const additionalFeatures = [
    {
      fName: "feature 1",
      fprice: 10,
    },
    {
      fName: "feature 2",
      fprice: 20,
    },
    {
      fName: "feature 3",
      fprice: 30,
    },
  ];

  const addFeature = (e) => {
    let price = parseInt(e.target.value);
    if (e.target.checked) {
      setSelectedPackage({
        ...selectedPackage,
        features: [...selectedPackage.features, parseInt(e.target.value)],
      });
      console.log(selectedPackage);
    } else {
      let newFeatures = selectedPackage.features.filter(
        (element) => element !== price
      );
      setSelectedPackage({ ...selectedPackage, features: newFeatures });
      console.log(selectedPackage);
    }
  };

  const filter = (category) => {
    if (category === "training") {
      setFilterd("training");
    } else if (category === "training-diet") setFilterd("training-diet");
  };

  return (
    <div className="container py-5">
      {/* ========= Packages ========== */}

      <h2 className="fw-bold text-light text-center mb-5 text-uppercase fs-1">
        Choose your <span style={{ color: `#aa0000` }}>package</span>
      </h2>

      <div className="d-flex justify-content-around w-50 m-auto mb-5">
        <button className="btn-1 fs-5" onClick={() => filter("training")}>
          Trainng
        </button>
        <button className="btn-2 fs-5" onClick={() => filter("training-diet")}>
          Training & Diet
        </button>
      </div>

      {filterd == "training" && (
        <div className="row gap-4 bg-danger p-3">
          <div className="col bg-light py-3 rounded fs-5 text-center">
            <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
              Mohamed
            </p>
            <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
              Aglan
            </p>
            <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
              Mohamed
            </p>
            <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
              Mohamed
            </p>
            <button
              className="btn-1 my-3"
              onClick={() => updateSelected("package1", 20)}
            >
              Select
            </button>
          </div>
          <div className="col bg-light py-3 rounded fs-5 text-center">
            <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
              Mohamed
            </p>
            <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
              Aglan
            </p>
            <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
              Mohamed
            </p>
            <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
              Mohamed
            </p>
            <button
              className="btn-2 my-3"
              onClick={() => updateSelected("package2", 50)}
            >
              Select
            </button>
          </div>
          <div className="col bg-light py-3 rounded fs-5 text-center">
            <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
              Mohamed
            </p>
            <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
              Aglan
            </p>
            <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
              Mohamed
            </p>
            <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
              Mohamed
            </p>
            <button
              className="btn-1 my-3"
              onClick={() => updateSelected("package3", 100)}
            >
              Select
            </button>
          </div>
        </div>
      )}

      {filterd == "training-diet" && (
        <div className="row gap-4 bg-success p-3">
          <div className="col bg-light py-3 rounded fs-5 text-center">
            <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
              Mohamed
            </p>
            <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
              Aglan
            </p>
            <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
              Mohamed
            </p>
            <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
              Mohamed
            </p>

            <button className="btn-1 my-3">Select</button>
          </div>
          <div className="col bg-light py-3 rounded fs-5 text-center">
            <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
              Mohamed
            </p>
            <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
              Aglan
            </p>
            <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
              Mohamed
            </p>
            <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
              Mohamed
            </p>
            <button className="btn-2 my-3">Select</button>
          </div>
          <div className="col bg-light py-3 rounded fs-5 text-center">
            <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
              Mohamed
            </p>
            <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
              Aglan
            </p>
            <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
              Mohamed
            </p>
            <p className="pb-3" style={{ borderBottom: `1px solid #aa0000` }}>
              Mohamed
            </p>
            <button className="btn-1 my-3">Select</button>
          </div>
        </div>
      )}

      {/* =============== Additional Features ======= */}
      <div className="container text-light">
        {additionalFeatures.map((element) => (
          <>
            <input
              type={"checkbox"}
              name={element.fName}
              value={element.fprice}
              onClick={(e) => addFeature(e)}
            />
            <label>{element.fName}</label>
            <br />
          </>
        ))}
      </div>

      {/* ========== Total Cost ============== */}
      <div className="container text-light bg-light text-dark p-4">
        <h2 className="text-center text-uppercase fw-bold">
          Selected <span className="text-danger">Package</span>
        </h2>
        <h4>Package:  {selectedPackage.name}</h4>
        <h4>
          Total Cost:{" "}
          {parseInt(selectedPackage.price) +
            parseInt(
              selectedPackage.features.reduce((acc, features) => {
                return acc + features;
              }, 0)
            )}
        </h4>

        <button className="btn btn-outline-success mt-4 fw-bold"><i class="fs-2 bx bxl-whatsapp bx-flip-horizontal bx-tada"></i></button>
        
      </div>
    </div>
  );
}
