import React from "react";
import image from "./image/matrix.jpeg"

const styles = {
  headerStyle: {
    color: "white",
    textAlign: "center",
    fontFamily: "Lateef, cursive",
    fontSize: "60px",
  }
};

function Home() {
  return (
  <div  style={{ backgroundImage: 'url(' + image + ')', backgroundSize: 'auto' }}>
   <h1 style= {styles.headerStyle}className="heading">Kevin Serrano</h1>

  </div>
)
};

export default Home;
