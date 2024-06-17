import React from "react";
import "./Home.css";
import CardList from "../componets/Cards";
import { FourCards } from "../componets/FourCards";
import { ThirdCol } from "../componets/ThirdCol";
import Profession from "../componets/Professions";
import { ReviewCards } from "../componets/ReviewCards";
import { CirclePart } from "../componets/CirclePart";
import { Flex } from "@chakra-ui/react";


const Home: React.FC = () => {
  return (
    <>
      <div style={{width:"100%", display: "flex", justifyContent: "center",}}>
       <Flex mr={600}>
        <div
          style={{
            backgroundImage: `url("https://convextech.com/wp-content/uploads/2022/01/1-min-3.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "600px",
            height: "500px",
            marginTop: "70px",
            position: "relative",

          }}
        >
          <div
            style={{
              background: "white",
              position: "absolute",
              right: "-550px",
           
              height: "500px",
            }}
          >
            <h5
              className="animate-left"
              style={{
                paddingTop: "80px",
                whiteSpace: "nowrap",
              }}
            >
              CONVEXTECH INC. IS A
            </h5>
            <h1
              className="animate-right"
              style={{
                paddingTop: "0px",
               
                fontSize: "50px",
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
                paddingTop: "30px",
               
                fontSize: "17px",
                whiteSpace: "nowrap",
              }}
            >
              Works in the engineering, healthcare, non-IT, and IT sectors. We
              <br></br>
              are also involved in quality assurance, software development,
              <br></br> and SAP solutions.
            </p>
          
          </div>
        </div>
        </Flex>
      </div>
      
     
      <div style={{ justifyContent: "center" }}>
        <CirclePart />
      </div>
   
      <div style={{ justifyContent: "center" }}>
        <CardList />
      </div>
      <div style={{ justifyContent: "center" }}>
        <FourCards />
      </div>
      <div style={{  justifyContent: "center" }}>
        <ThirdCol />
      </div>
      <div style={{ justifyContent: "center" }}>
        <Profession />
      </div>
      <div style={{ justifyContent: "center" }}>
        <ReviewCards />
      </div>
    </>
  );
};

export default Home;
