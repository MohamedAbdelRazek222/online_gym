import React from "react";
import { Link } from "react-router-dom";
import { urlFor } from "../../lib/client";

export default function ArticleCard(props) {
  const { article } = props;
  const { image, title } = article;
  return (
    <>
      <div className="Card gray">
        <div className="card-img">
          <img src={urlFor(image[0])} className="w-100" />
        </div>
        <h4 className="fw-bold my-3 px-2">{title}</h4>
        <div className="text-end">
          <Link to={`/articles/${title}`} state={article}>
            <button className="btn-1 fw-bold read-btn">Read</button>
          </Link>
        </div>
      </div>
    </>
  );
}
