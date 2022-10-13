import "./mobileBeyondMethods.css";
import MobileBeyondMethodsImage from "./mobileBeyondMethodsImage.gif";
import { Link } from "react-router-dom";
const MobileBeyondMethods = () => { 


    return (

        <div className="mobile-beyond-methods">
           <div className="mobile-beyond-methods-main">

           <img className="mobile-beyond-methods-image" src = {MobileBeyondMethodsImage}/>

             <div className="mobile-beyond-methods-main-texts">
                 <h1>Thinking beyond the traditional methods.</h1>
                 <p>We bring radiologists and technology together. </p>


                 <p> Above, you can see how our artificial intelligence spots healthy and unhealthy breast tissue in just seconds.  </p>
                 <p> While a single radiologist can fail to identify cancer on a mammogram screening, our radiologists assisted with our artificial intelligence will not.  </p>
             </div>

            
          
            <Link className="style-none" to="/form">

                 <a className="mobile-beyond-button-1 button">
    
                     <span className="mobile-beyond-buttonText-1"> Get Started</span>
                     <span className="mobile-beyond-line-1">|</span>
                     <span className="mobile-beyond-arrow-1">➔</span>
                
                </a>
            </Link>


             <a className="mobile-beyond-button-2" href="../FormPage/index.html">

                   <span className="mobile-beyond-buttonText-2"> Discover Technology</span>
                   <span className="mobile-beyond-line-2">|</span>
                   <span className="mobile-beyond-arrow-2">➔</span>
             </a> 



            



           
           
           </div>
        </div>
    )
}

export default MobileBeyondMethods;