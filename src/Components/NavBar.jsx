import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function DefaultNavbar() {

  const { cartNum } = useSelector((state) => state.cart);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            Coach <span className="text-danger fw-bold">ELAM</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/home" className="nav-link pe-5 py-0">
                Home
              </NavLink>
              <NavLink
                to="/packages&consultaion"
                className="nav-link pe-5 py-0"
              >
                Packages
              </NavLink>
              <NavLink to="/articles" className="nav-link pe-5 py-0">
                Articles
              </NavLink>
              <NavLink to="/products" className="nav-link pe-5 py-0">
                Products
              </NavLink>
              <NavLink to="/cart" className="nav-link pe-5 py-0">
                <i className="bx bx-cart bx-sm position-relative px-1">
                  <span
                    className="bg-danger text-light rounded-circle position-absolute start-100 translate-middle badge"
                    id="cartNum"
                  >
                    {cartNum}
                  </span>
                </i>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
