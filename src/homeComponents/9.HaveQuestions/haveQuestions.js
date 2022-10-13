import CustomizedAccordions from "./accordion";
import "./haveQuestions.css"
import {useState} from 'react';

const HaveQuestions = () => {


     const [scrollNumber, setScrollNumber] = useState(0);
     const [isFadeIn, setIsFadeIn] = useState(false);
    
     window.addEventListener('scroll', function() {
      
       
  
       setScrollNumber(window.pageYOffset);
   
       scrollNumber > 4700 && setIsFadeIn(true);
       });

     
    return(
     <div data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="00" className="have-questions"> 

         
         
          <div className="have-questions-main"> 


              
              
               <div className="have-questions-main-accordion"> 

                    <CustomizedAccordions/>
              
               </div>

              
               <div className={isFadeIn ? 'have-questions-main-img-fadein' : 'have-questions-main-img' }>



               </div>

       
       
       
       
          </div>



     </div>



    )
}

export default HaveQuestions;