import { FaHome } from "react-icons/fa";
import { ThirdCol } from "../componets/ThirdCol";
import { FourCards } from "../componets/FourCards";
import { ReviewCards } from "../componets/ReviewCards";

const WhyChooseUs = () => {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(https://convextech.com/wp-content/uploads/2021/07/6-1.jpg)",
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

      <ThirdCol />
      <FourCards />
      <ReviewCards />
    </>
  );
};

export default WhyChooseUs;
