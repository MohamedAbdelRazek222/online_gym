import React from "react";

function PackageCard(props) {
  const { name, month, price, details } = props.package;
  const { add } = props;
  return (
    <div className="col-md bg-light py-3 rounded fs-5 text-center">
      <h2 className="pb-3 soul-font bottom-border">{month} Months</h2>
      {details.map((item) => {
        return (
          <p className="pb-3 bottom-border" key={item}>
            {item}
          </p>
        );
      })}
      <p className="soul-font fs-4">{price} EG</p>
      <button className="btn-2 my-3" onClick={() => add(name, price)}>
        Select
      </button>
    </div>
  );
}

export default PackageCard;
