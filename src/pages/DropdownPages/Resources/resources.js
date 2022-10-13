import React from 'react'
import Navbar from "../../../homeComponents/1.Navbar/navbar";
import HumanErrorImage from "./images/HumanErrorImage.png"
import HumanErrorAudio from "./images/HumanErrorAudio.png"
import AccordionCancer from './accordionCancer';
import AccordionDiagnosis from './accordionDiagnosis';
import AccordionStages from './accordionStage';
import Footer from "../../../homeComponents/11.Footer/footer";
import AccordionTypes from './accordionTypes';
import AccordionTreatment from './accordionTreatment';
import AccordionMyths from './accordionMyths';
import AccordionQuestions from './accordionQuestions';

const Resources = () => {
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
              <p>Must-read</p>
              <h5>
              It is possible to fight against breast cancer, if you are equipped with the <h2>knowledge.</h2>
              </h5>
              <p>55 min read · Audio version is also available.</p>
              <img
                src={HumanErrorAudio}
                className="human-error-main-header-left-audio"
                alt=''
              />
            </div>
            <img
              src={HumanErrorImage}
              className="human-error-main-header-right"
              alt=''
            />
          </div>

          <div style={{display: "flex", flexDirection:"column", gap:"30px"}}>

            <p style={{fontFamily:"Avenir Roman", fontSize:"32px", fontWeight:"500"}}>Introduction to Breast Cancer </p>
            <AccordionCancer/>

            <p style={{fontFamily:"Avenir Roman", fontSize:"32px", fontWeight:"500"}}>Diagnosis </p>
            <AccordionDiagnosis/>
           
            <p style={{fontFamily:"Avenir Roman", fontSize:"32px", fontWeight:"500"}}>Stages </p>
            <AccordionStages/>

            <p style={{fontFamily:"Avenir Roman", fontSize:"32px", fontWeight:"500"}}>Types </p>
            <AccordionTypes/>

            <p style={{fontFamily:"Avenir Roman", fontSize:"32px", fontWeight:"500"}}>Treatment </p>
            <AccordionTreatment/>

            <p style={{fontFamily:"Avenir Roman", fontSize:"32px", fontWeight:"500"}}>Myths </p>
            <AccordionMyths/>

            <p style={{fontFamily:"Avenir Roman", fontSize:"32px", fontWeight:"500"}}>Common Questions </p>
            <AccordionQuestions/>

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


export default Resources;