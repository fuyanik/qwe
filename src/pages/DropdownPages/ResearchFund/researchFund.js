import React from 'react'
import Navbar from "../../../homeComponents/1.Navbar/navbar";
import UpsideFooter from '../components/upsideFooter';
import HumanErrorImage from "./images/HumanErrorImage.png"
import HumanErrorAudio from "./images/HumanErrorAudio.png"

import Footer from "../../../homeComponents/11.Footer/footer";


const ResearchFund = () => {
  
  return (
      <> 
      <Navbar
      mobileMenuText={"Menu"}
      mobileMenuTo={"/mobileNavMenu"}
      />
      <div className="human-error">
          <div className="human-error-main">
              
                 <div style={{width:"100%"}} className="human-error-main-header">

                        <div className="human-error-main-header-left">
                            <p> Our Story </p>
                            <h5>We support independent researchers, entrepreneurs, start-ups and NGOs.</h5>
                            <p>4 min read · Audio version is also available.</p>
                            <img src={HumanErrorAudio}  className="human-error-main-header-left-audio"/>
                        </div>

                        <img src={HumanErrorImage} className="human-error-main-header-right"/> 
                          
                 </div>
                 <div className='normal-text' style={{gap:"20px"}} >
              
       
                 
              <p style={{marginTop:"30px"}} className='big-normal-text'>What do we offer?   </p>
              <p>Two things, simply.</p>
              <p style={{marginLeft:"30px"}}>• Complimentary financial support <span>up to $100.000 per project,</span> </p>
              <p style={{marginLeft:"30px"}}>• <span>Direct access to our knowledge base,</span> including unlimited access to our labs, research database, radiologist/hospital network. </p>
              <p> In 2022, we aim to support 50 projects, in addition to 76 others we supported in the past three years. </p>
             
              <p style={{marginTop:"30px"}} className='big-normal-text'>What is needed to be qualified? </p>
              <p>Practically, we do not like formal requirements when there is passion, motivation, and dedication towards a good cause, especially for breast cancer treatment and diagnosis.</p>
              <p>What we all want is a project that focuses on technological breast cancer diagnosis and/or treatment, and an individual/group who need either financial or knowledge support.</p>
              <p>As Vitamu, we have a promise to donate 5% of our revenues to Research Fund, which is the basis of our financial support capabilities. On knowledge side, we cooperate with leading universities and healthcare institutions to move our contribution to women’s lives, and we are eager to share our knowledge base with your projects.</p>
              <p>All you have to do is to talk about your project, current phase of research/development, and main difficulties you face on processing. That’s it. </p>
            
              <UpsideFooter/>
              <div style={{marginLeft:"120px"}}><Footer/></div>
            
                   
              </div>
          </div> 
       </div>
       </>
  )
}

export default ResearchFund;