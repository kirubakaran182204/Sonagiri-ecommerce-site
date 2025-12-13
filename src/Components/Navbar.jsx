import React from 'react'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import img1 from "../assets/navbar/logo.png";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          backgroundColor: "#fff",
          padding: "10px 40px",
        }}
      >
        <div className="container-fluid">

          <Link className="navbar-brand" to="/">
            <img src={img1} alt="Logo" style={{ height: "70px" }} />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav" style={{ display: "flex", alignItems: "center", gap: "22px" }}>

              <li className="nav-item">
                <Link className="nav-link" to="/" style={{ color: "#f36c21", fontWeight: "700" }}>
                  Home
                </Link>
              </li>

              {/* Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  style={{ color: "#1c3c74" }}
                >
                  Our Projects
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="Our_Projects/plots">Plots</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="Our_Projects/farmplots">Farm plots</Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/plots" style={{ color: "#1c3c74" }}>
                  All Properties
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/services" style={{ color: "#1c3c74" }}>
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/event" style={{ color: "#1c3c74" }}>
                  Event
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/testimonial" style={{ color: "#1c3c74" }}>
                  Testimonial
                </Link>
              </li>

               <li className="nav-item">
                <Link className="nav-link" to="/contact" style={{ color: "#1c3c74" }}>
                  Contact
                </Link>
              </li>

 
            </ul>

            <button
              className="btn mx-5"
              style={{
                backgroundColor: "#c7c7c7",
                fontWeight: "600",
              }}
            >
              Create a Listing
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
