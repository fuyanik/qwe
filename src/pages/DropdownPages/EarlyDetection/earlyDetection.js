import React from 'react'

import Navbar from "../../../homeComponents/1.Navbar/navbar";
import HumanErrorImage from "./images/HumanErrorImage.png"
import HumanErrorAudio from "./images/HumanErrorAudio.png"
import Footer from "../../../homeComponents/11.Footer/footer";
import EarlyAccordion from './earlyAccordion';


const EarlyDetection = () => {
  return (
    <> 
    <Navbar
    mobileMenuText={"Menu"}
    mobileMenuTo={"/mobileNavMenu"}
    />
    <div className="human-error">
        <div className="human-error-main">
            
               <div className="human-error-main-header">

                      <div style={{width: "68%"}} className="human-error-main-header-left">
                          <p> Must-read </p>
                          <h5> At any stage, <h2>early detection</h2> of breast cancer saves lives. Even a week matters.</h5>
                          <p>14 min read · Audio version is also available.</p>
                          <img src={HumanErrorAudio}  className="human-error-main-header-left-audio"/>
                      </div>
                      <img src={HumanErrorImage} className="human-error-main-header-right"/> 
                        
                </div>
                

                <p style={{width: "80%", lineHeight:"23px"}} className='dropdown-pages-text'>According to the American Cancer Society, <span>when breast cancer is detected early and is in the localised stage, the 5-year relative survival rate is 99%.</span> Early detection includes doing monthly breast self-exams and scheduling regular clinical breast exams and mammograms.</p>
                <p style={{marginTop:"20px"}} className='dropdown-pages-text'>On this page we provide you with everything you need to know about early detection from symptoms and signs to mammogram screening. </p>
                <div style={{marginTop:" 55px"}}><EarlyAccordion/></div>
            
                <div style={{marginTop:"15px"}} className="upside-footer">
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


                             
 



               
                          <div style={{position:"relative", left: "15%"}}><Footer/></div>
 
               

                 
                 
                       
                   
            
        </div> 
     </div>
     </>
  )
}

export default EarlyDetection