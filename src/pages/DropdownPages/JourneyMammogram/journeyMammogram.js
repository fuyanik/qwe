import React from 'react'
import Navbar from "../../../homeComponents/1.Navbar/navbar";
import HumanErrorImage from "../HumanError/images/HumanErrorImage.png"
import HumanErrorAudio from "../HumanError/images/HumanErrorAudio.png"
import UpsideFooter from '../components/upsideFooter';
import Footer from '../../../homeComponents/11.Footer/footer';

const JourneyMammogram = () => {
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
              <p className='accordions-yellow-button' > Our Technology </p>
              <h5>
              This page shows how a mammogram travels through our recheck process.
              </h5>
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
        
          <div className='normal-text' style={{gap:"30px"}} >
              
             <div className='normal-text' style={{ paddingBottom: "30px",width:"88%", borderBottom:"1px solid rgba(128, 128, 128, 0.401)"}} >
                 <p className='big-normal-text'>#1 Anonymizing the Mammogram</p>
                 <p style={{width:"65%", }}>Rule number one - your health data needs to remain private, so we anonymise your mammograms by deleting your name and other private data using specialist software. Once you upload or send your mammograms to us, the software removes all the private information stored on your digital files. In this way, no one (neither our radiologists nor any other employee at Vitamu) can see your name or any other personal information. We label each file using a digitally generated nickname which enable us to track the journey of your mammograms. </p>
             </div>
        
             <div className='normal-text' style={{ paddingBottom: "30px",width:"88%", borderBottom:"1px solid rgba(128, 128, 128, 0.401)"}} >
                 <p className='big-normal-text'>#2 Artificial Intelligence (AI) Recheck</p>
                 <p style={{width:"65%", }}>Your anonymised mammograms are sent to Amazon Web Services servers and our AI rechecks your mammograms identifying all benign and malign tissues, calcifications and other unusual breast complications. We call this the mapping process as our AI flags key areas which need to be specifically reviewed by our radiologists.     </p>
             </div>
        
             <div className='normal-text' style={{ paddingBottom: "30px",width:"88%", borderBottom:"1px solid rgba(128, 128, 128, 0.401)"}} >
                 <p className='big-normal-text'>#3 Radiologists do their job</p>
                 <p style={{width:"65%", }}>This is the part where we can successfully bring our artificial intelligence and radiologists together. First, two of our radiologists will examine your mammogram without knowing what the AI has found during its recheck. Once they have individually reported their findings and uploaded their reports, we will show them what the AI has found. Following this, they will report updated findings based on results provided by the artificial intelligence. At the end of the process, we have five reports: the AI-only generated report, two radiologist reports created by radiologist only reviews and two radiologist reports generated after our radiologists see the AI generated report.</p>
             </div>
        
             <div className='normal-text' style={{ paddingBottom: "30px",width:"88%", borderBottom:"1px solid rgba(128, 128, 128, 0.401)"}} >
                 <p className='big-normal-text'>#4 Comparing the results and final verdict</p>
                 <p style={{width:"65%", }}>This is the final stage where we compare all the reports on a digital platform. If there is a single report showing that you need further ultrasounds or a biopsy, we will warn you immediately. In this way we ensure that either you are completely healthy, or that you are aware that the report contains red flags and you should seek obtain a further diagnosis.</p>
             </div>
        
           
        
        
          </div>
        

            <UpsideFooter/>
            <div style={{marginLeft:"120px"}}><Footer/></div>

        
        
        </div>
      </div>




    </>
  );
}

export default JourneyMammogram;





