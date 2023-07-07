import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";

import P_M from "./Pages/Packages-Consult/Main";
import Packages from "./Pages/Packages-Consult/Packages";
import Consultation from "./Pages/Packages-Consult/Consultation";

import InGym from "./Pages/InGym/InGym";
import Articles from "./Pages/Articles/Articles";
import ArticleDetails from "./Pages/Articles/ArticleDetails";
import Products from "./Pages/Products/Products";
import ProductDetails from "./Pages/Products/ProductDetails";
import Cart from "./Pages/Cart/Cart";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/packages&consultaion" element={<P_M />}>
          <Route path="packages" element={<Packages />} />
          <Route path="consultation" element={<Consultation />} />
        </Route>

        <Route path="/ingym" element={<InGym />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:name" element={<ArticleDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:name" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
