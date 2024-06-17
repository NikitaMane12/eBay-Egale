import React, { useEffect, useState } from "react";
import { FaHome, FaPhone } from "react-icons/fa";
import axios from "axios";
import { Post } from "../types/services";

const Service: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [counter1, setCounter1] = useState<number>(0);
  const [counter2, setCounter2] = useState<number>(0);
  const [counter3, setCounter3] = useState<number>(0);
  const [counter4, setCounter4] = useState<number>(0);

  useEffect(() => {
    axios
      .get<Post[]>("https://reactdata-6.onrender.com/Services")
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCounter1((prev) => (prev < 1000 ? prev + 10 : prev));
    }, 100);

    const interval2 = setInterval(() => {
      setCounter2((prev) => (prev < 500 ? prev + 5 : prev));
    }, 100);

    const interval3 = setInterval(() => {
      setCounter3((prev) => (prev < 1000 ? prev + 10 : prev));
    }, 100);

    const interval4 = setInterval(() => {
      setCounter4((prev) => (prev < 100 ? prev + 1 : prev));
    }, 100);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div>
        <div
          style={{
            backgroundImage:
              "url(https://convextech.com/wp-content/uploads/2021/07/7-2.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "600px",
            width: "100%",
            position: "relative",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1,
            }}
          ></div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              position: "relative",
              zIndex: 2,
              color: "white",
              textAlign: "center",
            }}
          >
            <h1 style={{ color: "white" }}>Complete Services</h1>
            <FaHome style={{ fontSize: "60px", marginTop: "20px" }} />
            <a
              href="/Home"
              style={{
                textDecoration: "none",
                fontSize: "30px",
                marginTop: "10px",
                color: "white",
              }}
            >
              Home/Pages
            </a>
          </div>
        </div>
        <div style={{ maxWidth: "100%", overflowX: "auto" }}>
          {posts.map(
            (post, index) =>
              index % 3 === 0 && (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    gap: "16px",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    marginTop: "40px",
                    flexWrap: "nowrap",
                    marginBottom: "20px",
                  }}
                >
                  {posts.slice(index, index + 3).map((Service) => (
                    <div
                      key={Service.id}
                      style={{
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        width: "300px",
                        padding: "16px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        backgroundColor: "white",
                        flex: "0 0 auto",
                      }}
                    >
                      <img
                        src={Service.image}
                        alt={Service.name}
                        style={{
                          width: "25%",
                          borderRadius: "8px",
                          height: "60px",
                          marginLeft: "90px",
                          marginBottom: "20px",
                        }}
                      />
                      <h5
                        style={{
                          color: "#333",
                          textAlign: "center",
                          fontSize: "20px",
                        }}
                      >
                        {Service.name}
                      </h5>
                      <p style={{ textAlign: "center", fontSize: "20px" }}>
                        {Service.title}
                      </p>
                    </div>
                  ))}
                </div>
              )
          )}
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <h4
            style={{
              marginLeft: "150px",
              marginTop: "100px",
              color: "#00006c",
            }}
          >
            Why Choose Us
          </h4>
          <h1 style={{ marginLeft: "150px", marginTop: "20px" }}>
            What we promise high quality<br></br> IT and NON IT Agency <br></br>
            Services
          </h1>
          <p
            style={{ marginLeft: "150px", marginTop: "20px", fontSize: "25px" }}
          >
            We deliver top-quality IT and Non-IT services tailored to your
            business needs. Our expert team ensures reliable, efficient
            solutions to drive your success. Partner with us for exceptional
            results.
          </p>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <FaPhone style={{ fontSize: "24px", marginRight: "8px" }} />
            <span style={{ fontSize: "20px" }}>+1234567890</span>
          </div>
        </div>
        <div>
          <img
            src="https://convextech.com/wp-content/uploads/2021/07/1.png"
            style={{ marginTop: "100px" }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "50px",
          fontSize: "50px",
          background: "#00006c",
          marginBottom: "20px",
          height: "300px",
          textAlign: "center",
          color: "white",
          font: "bold",
        }}
      >
        <div style={{ marginTop: "100px" }}>
          {counter1}+<h3>Specialists Hired</h3>
        </div>
        <div style={{ marginTop: "100px" }}>
          {counter2}+<h3>Clients Served</h3>
        </div>
        <div style={{ marginTop: "100px" }}>
          {counter3}+<h3>Positions Filled</h3>
        </div>
        <div style={{ marginTop: "100px" }}>
          {counter4}+<h3>Industry Experience</h3>
        </div>
      </div>
    </>
  );
};

export default Service;
