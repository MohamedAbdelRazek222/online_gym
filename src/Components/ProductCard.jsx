import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";

import { urlFor } from "../../lib/client";

export default function ProductCard(props) {
  const { product } = props;
  const { image, name, price } = product;

  const dispatch = useDispatch();

  const add = () => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <div className="Card gray">
        <div className="card-img">
          <img src={urlFor(image[0])} className="w-100" />
        </div>

        <div className="px-2">
          <h5 className="fw-bold my-1">{name}</h5>
          <p className="my-2 lead">$ {price}</p>
        </div>

        <div className="d-flex justify-content-between pt-2">
          <Link to={`/products/${name}`} state={product}>
            <button className="btn detailsBtn fs-5">
              <i class="bx bx-info-circle"></i>
            </button>
          </Link>

          <button className="btn cartBtn fs-5" onClick={() => add()}>
            <i class="bx bxs-cart"></i>
          </button>
        </div>
      </div>
    </>
  );
}
