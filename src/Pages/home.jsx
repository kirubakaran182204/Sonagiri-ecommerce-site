import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import img1 from "../assets/songiri property/img1.png"
import img2 from "../assets/songiri property/img2.png"
import img3 from "../assets/songiri property/img3.png"
import img4 from "../assets/songiri property/img4.png"
import img5 from "../assets/songiri property/img5.png"
import img6 from "../assets/songiri property/img6.png"
const Home = () => {


const cardData = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
  ];




  return (
    <>
      {/* FULL SCREEN IMAGE */}
      <div className='container-fluid' style={{ padding: 0 }}>
        <img
          src="/src/assets/bg img/img 1.png"
          alt=""
          style={{
            height: "100vh",
            width: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      {/* ABOUT SECTION */}
      <div
        className="container-fluid"
        style={{
          background: "#f7d8d8",
          width: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="row">
          {/* LEFT TEXT */}
          <div className="col-md-7">
            <h2
              className='mb-3 mt-5'
              style={{
                color: "#ff7a00",
                fontWeight: "800",
                fontSize: "45px",
              }}
            >
              Sonagiri
            </h2>

            <p
              style={{
                fontSize: "22px",
                lineHeight: "34px",
                color: "#000",
              }}
            >
              We believe every property is more than just a structure—it's the foundation of dreams, aspirations, and countless memories.
              Whether you’re buying your first home, expanding your investment
              portfolio, or searching for the perfect rental, we are committed
              to providing personalized solutions that fit your needs.
            </p>

            <h3
              className='mt-3'
              style={{
                fontWeight: "800",
                fontSize: "28px",
                color: "#13294B",
              }}
            >
              GET STARTED WITH US
            </h3>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-md-5 col-12 d-flex justify-content-center justify-content-md-end mt-4 mt-md-0">
            <img
              src="/src/assets/realestate/img1.png"
              alt="team"
              style={{
                width: "100%",
                maxWidth: "720px",
                marginBottom: "-10px",
              }}
            />
          </div>
        </div>
      </div>

      {/* SERVICES INTRO SECTION */}
      <div className="container my-5">
        <div className="text-center mb-5">
          <h2 style={{ color: "#0b3d91", fontWeight: "800", fontSize: "40px" }}>
            Our Services
          </h2>
          <p style={{ fontSize: "18px", lineHeight: "28px", color: "#000", maxWidth: "800px", margin: "0 auto" }}>
            We offer end-to-end real estate solutions, from buying and selling to renting and property management. Our team ensures smooth, transparent, and trusted transactions that turn your property goals into reality.
          </p>
        </div>
      </div>

      {/* SERVICES CARDS / IMAGES */}
      <div className="container my-5">
        <div className="row g-4">

          {/* BUYING */}
          <div className="col-md-6">
            <img
              src="/src/assets/our services/img1.png"
              alt="Buying"
              className="img-fluid shadow rounded"
              style={{ width: "100%" }}
            />
          </div>

          {/* SELLING */}
          <div className="col-md-6">
            <img
              src="/src/assets/our services/img2.png"
              alt="Selling"
              className="img-fluid shadow rounded"
              style={{ width: "100%" }}
            />
          </div>

          {/* PLOTS */}
          <div className="col-md-6">
            <img
              src="/src/assets/our services/img3.png"
              alt="Plots"
              className="img-fluid shadow rounded"
              style={{ width: "100%" }}
            />
          </div>

          {/* FARMLANDS */}
          <div className="col-md-6">
            <img
              src="/src/assets/our services/img4.png"
              alt="Farmlands"
              className="img-fluid shadow rounded"
              style={{ width: "100%" }}
            />
          </div>

        </div>
      </div>

      <div className="container mt-4 mb-5">

        {/* TITLE */}
        <h1
          className="text-center fw-bold"
          style={{ color: "#0A4DD3", marginBottom: "40px" }}
        >
          Sonagiri Priority
        </h1>

        {/* GRID ROW */}
        <div className="row g-4">
          {cardData.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div
                className="card shadow"
                style={{
                  borderRadius: "14px",
                  overflow: "hidden",
                  border: "2px solid #d9e7ff",
                }}
              >
                <img
                  src={item.img}
                  alt="plot"
                  style={{
                    width: "100%",
                    height: "260px",
                    objectFit: "cover",
                  }}
                />

                <div
                  style={{
                    background: "#fff",
                    padding: "15px",
                    borderRadius: "10px",
                    margin: "15px",
                    border: "2px solid #b3c7f9",
                  }}
                >
                  <p style={{ margin: 0, fontWeight: "600" }}>
                    Palayam , Thirupattur
                  </p>
                  <p style={{ margin: 0 }}>AAA Nagar</p>
                  <p
                    style={{
                      margin: "0",
                      fontWeight: "700",
                      fontSize: "18px",
                    }}
                  >
                    85,000/-
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
         
    </>
  )
}

export default Home;
