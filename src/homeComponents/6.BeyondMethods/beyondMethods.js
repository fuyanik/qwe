import "./beyondMethods.css";
import {Link} from 'react-router-dom';
import { useState } from "react";
import BiRadsDropdown from "../BiRadsDropdown/biRadsDropdown";

const BeyondMethods = ( ) => {

const [isHover, setIsHover] = useState(false);

    return  (
<div className="beyond-methods"> 

      <div className="beyond-methods-main"> 

           
           
            <div className="beyond-methods-text-area"> 
            
               <h3 data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="00" >Thinking beyond the traditional methods. </h3>
               <p data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="00" > We bring radiologists and technology together.  </p>
               <p data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="00" > On the right, you can see how our artificial intelligence spots healthy and unhealthy breast tissue in just seconds.  </p>
               <p data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="00" > While a single radiologist can fail to identify cancer on a mammogram screening, our radiologists assisted with our artificial intelligence will not. </p>
          
         { isHover && <BiRadsDropdown
          onMouseLeave={() => {setIsHover(false)}}
            top={"446%"}
            left={"20%"}
          />}
               <Link
    style={{  textDecoration: "none",}}

    to="/form">      <a 
    data-aos="fade-right"  data-aos-duration="1000" data-aos-delay="00"
     onMouseMove={() => {setIsHover(true)}}
    className="button" href="">
                   <span className="buttonText"> Get Started</span>
                   <span className="line">|</span>
                   <span className="arrow">➔</span>
               </a> </Link>
        
             
            </div>
   
               

            
            
            <div data-aos="fade-left"  data-aos-duration="1000" data-aos-delay="00" className="image">


            </div>



      </div>


</div>


    )
}

export default BeyondMethods;