import MobileCustomizedAccordions from './mobileAccordions';
import './mobileAllinOne.css'
import allinoneimage from "./images/allinoneimage.jpg"
import logo1 from "./images/logo1.png"
import logo2 from "./images/logo2.png"
import logo3 from "./images/logo3.png"
import logo4 from "./images/logo4.png"


const MobileAllinOne = () => { 

return (
<div className ="main-mobile-all-in-one">
    <div className="mobile-all-in-one"> 
    
        <div className="mobile-all-in-one-header"> 
   
             <p data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="00" className='mobile-all-in-one-text'> A hassle-free experience </p>

             <h2 data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="00" > An all in one service. </h2>

             <MobileCustomizedAccordions/>

             <img data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="00" src={allinoneimage} className="mobile-all-in-one-image" />

           <p className='dividero1'> _________________________</p>
         
             <h1> As seen on:</h1>

             <div className='mobile-all-in-one-logos'> 

               <img src={logo1}/> 
               <img src={logo2}/> 
               <img src={logo3}/> 
               <img src={logo4}/> 

               <p className='dividero2'> _________________________</p>
              
             
           
             
             
             </div>
         
        
        </div>



    
    
    
    </div> 

    </div>
)


}


export default MobileAllinOne;