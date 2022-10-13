import React from 'react'
import Navbar from "../../../homeComponents/1.Navbar/navbar";
import HumanErrorImage from "../HumanError/images/HumanErrorImage.png"
import HumanErrorAudio from "../HumanError/images/HumanErrorAudio.png"
import UpsideFooter from '../components/upsideFooter';
import Footer from '../../../homeComponents/11.Footer/footer';

const WhatNext = () => {
  return (
    <>
      <Navbar mobileMenuText={"Menu"} mobileMenuTo={"/mobileNavMenu"} />
      <div className="human-error">
        <div className="human-error-main">
         
         
          <div className="human-error-main-header">
            <div
              style={{ width: "68%" }}
              className="human-error-main-header-left"
            >
              <p className='accordions-yellow-button'> What is Next? </p>
              <h5>
              You have received your recheck results. Here is what to do next and how to understand your report.              </h5>
              <p>14 min read · Audio version is also available.</p>
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
        
          <div className='normal-text' style={{gap:"20px"}} >
              
       
                 
                 <p style={{marginTop:"30px"}} className='big-normal-text'>Understanding the Recheck Report</p>
                 <p>Your recheck report is generated for two purposes.</p>
                 <p>First, we want it to be clear whether you have a fully healthy breast or whether there are some issues that need further investigation or diagnosis. If you see “Clear” at the top our your recheck report then you have a fully healthy breast and nothing to worry about. If you see “Immediate control required” you must make an appointment with your doctor and show them the recheck report.</p>
                 <p>Second, our reports are generated to assist physicians/radiologists. If there is a red flag requiring you to make a further appointment with your doctor, your doctor will know where to check and what to do. This means that the technical parts on your report are there not for you, but for your doctor. Since we are not the ones who will make the further diagnosis, we will provide everything we have found on your recheck report for your doctors to review. </p>
                 

                 <p style={{marginTop:"30px"}} className='big-normal-text'>BI-RADS Scores and Scenarios</p>
                 <p>BI-RADS is a classification tool originally designed for mammograms. It consists of seven categories. We, as a part of the American healthcare system, use BI-RADS categorisation on our recheck processes and reports.</p>
                  <p>The BI-RADS is included on your mammogram and each category has separate meanings and required actions (if necessary).</p>
                  <p><span>BI-RADS 0:</span> your mammogram is incomplete. This means that in order to make a diagnosis, either your previous mammogram images need to be obtained for comparison to the latest mammogram or new breast images/higher quality films are required. </p>
                  <p><span>Recheck Summary: Immediate Control Required</span></p>

                 <p style={{marginTop:"30px"}}><span>BI-RADS 1: </span>there is no benign or malign finding, so you are breast cancer free. You should continue routine screening once every 6 months/one year depending on your age</p>
                  <p><span>Recheck Summary: Clear</span></p>
                

                 <p style={{marginTop:"30px"}} ><span>BI-RADS 2: </span>there is benign finding but not a malign finding, so you are breast cancer free. You should continue routine screening once every 6 months/one year depending on your age. </p>
                 <p><span>Recheck Summary: Clear</span></p>
                
                 <p style={{marginTop:"30px"}} ><span>BI-RADS 3:</span> there is a finding which is probably benign. This should not be a cause for concern. However, you should arrange a short-term follow-up mammogram to make sure you remain breast cancer free</p>
                 <p><span>Recheck Summary: Clear-Short Follow-up Recommended</span></p>
               
                 <p style={{marginTop:"30px"}} ><span>BI-RADS 4:</span> there is a suspicious abnormality (4A: Low, 4B: Intermediate, 4C: Moderate suspicious) requiring further examination, as your mammogram alone cannot show whether this abnormality is breast cancer or not. If you have been sent back to your home without any further examination other than your mammogram screening, you should arrange a further screening. A biopsy is often required for a final decision.</p>
                 <p><span>Recheck Summary: Immediate Control Required</span></p>

                 <p style={{marginTop:"30px"}} ><span>BI-RADS 5:</span> there is a high likelihood of a malignancy and a biopsy or surgery should be performed. If you have not already had a biopsy or surgery indicating that you are breast cancer-free you should pay an visit to your doctor or arrange a new biopsy/ surgery.</p>
                 <p><span>Recheck Summary: Immediate Control Required</span></p>

                 <p style={{marginTop:"30px"}} ><span>BI-RADS 6: </span>there is definitely a known-malignancy and you should visit your doctor for advice on the appropriate action which should be taken. </p>
                 <p><span>Recheck Summary: Immediate Control Required</span></p>

                 

        
          </div>
        

            <UpsideFooter/>
            <div style={{marginLeft:"120px"}}><Footer/></div>

        
        
        </div>
      </div>




    </>
  );
}

export default WhatNext;





