import React from "react";
import Jumbotron from "../Jumbotron";
function HomePage({renderResources}) {
  
    return (
      <div style={style.main}>
        <Jumbotron />
        <div style={style.resourceList}>
          {renderResources()}
        </div>
      </div>
    );
  
  }

  const style = {
    main: {
      display: "flex",
      flexDirection: "column",
    },
    resourceList: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
      padding: "5rem",
      height: "100vh"
    }
  }
export default HomePage;
