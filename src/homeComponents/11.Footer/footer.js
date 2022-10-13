import "./footer.css";
import vitamuFooter from "./vitamuFooter.png";
import {Link} from 'react-router-dom';
import { useState } from "react";
import BiRadsDropdown from "../BiRadsDropdown/biRadsDropdown";

const Footer = ({marginTop}) => { 
    const [isHover , setIsHover] = useState(false);

  return (
 
     <div style={{marginTop: marginTop}}  className="footer"> 


          <div className="footer-main">

          {isHover && <BiRadsDropdown
                        onMouseLeave={()=>{setIsHover(false)}}
                        top={"860%"}
                        left={"13%"}
                       />}
                 
                 <div className="footer-main-left"> 
                
                

                 <Link style={{  textDecoration: "none",}}   to="/form">   
                     <a onMouseMove={() => {setIsHover(true)}}
                        style={{position: "relative", top: "234px", left: "12px", zIndex: "1", width:"250px", height:"47px"}}
                        className="button7" href="#">
                       <span className="buttonText7"> Get Started</span>
                       <span className="line7">|</span>
                       <span className="arrow7"> ➔</span>
                     </a>
                 </Link>
                   
                     <img src= {vitamuFooter} className="footer-main-left-image" /> 
                
                 </div>




                 <div className="footer-main-right"> 

                    <ul>
                        <li >Facts</li>
                        <li className="footer-main-rigth-text-item">Human Error</li>
                        <li>Missed Diagnosis</li>
                        <li>Early Detection</li>
                        <li>Statistics</li>
                        <li>Resources</li>
                    </ul>


                    <ul>
                        <li>Recheck </li>
                        <li>How It Works</li>
                        <li>Technology</li>                   
                        <li>Journey of a Mammogram</li>
                        <li>What is Next?</li>
                    </ul>


                    <ul>
                        <li>People</li>
                        <li>Stories</li>
                        <li>Donate</li>
                        <li>Research Fund</li>
                    </ul>


                    <ul>
                        <li>Help</li>
                        <li>Contact</li>
                        <li>FAQ</li>
                        <li>Stage 4 Support</li>
                        <li>Breast Self-Exam Reminder</li>
                    </ul>
              
              
              
                 </div>
          
         
         
         
         
          </div>



     </div>


   

  )


}








export default Footer;