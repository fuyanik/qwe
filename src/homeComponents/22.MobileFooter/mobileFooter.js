import MobileFooterCustomizedAccordions from './footerAccordion';
import './mobileFooter.css'
import vitamuLogo from './images/vitamuLogo.png'
import mobileFooterIcons from './images/mobileFooterIcons.png'
import mobileFooterPay from './images/mobileFooterPay.jpg'
import {Link} from 'react-router-dom';


const MobileFooter = () => {


return (



<div className="mobile-footer"> 
   <div className='mobile-footer-main'> 
         <div className='dividero-footer'></div>
         <img className='mobile-footer-image' src={vitamuLogo} />
         <MobileFooterCustomizedAccordions/>
         <p className='mobile-footer-text'>Terms of Service · Privacy Policy</p>
         <img  className='mobile-footer-icons' src= {mobileFooterIcons}/>

         <Link   style={{  textDecoration: "none",}} to="/form">     
              <a className="button7" href="#">
                <span className="buttonText7"> Get Started</span>
                <span className="line7">|</span>
                <span className="arrow7"> ➔</span>
              </a>  
         </Link>

         <p className='mobile-footer-text2'>These statements have not been evaluated by the FDA, NHS, or Health Canada. This service is not intended to treat or cure any disease.</p>
         <img  className='mobile-footer-pay' src= {mobileFooterPay}/>
       
         <p className='mobile-footer-text2'>  Vitamu© 2022 All Rights Reserved.</p>
         
              

                           
                         
                       


   </div>
</div>



)

}

export default MobileFooter;