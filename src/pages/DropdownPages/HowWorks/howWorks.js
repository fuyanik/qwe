import React from 'react'
import Navbar from "../../../homeComponents/1.Navbar/navbar";
import HumanErrorImage from "../HumanError/images/HumanErrorImage.png"
import HumanErrorAudio from "../HumanError/images/HumanErrorAudio.png"
import UpsideFooter from '../components/upsideFooter';
import Footer from '../../../homeComponents/11.Footer/footer';

const HowWorks = () => {
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
              <p className='accordions-yellow-button' > A hassle-free experience </p>
              <h5>
              Three easy steps and peace of mind. 2 minutes to start, 24 hours to get the results
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
                 <p className='big-normal-text'>#1 Fill out the recheck form.</p>
                 <p style={{width:"65%", }}>First we will need a couple of details about you and your mammograms/ultrasounds/MRIs. Don’t have a copy of your latest medical images to hand? No problem - you can send us a CD or USB stick containing the mammogram or (with your permission) we can acquire your images directly from the medical centre which carried it out.</p>
             </div>
        
             <div className='normal-text' style={{ paddingBottom: "30px",width:"88%", borderBottom:"1px solid rgba(128, 128, 128, 0.401)"}} >
                 <p className='big-normal-text'>#2 We recheck your mammogram.</p>
                 <p style={{width:"65%", }}>Two of our <span>radiologists</span> will do the recheck using our <span>artificial intelligence.</span> This will ensure that there is close to a 0% (0.00009% to be precise) chance of a missed diagnosis. Our radiology team is all US based and officially certified. Rest assured, your medical images are in good hands.</p>
             </div>
        
             <div className='normal-text' style={{ paddingBottom: "30px",width:"88%", borderBottom:"1px solid rgba(128, 128, 128, 0.401)"}} >
                 <p className='big-normal-text'>#3 Get the result in 24 hours. </p>
                 <p style={{width:"65%", }}>The final report will be signed by our radiologists. If it is all clear, you will be told this in the report. If there is a red flag indicating a further screening is needed, you will receive a report detailing this for you to give to your doctor.</p>
             </div>
        
        
          </div>
        

            <UpsideFooter/>
            <div style={{marginLeft:"120px"}}><Footer/></div>

        
        
        </div>
      </div>




    </>
  );
}

export default HowWorks





