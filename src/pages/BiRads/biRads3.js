import React from 'react'
import "./biRads.css"
import { Link } from 'react-router-dom'
import Navbar from '../../homeComponents/1.Navbar/navbar'
import SomeQuestion from './components/someQuestion'
import Footer from '../../homeComponents/11.Footer/footer'
import MobileFooter from '../../homeComponents/22.MobileFooter/mobileFooter'
import gV from '../../gV'

const BiRads3 = () => {

  var mq = window.matchMedia( "(max-width: 768px)" );

  return (

    <>
      <Navbar mobileMenuText={'Menu'} mobileMenuTo ={"/mobileNavMenu"} />
      
      
      

      <div onClick={()=>{gV.biRads = 3;}}  className='bi-rads__footer'>

       <Link style={{  textDecoration: "none"}} to="/form">
         <div className='bi-rads__footer__button'>
             <p>Get Started</p>
             <span className="line">|</span>
             <span className="arrow">➔</span>
            
         </div>
       </Link>
          
      </div>
    
      <div className='bi-rads'>
  
        <div className='bi-rads__header'>
          <p className='accordions-yellow-button'> We recheck mammograms/ultrasounds. </p>
          <p style={{fontSize:"32px", width:"100%", fontFamily:"Avenir-Roman"}} className='normal-text bi-rads__header__text'>Got a Birads-3 assessment on your breast screening?</p>
           <p className='normal-text bi-rads__header__text2'>You have questions that brought you here, and we have answers. </p>
        </div>
  
        <div className='bi-rads__main'>
  
  
        </div>
  
         <div style={{width:"100%"}} className='bi-rads__main normal-text'>
  
           <p><span style={{letterSpacing:"-0.6px"}}>Book definition first. </span></p>
         
             <p>If you receive a Birads 3 score there is a very low (no more than 2%) chance that the radiologist has identified something on your mammogram/ultrasound that could be breast cancer. However, since the finding has not been proven to be benign, it is sensible to be extra cautious and monitor whether the area in question does change over time.</p>
             <p>In these circumstances, you are likely to need a follow-up consultation with repeat imaging within 6 to 12 months and regularly after that until the finding is known to be stable (this usually takes at least 2 years). This approach helps avoid unnecessary biopsies, while still allowing for early diagnosis if the area does change over time.</p>

             <p><span style={{letterSpacing:"-0.6px"}}>There is a problem here </span></p>
             <p>However, there is a <span>human error risk</span> present, as always. Your mammogram, ultrasound, or breast MRI is evaluated by a single radiologist. The problem is that radiologists, even the most experienced ones, miss <span>12% of breast cancer cases because they are human beings.</span> The root cause of this problem varies, including heavy workload, lack of expertise in breast cancer detection, and uniqueness of cancer cells and tissues. </p>
             <p>If there are some suspicious areas in your breast and your radiologist missed, then that mass will be detected at least one year later. </p>
             

           <p><span>How we help.</span></p>
           <p>At Vitamu, <span>we recheck your mammograms, ultrasounds, and breast MRIs to ensure you are breast cancer free.</span> Once you get started, two of our radiologists will evaluate your medical images separately with the help of our artificial intelligence. Suppose a red flag (i.e., a potential case of cancer) is reported by either of these radiologists or by our artificial intelligence, we will arrange for you to have a physical examination at one of our partner locations, free of charge</p>
           <p>If nothing concerning is found during the review of your mammograms/ultrasounds, we will inform you that you are breast cancer free. <span>The whole process will take just 24 hours</span> from when we receive the copy of your mammogram/ultrasound.</p>
           <p>You will <span>get a detailed imaging report with clear explanations</span> in either case. </p>
             <p style={{marginLeft:"28px", color: "rgb(28, 29, 115)"}}><span style={{ color: "rgb(28, 29, 115)"}}>Quick fact:</span> In the last 90 days, we found 66 cancer cases among women who were assigned Birads 1 at their initial report. </p>
           <p>All our radiologists are U.S. board certified and have degrees from top-tier schools in the United States. <span>A recheck costs $120 and is as low as $20 if you have an active insurance plan. </span></p>
           <p>Now, let's recheck your mammogram/ultrasound.</p>
           
           <Link  style={{  textDecoration: "none",}} to="/form"> 
                      <a onClick={()=>{gV.biRads = "3"; gV.p = 0}}  style={{width:"258px",height:"46px"}} className="button"  >
                        <t style={{fontSize:"17px"}} className="buttonText"> Recheck Today</t>
                        <t style={{fontSize:"25px", fontWeigh:"700", marginTop:"5px"}} className="line">|</t>
                        <t className="arrow">➔</t>
                      </a>  
                </Link>
             
        
        
         </div>

         <SomeQuestion/>
        
      </div>
   
      {mq.matches ? <MobileFooter/> : <Footer marginTop={"-40px"}/>}

   
   
    </>
  )
}

export default BiRads3