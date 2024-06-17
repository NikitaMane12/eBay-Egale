import { Flex } from "@chakra-ui/react"


export const CirclePart = () => {
  return (
    <div
    style={{

      width:"100%",
      height: "700px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      

    }}
  >
      <Flex>
    <div style={{ alignItems: "center", 
        width:"500",
         height:"500px",
          borderRadius:"50%",
          border:"2px solid blue",
          padding:"25px",
         }}>
  
        <img
          src="https://convextech.com/wp-content/uploads/2021/07/3.jpg"
          style={{
            borderRadius: "50%",
            height: "450px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
           
          }}
        />
    </div>
    <div style={{ textAlign: "left", marginTop: "100px", marginLeft:"130px" }}>
      <h6 style={{ color: "#00006c" }}>DISCOVER OUR COMPANY</h6>
      <h5 style={{ fontSize: "50px" }}>Quick Hire</h5>
      <p style={{ fontSize: "16px" }}>
        We have developed a unique method specifically designed to help our
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
          background: "grey",
        }}
      >
        Click Here For Quick Hire
      </a>
    </div>
    </Flex>  
</div >
  )
}
