import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import plotsImg from "../assets/plots/img1.png"; // ✅ FIXED PATH

const PlotsBanner = () => {
  return (
    <>
      {/* BREADCRUMB */}
      <div
        style={{
          padding: "14px 30px",
          fontWeight: "600",
          backgroundColor: "#fff",
        }}
      >
        Home &gt; Our Projects &gt; Plots
      </div>

      {/* IMAGE BANNER */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "260px",
          overflow: "hidden",
        }}
      >
        <img
          src={plotsImg}
          alt="Plots"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* CENTER STRIP */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            width: "100%",
            transform: "translateY(-50%)",
            background: "linear-gradient(to right, #4b5f8f, #27345e)",
            padding: "16px 0",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              color: "#fff",
              margin: 0,
              fontWeight: "700",
              letterSpacing: "2px",
            }}
          >
            PLOTS
          </h1>
        </div>
      </div>
    </>
  );
};

export default PlotsBanner;
