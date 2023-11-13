import React, { useState } from "react";
import "./global.css";
import { Green } from "./components/Green/Green";
import { Blue } from "./components/Blue/Blue";
import { hasUnreliableEmptyValue } from "@testing-library/user-event/dist/utils";

function App() {

   const classes = {
    purple: "card__wrapper",
    green: "card__wrapper__green",
    blue: "card__wrapper__blue",
  };

  const [change, setChange] = useState(false);

  // const [color, setColor] = useState(classes.blue)
 

  const handleChange = () => {
    setChange({
      imgSrc1:
        "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww",
      className1: "roller__active",
      className2: "roller",
      className3: "roller",
    });
    
  }
    const handleChange2 = () => {
      setChange({
        imgSrc2:
          "https://images.unsplash.com/photo-1494253109108-2e30c049369b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D",
        className2: "roller__active",
        className1: "roller",
        className3: "roller",
      });
    };
      const handleChange3 = () => {
        setChange({
          imgSrc3:
            "https://media.gettyimages.com/id/740523457/photo/banana-painted-white-on-yellow-background.webp?s=2048x2048&w=gi&k=20&c=F4o_uFP4ypvk-vWMkk5U566Aw5TzxFG_EBUdQdFqfaY=",
          className3: "roller__active",
          className1: "roller",
          className2: "roller",
        });
      };

  return (
    <>
      <div className="wrapper">
        <div onMouseEnter={handleChange} className="card__wrapper">
          <span className={change.className1}></span>{" "}
          <img src={change.imgSrc1} alt="" className="img1" />
          <img src={change.imgSrc2} alt="" className="img2" />
          <img src={change.imgSrc3} alt="" className="img3" />
        </div>
        <div onMouseEnter={handleChange2} className="card__wrapper">
          <span className={change.className2}></span>
        </div>
        <div onMouseEnter={handleChange3} className="card__wrapper">
          <span className={change.className3}></span>
        </div>
      </div>
    </>
  );
}

export default App;
