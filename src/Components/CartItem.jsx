import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import packageIMG from "../assets/images/package-img.jpg";
import { urlFor } from "../../lib/client";

function CartItem(props) {
  const { img, title, price, features, orderPrice } = props.item;

  const dispatch = useDispatch();

  const remove = (title) => {
    dispatch(removeFromCart(title));
  };

  return (
    <>
      <div className="d-flex mb-3 rounded" style={{ backgroundColor: `#ddd` }}>
        <div className="col-5">
          {img ? (
            <img
              src={urlFor(img[0])}
              className="product-cart-img w-100 h-100"
            />
          ) : (
            <img src={packageIMG} className="w-100 h-100" />
          )}
        </div>
        <div className="col-7 p-2 position-relative">
          <p className="fs-5 fw-bold mb-2">
            Package: <span className="red">{title}</span>
          </p>
          {(features && features.length && (
            <>
              <p className="fs-5 fw-bold mb-2">
                Features:{" "}
                <span className="red">
                  {features.map((item) => (
                    <p className="fs-6">{item.name}</p>
                  ))}
                </span>
              </p>
              <p className="fs-5 fw-bold">
                Price: <span>{orderPrice}</span>
              </p>
            </>
          )) || (
            <p className="fs-5 fw-bold">
              Price: <span>{price}</span>
            </p>
          )}
          {props.children}

          <button
            className="btn btn-danger position-absolute"
            style={{ right: `5px`, bottom: `5px` }}
            onClick={() => remove(props.item)}
          >
            <i class="bx bxs-trash-alt" />
          </button>
        </div>
      </div>
    </>
  );
}

export default CartItem;
