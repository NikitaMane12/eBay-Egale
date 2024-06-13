// src/pages/Home.tsx

import React from "react";
import "./Home.css"; // Import the CSS file

const Home: React.FC = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div
          style={{
            backgroundImage: `url("https://convextech.com/wp-content/uploads/2022/01/1-min-3.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "50%",
            height: "800px",
            marginTop: "70px",
          }}
        >
          <div
            style={{
              background: "white",
              marginLeft: "650px",
              height: "770px",
              marginTop: "30px",
              marginRight: "0px",
            }}
          >
            <h5
              className="animate-left"
              style={{
                paddingTop: "80px",
                paddingLeft: "40px",
                whiteSpace: "nowrap",
              }}
            >
              CONVEXTECH INC. IS A
            </h5>
            <h1
              className="animate-right"
              style={{
                paddingTop: "20px",
                paddingLeft: "40px",
                fontSize: "80px",
                whiteSpace: "nowrap",
              }}
            >
              Specialist<br></br> staffing, recruiting,<br></br> and consulting
              <br></br>
              company
            </h1>
            <p
              className="animate-bottom"
              style={{
                paddingTop: "40px",
                paddingLeft: "40px",
                fontSize: "20px",
                whiteSpace: "nowrap",
              }}
            >
              Works in the engineering, healthcare, non-IT, and IT sectors. We
              <br></br>
              are also involved in quality assurance, software development,
              <br></br> and SAP solutions.
            </p>
            <a
              href="#"
              className="btn btn-primary btn-lg disabled"
              role="button"
              aria-disabled="true"
              style={{ marginLeft: "40px", marginTop: "20px" }}
            >
              GetStarted
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          height: "800px",
          display: "flex",
        }}
      >
        <div>
          <img
            src="https://convextech.com/wp-content/uploads/2021/07/3.jpg"
            style={{
              borderRadius: "50%",
              height: "600px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              marginLeft: "120px",
              marginTop: "120px",
            }}
          />
        </div>
        <div>
          <h5
            style={{ marginTop: "250px", marginLeft: "80px", color: "#00006c" }}
          >
            DISCOVER OUR COMPANY
          </h5>
          <h1
            style={{ marginTop: "30px", marginLeft: "80px", fontSize: "50px" }}
          >
            Quick Hire
          </h1>
          <p
            style={{ marginTop: "30px", marginLeft: "80px", fontSize: "20px" }}
          >
            We Have developed a unique method specifically designed to help our
            <br></br>
            clients find candidates quickly for available positions for your
            pressing <br></br>needs in staffing and hiring.
          </p>
          <a
            href="#"
            className="btn btn-primary btn-lg disabled"
            role="button"
            aria-disabled="true"
            style={{
              marginLeft: "70px",
              marginTop: "20px",
              background: "grey",
            }}
          >
            Click Here For Quick Hire
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
