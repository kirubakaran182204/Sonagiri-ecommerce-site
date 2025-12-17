import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Contact = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div
        style={{
          padding: "20px 40px",
          fontSize: "18px",
          fontWeight: "600",
        }}
      >
        Home &gt; Contact
      </div>

      {/* TOP BANNER */}
      <div
        className="container-fluid"
        style={{
          padding: 0,
          borderTop: "10px solid #e66a00",
          borderBottom: "10px solid #e66a00",
        }}
      >
        <img
          src="src/assets/contact/img1.png"
          alt="Contact Banner"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />

        {/* CONTACT TITLE */}
        <div
          style={{
            background: "#002c5b",
            padding: "25px 0",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "40px",
              fontWeight: "900",
              letterSpacing: "4px",
              margin: 0,
            }}
          >
            CONTACT
          </h1>
        </div>
      </div>

      {/* MAIN SECTION */}
      <div
        className="container"
        style={{ marginTop: "60px", marginBottom: "100px" }}
      >
        <div className="row align-items-center">
          {/* LEFT SIDE IMAGE */}
          <div className="col-md-4 text-center">
            <img
              src="src/assets/contact/img2.png"
              alt="Contact Icon"
              style={{
                width: "250px",
                height: "auto",
              }}
            />
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="col-md-8">
            <div className="row g-4">
              {/* NAME */}
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  style={{
                    height: "50px",
                    borderRadius: "8px",
                    border: "1px solid #999",
                  }}
                />
              </div>

              {/* EMAIL */}
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  style={{
                    height: "50px",
                    borderRadius: "8px",
                    border: "1px solid #999",
                  }}
                />
              </div>

              {/* CONTACT NUMBER */}
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Contact Number"
                  style={{
                    height: "50px",
                    borderRadius: "8px",
                    border: "1px solid #999",
                  }}
                />
              </div>

              {/* MESSAGE */}
              <div className="col-12">
                <textarea
                  className="form-control"
                  placeholder="Message"
                  rows="5"
                  style={{
                    border: "2px solid #0070d1",
                    borderRadius: "10px",
                    padding: "15px",
                  }}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
