import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import img1 from "../assets/event/img1.png";
const event = () => {
  return (
    <div>
         {/* Breadcrumb */}
      <div style={{ padding: "20px 40px", fontSize: "18px", fontWeight: "600" }}>
        Home &gt; Event
      </div>

      {/* IMAGE SECTION */}
      <div
        className="container-fluid"
        style={{
          padding: 0,
          borderTop: "10px solid #e66a00",
          borderBottom: "10px solid #e66a00",
        }}
      >
        <img
          src={img1} // change the path to your image
          alt="Upcoming Events"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </div>

      {/* COMING SOON TEXT */}
      <div
        className="text-center"
        style={{
          marginTop: "70px",
          marginBottom: "100px",
          fontSize: "70px",
          fontWeight: "800",
          letterSpacing: "3px",
          textShadow: "4px 4px 10px rgba(0,0,0,0.4)",
        }}
      >
        “COMING SOON”
      </div>
    </div>
  )
}

export default event