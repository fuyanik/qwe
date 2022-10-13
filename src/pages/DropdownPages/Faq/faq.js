import React from 'react'
import Navbar from "../../../homeComponents/1.Navbar/navbar";
import HumanErrorImage from "./images/HumanErrorImage.png"
import HumanErrorAudio from "./images/HumanErrorAudio.png"

import Footer from "../../../homeComponents/11.Footer/footer";

import AccordionRecheck from './accordionRecheck';
import AccordionRedFlags from './accordionRedFlags';
import AccordionPrivacy from './accordionPrivacy';

const Faq = () => {
  return (
    <>
      <Navbar mobileMenuText={"Menu"} mobileMenuTo={"/mobileNavMenu"} />
      <div className="human-error">
        <div className="human-error-main">
         
          <div className="human-error-main-header">
           
            <div
              style={{ width: "88%" }}
              className="human-error-main-header-left"
            >
              
              <h5 style={{alignSelf:"center",justifySelf:"center",margin:"auto"}}> Frequently Asked Questions  </h5>
             
            </div>
        
            <img
              src={HumanErrorImage}
              className="human-error-main-header-right"
              alt=''
            />
          </div>


          <div style={{display: "flex", flexDirection:"column", gap:"30px"}}>

            <p style={{fontFamily:"Avenir Roman", fontSize:"32px", fontWeight:"500"}}>Recheck </p>
            <AccordionRecheck/>

            <p style={{fontFamily:"Avenir Roman", fontSize:"32px", fontWeight:"500"}}>Red-Flags </p>
            <AccordionRedFlags/>
           
            <p style={{fontFamily:"Avenir Roman", fontSize:"32px", fontWeight:"500"}}>Privacy </p>
            <AccordionPrivacy/>


          </div>
        
        

                         <div className="upside-footer">
                                   <p></p>

                                   <a className="button">
                                     <span className="buttonText"> Get Started</span>
                                     <span className="line">|</span>
                                     <span className="arrow">➔</span>
                                   </a>  

                                   <a className="button-human">
                                     <span className="buttonText-human"> Read Stories</span>
                                     <span className="line-human">|</span>
                                     <span className="arrow-human">➔</span>
                                   </a>  

                             </div>

                            <div style={{marginLeft:"80px"}}> <Footer/></div>
        
        
        </div>
      </div>




    </>
  );
}


export default Faq;