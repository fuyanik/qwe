import React from 'react'
import Navbar from '../../homeComponents/1.Navbar/navbar'
import "./biRads.css"
import { Link } from 'react-router-dom'
import SomeQuestion from './components/someQuestion'
import AccordionSomeQuestion from './components/accordionSomeQuesiton'
import MobileFooter from '../../homeComponents/22.MobileFooter/mobileFooter'
import Footer from '../../homeComponents/11.Footer/footer'
import gV from '../../gV'

const BiRads4 = () => {

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
     
     
      <div className='bi-rads4__background'></div>
    
        <div className='bi-rads4' >
       
             <div className='bi-rads4__header'>
              
               <p className='accordions-yellow-button'> We recheck mammograms/ultrasounds. </p>
               <p style={{fontSize:"32px", width:"130%", fontFamily:"Avenir-Roman", letterSpacing:"-0.5px"}} className='normal-text bi-rads__header__text bi-rads4__header__title'>Got a Bi-rads 4 assessment on your mammogram/ultrasound screening?</p>
               <p style={{width:"64%",}} className='bi-rads4__header__text '>Here is everything you need to know about it. Taking just two minutes to read the whole piece could change your life <span>entirely</span>. </p>

             </div>

             <div className='bi-rads4__main'>
              
               <div className='bi-rads4__main__left'>
                   <p>What does Bi-rads 4 mean?</p>
                   <p>If you receive a Birads 4 score there is a low yet significant chance that the radiologist has identified something on your mammogram/ultrasound that could be breast cancer. However, since the finding has not been proven to be benign, it is sensible to be extra cautious and monitor whether the area in question does change over time.</p>
                   <p>In these circumstances, you are likely to need a follow-up consultation with repeat imaging within 1 to 3 months and regularly after that until the finding is known to be stable (this usually takes at least 2 years). This approach helps avoid unnecessary biopsies, while still allowing for early diagnosis if the area does change over time.</p>

               </div>
               <div className='bi-rads4__main__right'>
                  <p>BIRADS SCALE</p>
                  <p>Birads 0 Additional imaging needed </p>
                  <p>Birads 1 Negative</p>
                  <p>Birads 2 Benign</p>
                  <p>Birads 3 Probably benign </p>
                  <p>Birads 4 Suspicious </p>
                  <p>Birads 5 Highly suspicious</p>
                  <p>Birads 6 Proven cancer</p>
               </div>
            
             </div>   


             <div className='bi-rads4__main'>
              
               <div className='bi-rads4__main__left'>
                   <p>The problem with Bi-rads 4 assessment</p>
                   <p>In the last month, more than 24 percent of our patients who had been assigned a BI-RADS category 4 at outside facilities were assigned a BI- RADS category 5 or 6 at Vitamu. Almost all of these patients had subsequent biopsies which revealed 56 cases of cancer, 48 high-risk lesions and 229 benign lesions. </p>
                   <p>There are several reasons why radiologists make mistakes such as the Initial incorrect categorisations set out above. Sometimes errors are caused by fatigue when radiologists have been working for too long or too intensely; in other cases errors are caused when radiologists are distracted by phone calls or frequent interruptions. In some cases, a radiologist might make an error because they have been asked to interpret and render a diagnosis on an abnormality that lies just outside their zone of expertise. </p>
                   <p>Even in the most ideal setting, human error in radiology is inevitable. This explains why the medical profession acknowledges that there is an acceptable margin within which medical practitioners can make mistakes. That’s why, for patients without a breast cancer diagnosis, receiving second-opinion interpretations of breast imaging examinations can relieve anxiety while reducing patient morbidity and healthcare costs. </p>

               </div>

               <div className='bi-rads4__main__right'>
              
               <div className='some-question__right__images bi-rads4__main__right__imagess'>
                 <img data-aos="new-animation" data-aos-duration="1100" data-aos-delay="500" className='some-question__right__images__image bi-rads4__main__right__images' src='https://i.im.ge/2022/09/20/1DOLSJ.4.png' />
                 <img data-aos="new-animation" data-aos-duration="800" data-aos-delay="900"  className='some-question__right__images__image bi-rads4__main__right__images' src='https://i.im.ge/2022/09/20/1DOtdh.10.png' />
                 <img data-aos="new-animation" data-aos-duration="800" data-aos-delay="600"  className='some-question__right__images__image bi-rads4__main__right__images' src='https://i.im.ge/2022/09/20/1DOmMK.7.png' />
                 <img data-aos="new-animation" data-aos-duration="1800" data-aos-delay="700"  className='some-question__right__images__image bi-rads4__main__right__images' src='https://i.im.ge/2022/09/20/1DO6xX.9.jpg' />
                
                 <img data-aos="new-animation" data-aos-duration="800" data-aos-delay="800"  className='some-question__right__images__image bi-rads4__main__right__images' src='https://i.im.ge/2022/09/20/1DO556.6.jpg' />
                 <img data-aos="new-animation" data-aos-duration="800" data-aos-delay="300"  className='some-question__right__images__image bi-rads4__main__right__images' src='https://i.im.ge/2022/09/20/1DOhfS.2.png' />
                 <img data-aos="new-animation" data-aos-duration="1300" data-aos-delay="400"  className='some-question__right__images__image bi-rads4__main__right__images' src='https://i.im.ge/2022/09/20/1DOAfY.12.png' />
                 <img data-aos="new-animation" data-aos-duration="1200" data-aos-delay="600"  className='some-question__right__images__image bi-rads4__main__right__images' src='https://i.im.ge/2022/09/20/1DODJa.3.jpg' />
                
                 <img data-aos="new-animation" data-aos-duration="800" data-aos-delay="300"  className='some-question__right__images__image bi-rads4__main__right__images' src='https://i.im.ge/2022/09/20/1DOwI9.8.jpg' />
                 <img data-aos="new-animation" data-aos-duration="800" data-aos-delay="500"  className='some-question__right__images__image bi-rads4__main__right__images' src='https://i.im.ge/2022/09/20/1DOUNy.1.jpg' />
                 <img data-aos="new-animation" data-aos-duration="800" data-aos-delay="600"  className='some-question__right__images__image bi-rads4__main__right__images' src='https://i.im.ge/2022/09/20/1DO7Ex.5.jpg' />
                 <img data-aos="new-animation" data-aos-duration="500" data-aos-delay="900"  className='some-question__right__images__image bi-rads4__main__right__images' src='https://i.im.ge/2022/09/20/1DOyPM.11.jpg' />
            </div>

            <p style={{fontFamily:"Sofia Pro", fontSize:"17px", marginTop:"40px"}}>A team of world class radiologists. Here to help you.</p>


               </div>
                 
               
            
             </div> 

             <div className='bi-rads4__main'>
              
               <div className='bi-rads4__main__left'>

                <p>This is how we can help.</p>
                <p>We recheck mammograms/ultrasounds to make sure that your are breast cancer-free. Every year, while most women will receive a Bi-rads 4 assessment, there will more than 98,000 missed breast cancer patients among them.</p>
                <p>Once you get started, two of our radiologists will recheck your mammograms/ultrasounds. First, both of these radiologists will evaluate your mammogram separately with the help of our artificial intelligence. Each radiologist will individually upload their findings, and our system will compare the results. If there is a red flag (i.e. a potential case of cancer) reported by either of these radiologists or by our artificial intelligence, we will arrange for you to have a physical examination at one of our partner locations, free of charge.</p>
                <p>If nothing concerning is found during the review of your mammograms, we will let you know that you are breast cancer free. The whole process will take just 24 hours from when we receive the copy of your mammogram/ultrasound images. Now, let's recheck your mammogram/ultrasound.</p>
          
                <Link  style={{  textDecoration: "none",}} to="/form"> 
                      <a onClick={()=>{gV.isShowBiRads123 = false; gV.p = -1}} style={{width:"258px",height:"46px"}} className="button"  >
                        <t style={{fontSize:"17px"}} className="buttonText"> Recheck Today</t>
                        <t style={{fontSize:"25px", fontWeigh:"700", marginTop:"5px"}} className="line">|</t>
                        <t className="arrow">➔</t>
                      </a>  
                </Link>
         
        
       
        
        
     
 
      
      
          
               </div>
            
               <div className='bi-rads4__main__right'></div>
                 
               
            
             </div>   
           
             <p style={{fontFamily:`${mq.matches ? "Sofia Pro" :  "Avenir-Roman"}`, fontSize:`${mq.matches ? "20px" :  "23px"}`, fontWeight:"700", marginTop:"15px",width:"120%"}}>Have questions? We have answers.</p>
           
             <AccordionSomeQuestion width={mq.matches ? "100%" : "50%" }  />

        </div>

        {mq.matches ? <MobileFooter/> : <Footer marginTop={"-40px"}/>}
        
    </>
  )
}

export default BiRads4