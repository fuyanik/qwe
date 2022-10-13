import "./hero.css"
import React from 'react';
import heroImage from './heroImage.png'
import { useState } from "react";
import BiRadsDropdown from "../BiRadsDropdown/biRadsDropdown";
import gV from "../../gV";



// <Link style={{  textDecoration: "none",}} to="/form">  </Link> 




const Hero = () => { 

const [isHover, setIsHover] = useState(false);

return (
  <div className="Hero">
    <div className="hero-main">
      
      <div className="main-text">
        <div className="main-text-header"> 
        <h3> We recheckov.</h3>
          <div className="fadeIn-hero">
            <h3><span>mammograms</span>.</h3>
            <h3><span>ultrasounds</span>.</h3>
            <h3><span>breast</span> MRIs.</h3>
         </div>
        </div>

        <p  >
          {" "}
          Every year in the United States, radiologists miss more than 40,000
          breast cancer cases in women as a result of human error.{" "}
        </p>

        <p>
          {" "}
          In less than 24 hours, our checks will ensure that you will not be one
          of these missed cases.
        </p>
      </div>

      {isHover ? (

         <BiRadsDropdown
          top={`${gV.mq.matches && "50%"}`}
          left={`${gV.mq.matches && "5%"}`}
         onMouseLeave={() => {setIsHover(false)}}
         />


      ) : (
        <a
          onMouseMove={() => {
            setIsHover(true);
          }}
          className="button-2"
          href="../FormPage/index.html"
        >
          <span className="buttonText-2"> Get Started</span>
          <span className="line-2">|</span>
          <span className="arrow-2">➔</span>
        </a>
      )}

      <img src={heroImage} className="heroImage" />
    </div>

    <img src="https://i.im.ge/2022/09/08/OkkwTK.heroGirl.jpg" className="girl"/>
  </div>
);

}

export default Hero;