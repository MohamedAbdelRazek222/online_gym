import React, { useState, useEffect } from "react";
// ----------- Sanity --------------
import { client } from "../../../lib/client";
// ---------- Images -------------
import header from "../../assets/images/articles.jpg";

// ---------- Components ----------
import SecondNavbar from "../../Components/SecondNavbar";
import Header from "../../Components/Header";
import ArticleCard from "../../Components/ArticleCard";
import Insta from "../../Components/Insta";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch('*[_type == "articles"]')
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  useEffect(() => setFiltered(articles), [articles]);

  // ================= filter =========
  const allcategories = [
    "الكل",
    ...new Set(articles.map((article, index) => article.category)),
  ];

  const filter = (category) => {
    if (category === "الكل") {
      setFiltered(articles);
      return;
    }
    setFiltered(articles.filter((article) => article.category === category));
  };

  return (
    <>
      <SecondNavbar />
      {/* ---------- Header ------------ */}
      <Header title={"#Articles"} img={header} />

      {/* =========== Content ========= */}
      <h2 className="hack-font-lg fw-bold text-center text-dark my-2">#READ</h2>
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
                  filtered.map((article) => (
                    <ArticleCard article={article} key={article.id} />
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
    </>
  );
}
