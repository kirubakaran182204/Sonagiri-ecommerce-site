import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Img1 from "../assets/testimonial/img1.png";
import Img2 from "../assets/testimonial/img3.png"
const testimonial = () => {
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
        Home &gt; Testimonial
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
          src={Img1}
          alt="Testimonials"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </div>

      {/* TESTIMONIAL CARD */}
      <div
        className="container"
        style={{
          marginTop: "50px",
          marginBottom: "100px",
        }}
      >
        <div
          style={{
            border: "3px solid black",
            borderRadius: "15px",
            padding: "40px 50px",
            background: "linear-gradient(to bottom, #fff7c3, #ffd700)",
          }}
        >
          {/* TOP ROW = IMAGE + NAME */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "30px",
            }}
          >
            {/* IMAGE */}
            <img
              src={Img2}
              alt="profile"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "4px solid black",
                background: "white",
              }}
            />

            {/* NAME */}
            <h2
              style={{
                fontWeight: "800",
                fontSize: "40px",
                margin: 0,
                textShadow: "3px 3px 8px rgba(0,0,0,0.3)",
              }}
            >
              Rev
            </h2>
          </div>

          {/* DESCRIPTION */}
          <p
            style={{
              marginTop: "30px",
              fontSize: "18px",
              fontWeight: 600,
              textAlign: "center",
              lineHeight: "1.6",
            }}
          >
            Finding the perfect property doesn’t have to be a daunting task.
            At Sonagiri, we make the buying process straightforward and
            stress-free. Our expert team listens to your needs, budget, and
            preferences to provide you with a curated list of properties that
            match your goals. We help with everything from property searches
            to paperwork, ensuring a smooth and efficient transaction.
          </p>
        </div>
      </div>
    </>
  )
}

export default testimonial