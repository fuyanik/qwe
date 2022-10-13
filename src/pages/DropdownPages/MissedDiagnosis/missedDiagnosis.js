import React from 'react'
import Navbar from "../../../homeComponents/1.Navbar/navbar";

import HumanErrorImage from "./images/HumanErrorImage.png"
import HumanErrorAudio from "./images/HumanErrorAudio.png"

import Footer from "../../../homeComponents/11.Footer/footer";


const MissedDiagnosis = () => {
  
  return (
      <> 
      <Navbar
      mobileMenuText={"Menu"}
      mobileMenuTo={"/mobileNavMenu"}
      />
      <div className="human-error">
          <div className="human-error-main">
              
                 <div className="human-error-main-header">

                        <div className="human-error-main-header-left">
                            <p> Must-read </p>
                            <h5>Overall, 10% of breast cancer cases are <h2>missed</h2> on a single mammogram screening.</h5>
                            <p>4 min read · Audio version is also available.</p>
                            <img src={HumanErrorAudio}  className="human-error-main-header-left-audio"/>
                        </div>

                        <img src={HumanErrorImage} className="human-error-main-header-right"/> 
                          
                  </div>

                  <div className="human-error-main-hero"> 

                   
                     {/* Text area 1 */}
                    <div className="human-error-main-hero-texts">
                     
                       <h2>What is a missed diagnosis? </h2>
                       <p>A missed diagnosis, also known as a failure to diagnose, occurs when a doctor fails to identify a particular medical condition or illness at the time that they are presented with it. </p>
                       <p>For example, a person might go to a doctor because they feel their heart and mind are suddenly and inexplicably racing. The doctor, in response, assuming that it is most likely a panic attack, may decide to do nothing and wait to see if the situation passes. If the person, in this example, is experiencing atrial fibrillation, then the doctor has missed the diagnosis. </p>                      
                       <p>According to the American Public Health Association, every year in the United States the number of missed diagnosis cases is estimated to exceed 1.2 million. In most cases, despite the misdiagnosis, fatalities and high risk issues will not occur. However, in the case of cancer of any kind, a missed diagnosis is a critical problem which causes late discovery, late treatment and associated economic and psychological costs. </p> 
                    </div>

                 
                 

                  
                   
                    {/* Text area 2 */}
                

                      {/* Text area 3 */}


                      <div 
                     
                      className="human-error-main-hero-texts">
                     
                     <h2>Breast Cancer False Negatives </h2>
                      <p>A missed diagnosis is identified as a false negative in which a patient already has an illness but their doctor misses it and thinks there is nothing to worry about. In scientific terms, the patient is identified as illness-negative, despite this being incorrect. </p>
                      <p>In the case of breast cancer, a false negative is often associated with a) human error of radiologists; b) presence of a dense breast; and c) technical restrictions in medical screening (for example a low quality mammogram image). </p>
                      <p>In relation to mammogram screening and interpretation, it is estimated that 10% of breast cancer cases are subjected to a false-negative diagnosis, which means that 1 in every 10 breast cancer patients are sent back to their homes having been told that they have a fully healthy breast. In reality, they already have breast cancer which their doctor has missed. This falls within the acceptable margin of error in the healthcare system, as we explained in detail in the human error section.

</p>
                      <p>Although over 350,000 women are diagnosed with breast cancer in the United States every year, it is estimated that there are still over 20,000 women’s breast cancer cases which are being missed during mammogram screenings. As we set out below, the cost of a missed diagnosis is huge to the individual concerned. The longer the cancer goes undiagnosed, the greater the issues the individual will face. </p>
                      <p>Imagine a woman has stage 2 breast cancer which is missed on an annual mammogram screening in July 2020. If she is lucky, her cancer will be found in the next annual screening in 2021. However, during the one-year period that her cancer goes un-diagnosed:</p>
                      <p>However, the fact that misdiagnoses are often caused by human error means that these consequences are preventable. </p>
                      </div>


                          {/* Text area 4 */}

                          <div  className="human-error-main-hero-texts" >
                              <h2>Taking Action</h2>
                              <p>Although most of us can’t believe that we could be one of the people whose breast cancer is missed, misdiagnosis is a real problem. Naturally, we tend to believe that we are lucky enough to be diagnosed correctly. Unfortunately, this is not always the case. .</p>
                              <p>Fortunately, we are able to help. We can recheck your mammogram using two radiologists assisted by our artificial intelligence to make sure that if you have breast cancer, it will not be missed because of human error. </p>

                              
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

                          <Footer/>
                          
                             



                      



                  


                  </div>
                     
              
          </div> 
       </div>
       </>
  )
}

export default MissedDiagnosis;