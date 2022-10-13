
import "./majorPlans.css"
import {useState} from 'react';
import {Link} from 'react-router-dom';
import BiRadsDropdown from "../BiRadsDropdown/biRadsDropdown";
import gV from "../../gV";

const MajorPlans = () => {

  const [scrollNumber, setScrollNumber] = useState(0);
  const [isFadeIn, setIsFadeIn] = useState(false);
  const [isHover, setIsHover] = useState(false);
 
  window.addEventListener('scroll', function() {
   
    
    
    setScrollNumber(window.pageYOffset);

    scrollNumber > 4300 && setIsFadeIn(true);
    });

    //scrollNumber > 4300 ? 'major-plans-main-telephone' : null 

 return(
  
     <div className="major-plans">
     
         


          <div className="major-plans-main"> 

               
               
               <div 
               className=  
               {isFadeIn ? 'major-plans-main-telephone-fadein' : 'major-plans-main-telephone'}>
               
     
               </div>
              
               
          
                   


               
               <div className="major-plans-main-items"> 

                       <div className="major-plans-main-items-header"> 
   
                           <p data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="00"> Insurance accepted</p>

                           <h2 data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="00"> We accept all major insurance plans. </h2>

                       </div>

                       <div data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="00" className="major-plans-main-items-hospitals"> 
                      
                             <ul>  
                               <li>United Healthcare</li>
                               <li>Oscar</li>
                               <li>Aetna</li>
                               <li>Molina Healthcare</li>
                               <li>Humana</li>
                             </ul>
                             
                            
                             <ul>
                               <li>Cigna</li>
                               <li>Magellan</li>
                               <li>Anthem</li>
                               <li>Blue California</li>
                               <li>Blue Shield</li>
                             </ul>
                          

                             <ul>
                                <li>Care Plus</li>
                                <li>Freedom Health</li>
                                <li>WellCare</li>
                                <li>United American</li>
                                <li>Caresource</li>
                            </ul>
                                 

                       </div>


                       <div className="major-plans-main-items-footer">

                          <p data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="00" > No insurance? No problem. A recheck costs only $60. </p>
                         
                          <p data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="00" > Can’t afford? We can help </p>
                       
                       {isHover && <BiRadsDropdown
                        onMouseLeave={()=>{setIsHover(false)}}
                        top={`${gV.mq.matches ? "58%"  : "658%" }`}
                        left={`${gV.mq.matches ? "0%"  : "33%" }`}
                       />}
                          <Link
    style={{  textDecoration: "none",}}
    to="/form">      <a
    data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="00"
    onMouseMove={()=>{setIsHover(true)}}
    className="button7" href="#">

                            <span className="buttonText7"> Get Started</span>
                            <span className="line7">|</span>
                            <span className="arrow7"> ➔</span>
                         
                          </a>   </Link>


                       </div>
                           
                       









               </div>



          </div>
            
            
            
     </div>
            
    
    
    )
}


export default MajorPlans;

