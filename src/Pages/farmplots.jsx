import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import farmImg from "../assets/farmplots/img1.png"; 


const FarmPlots = () => {
  return (
    <>
      {/* BREADCRUMB */}
      <div
        style={{
          padding: "12px 30px",
          fontWeight: "600",
          background: "#fff",
        }}
      >
        Home &gt; Our Projects &gt; Farm Plots
      </div>

      {/* IMAGE BANNER */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "280px",
          overflow: "hidden",
        }}
      >
        <img
          src={farmImg}
          alt="Farm Plots"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* DARK BLUE TITLE STRIP */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "0",
            width: "100%",
            transform: "translateY(-50%)",
            background:
              "linear-gradient(to right, #4a5d8f, #1c243f)",
            textAlign: "center",
            padding: "18px 0",
          }}
        >
          <h1
            style={{
              color: "#fff",
              margin: 0,
              letterSpacing: "2px",
              fontWeight: "700",
            }}
          >
            FARM PLOTS
          </h1>
        </div>
      </div>

      {/* ORANGE COMING SOON SECTION */}
      <div
        style={{
          backgroundColor: "#ee7a1c",
          height: "220px",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          padding: "30px 40px",
        }}
      >
        <h2
          style={{
            color: "#fff",
            fontWeight: "700",
            letterSpacing: "1px",
            margin: 0,
          }}
        >
          COMING SOON...
        </h2>
      </div>
    </>
  );
};

export default FarmPlots;
