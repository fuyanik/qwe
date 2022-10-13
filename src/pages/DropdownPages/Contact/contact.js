import React from 'react'
import Navbar from "../../../homeComponents/1.Navbar/navbar";
import UpsideFooter from '../components/upsideFooter';
import HumanErrorImage from "./images/HumanErrorImage.png"
import HumanErrorAudio from "./images/HumanErrorAudio.png"

import Footer from "../../../homeComponents/11.Footer/footer";


const Contact = () => {
  
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
                           
                           
                            <h5>Have questions? We have answers.</h5>

                            <div className='normal-text' style={{gap:"13px"}} >

                              <t>Visit <span>F.A.Q</span></t>
                              <t style={{color:"rgb(148, 148, 148)", fontSize:"16px"}}>Drop us an email. We will get back to you in 10 minutes. </t>
                             
                              <t><span>hello@vitamu.com</span></t>
                              <t style={{color:"rgb(148, 148, 148)", fontSize:"16px"}}> In a rush? Give us a call</t>
                             
                              <t><span>+1 646 820 1932</span></t>
                              <t style={{color:"rgb(148, 148, 148)", fontSize:"16px"}}> How about a visit? </t>

                              <t><span>33 Irving Pl, New York, NY 10003</span></t>
                             


                          </div>


                     </div>

                        <img src={HumanErrorImage} className="human-error-main-header-right"/> 
                          
                 </div>
               
                 
            
             
            <div style={{marginLeft:"120px"}}><Footer/></div>
              
          </div> 
       </div>
       </>
  )
}

export default Contact;