import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import img1 from "../assets/services/img1.png";
import img2 from "../assets/services/img2.png";
import img3 from "../assets/services/img3.png";
import img4 from "../assets/services/img4.png";
import img5 from "../assets/services/img5.png";
import img6 from "../assets/services/img6.png";
const Services = () => {
  return (
    <>
      {/* BREADCRUMB */}
      <div style={{ padding: "20px 60px", fontWeight: "600" }}>
        Home &gt; Services
      </div>

      {/* TOP BANNER */}
      <div className="container-fluid px-5">
        <div className="row align-items-center">
          <div
            className="col-md-7"
            style={{
              background: "linear-gradient(to right, #fde6d4, #f6b07b)",
              padding: "70px",
            }}
          >
            <h1
              style={{
                fontSize: "64px",
                fontWeight: "800",
                color: "#1d4b8f",
              }}
            >
              OUR <br /> SERVICES
            </h1>
          </div>

          <div className="col-md-5 text-center">
            <img src={img1} alt="services" className="img-fluid" />
          </div>
        </div>
      </div>

      {/* TITLE */}
      <div className="text-center my-5">
        <h3 style={{ fontWeight: "700" }}>
          Buying, Selling, Renting – We’ve Got You!
        </h3>
        <p style={{ fontStyle: "italic" }}>
          Explore Our Services at Sonagiri
        </p>
      </div>

      {/* BLUE STRIP */}
      <div
        style={{
          backgroundColor: "#0b2c5f",
          color: "#fff",
          padding: "15px 60px",
          textAlign: "center",
          fontSize: "14px",
        }}
      >
        We offer a wide range of real estate services, designed to meet your
        unique needs and help you navigate the property market with confidence.
      </div>

      {/* BUYING */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-4">
            <img
              src={img2}
              alt="buy"
              className="img-fluid"
              style={{ border: "5px solid #f47c20" }}
            />
          </div>
          <div className="col-md-8">
            <div style={orangeTitle}>Property Buying Made Easy</div>
            <p className="mt-3 text-muted">
              Finding the perfect property doesn't have to be a daunting task. At Sonagiri, we make the buying process straightforward and stress-free. Our expert team listens to your needs, budget, and preferences to provide you with a curated list of properties that match your goals. We help with everything from property searches to paperwork, ensuring a smooth and efficient transaction.
            </p>
          </div>
        </div>
      </div>

      {/* SELLING */}
      <div className="container my-5">
        <div className="row align-items-center flex-md-row-reverse">
          <div className="col-md-4">
            <img
              src={img3}
              alt="sell"
              className="img-fluid"
              style={{ border: "5px solid #0b2c5f" }}
            />
          </div>
          <div className="col-md-8">
            <div style={blueTitle}>Efficient Property Selling</div>
            <p className="mt-3 text-muted">
             Selling your property requires careful planning, strategic pricing, and a clear marketing approach. Our team uses its extensive knowledge of the market to help you sell your property quickly and at the best price. We provide expert advice on pricing, staging, and marketing to ensure your property attracts the right buyers. With Terrenum Homes, you can count on a seamless selling experience.
            </p>
          </div>
        </div>
      </div>

      {/* RENTING */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-4">
            <img
              src={img4}
              alt="rent"
              className="img-fluid"
              style={{ border: "5px solid #f47c20" }}
            />
          </div>
          <div className="col-md-8">
            <div style={orangeTitle}>Renting Made Simple</div>
            <p className="mt-3 text-muted">
              Looking for a rental property or renting out your space? Sonagiri offers a wide range of rental options, from apartments to commercial spaces. We connect landlords with reliable tenants and assist renters in finding homes that suit their lifestyles and budgets. Our team ensures that both landlords and tenants enjoy a smooth and hassle-free experience.
            </p>
          </div>
        </div>
      </div>

      {/* PLOT */}
      <div className="container my-5">
        <div className="row align-items-center flex-md-row-reverse">
          <div className="col-md-4">
            <img
              src={img5}
              alt="plot"
              className="img-fluid"
              style={{ border: "5px solid #0b2c5f" }}
            />
          </div>
          <div className="col-md-8 text-center">
            <div style={blueTitle}>Plot and Land Services</div>
            <p className="mt-3 text-muted">
              Whether you're looking to buy a plot for building your dream home. investing in land, or securing a commercial space, Sonagiri provides an extensive selection of plots to suit various needs. We specialize in finding prime locations that offer long-term value. Our experts provide thorough market analysis to ensure you make a well-informed investment.
            </p>
          </div>
        </div>
      </div>

      {/* FARMLAND */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-4">
            <img
              src={img6}
              alt="farm"
              className="img-fluid"
              style={{ border: "5px solid #f47c20" }}
            />
          </div>
          <div className="col-md-8">
            <div style={orangeTitle}>Farmland Services</div>
            <p className="mt-3 text-muted">
              For those seeking peaceful escapes or agricultural investments, Sonagiri offers carefully selected farmlands. Whether you're looking to start a farming venture or purchase a retreat, we provide access to fertile lands with strong growth potential. Our team assists with the entire process, from land selection to final purchase.
            </p>
          </div>
        </div>
      </div>

      {/* ✅ FINAL BLUE COMMITMENT STRIP (IMAGE YOU SENT) */}
      <div
        style={{
          backgroundColor: "#4a5f97",
          padding: "40px 80px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#ffd700",
            fontStyle: "italic",
            fontWeight: "600",
            fontSize: "18px",
            lineHeight: "1.6",
            margin: 0,
          }}
        >
          We are committed to providing exceptional service and expert guidance
          in every aspect of real estate. Our goal is to make your property
          journey seamless, whether you're buying, selling, renting, or
          investing. Let us help you turn your real estate dreams into reality.
        </p>
      </div>
    </>
  );
};

/* COMMON STYLES */
const orangeTitle = {
  backgroundColor: "#f47c20",
  color: "#fff",
  padding: "10px 20px",
  fontWeight: "700",
  fontSize: "20px",
};

const blueTitle = {
  backgroundColor: "#0b2c5f",
  color: "#fff",
  padding: "10px 20px",
  fontWeight: "700",
  fontSize: "20px",
};

export default Services;