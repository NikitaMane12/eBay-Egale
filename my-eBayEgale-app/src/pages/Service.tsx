import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa"; // Ensure you have this library installed
import axios from "axios";
import { Post } from "../types/srvices"; // Add this import to define the Post type

const Service: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
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
            zIndex: 2, // Ensure the content is above the overlay
            color: "white",
            textAlign: "center",
          }}
        >
          <h1 style={{ color: "white" }}>Services</h1>
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
      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: "40px",
          }}
        >
          {posts.map((Service) => (
            <div
              key={Service.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                width: "300px",
                padding: "16px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "white",
              }}
            >
              <img
                src={Service.image}
                alt={Service.name}
                style={{
                  width: "25%",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              />
              <h5 style={{ color: "#333" }}>{Service.name}</h5>
              <p>{Service.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
