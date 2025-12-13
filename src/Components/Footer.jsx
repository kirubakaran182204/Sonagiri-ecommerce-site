import React from 'react'
import imgFooterLogo from "../assets/navbar/logo.png"

const footer = () => {
  return (
    <>
<div style={{ background: "#000", color: "#fff", paddingTop: "40px" }}>
      {/* Top Footer Section */}
      <div className="container">
        <div className="row">

          {/* Logo */}
          <div className="col-md-4 text-center text-md-start mb-4">
            <img src={imgFooterLogo} alt="logo" style={{ width: "200px" }} />
          </div>

          {/* Contact Us */}
          <div className="col-md-4 mb-4">
            <h3 style={{ fontFamily: "Georgia" }}>Contact Us</h3>

            <p style={{ fontSize: "18px" }}>
              📞 8438438413, 8807880764
            </p>

            <p style={{ fontSize: "18px" }}>
              ✉️ Sales@sonagiri.in
            </p>

            <p style={{ fontSize: "18px" }}>
              🌐 www.sonagiri.in
            </p>
          </div>

          {/* Company */}
          <div className="col-md-2 mb-4">
            <h3 style={{ fontFamily: "Georgia" }}>Company</h3>
            <p>Home</p>
            <p>About Us</p>
            <p>Project</p>
          </div>

          {/* Information */}
          <div className="col-md-2 mb-4">
            <h3 style={{ fontFamily: "Georgia" }}>Information</h3>
            <p>Enquiry</p>
          </div>
        </div>
      </div>

      {/* Yellow Bar Section */}
      <div
        style={{
          background: "#f7d600",
          padding: "10px 0",
          marginTop: "20px",
        }}
      >
        <div className="container d-flex justify-content-between align-items-center">

          <div style={{ fontWeight: "bold" }}>All Rights Reserved</div>

          {/* Social Icons */}
          <div style={{ fontSize: "22px" }}>
            <i className="bi bi-instagram mx-2"></i>
            <i className="bi bi-facebook mx-2"></i>
            <i className="bi bi-youtube mx-2"></i>
          </div>

          <div style={{ fontWeight: "bold" }}>Privacy Policy</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default footer