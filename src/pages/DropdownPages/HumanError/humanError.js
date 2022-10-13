import Navbar from "../../../homeComponents/1.Navbar/navbar";
import "./humanError.css"
import HumanErrorImage from "./images/HumanErrorImage.png"
import HumanErrorAudio from "./images/HumanErrorAudio.png"
import HumanErrorPie from "./images/HumanErrorPie.png"
import Footer from "../../../homeComponents/11.Footer/footer";




const HumanError = () => { 

    return (
        <> 
        <Navbar
        mobileMenuText={"Menu"}
        mobileMenuTo={"/mobileNavMenu"}
        />
        <div className="human-error">
            <div className="human-error-main">
                
                   <div className="human-error-main-header">

                          <div className="human-error-main-header-left">
                              <p> Must-read </p>
                              <h5> <h2> Human error </h2> is the fact of making mistakes as a natural result of being human.</h5>
                              <p>7 min read · Audio version is also available.</p>
                              <img src={HumanErrorAudio}  className="human-error-main-header-left-audio"/>
                          </div>

                          <img src={HumanErrorImage} className="human-error-main-header-right"/> 
                            
                    </div>

                    <div className="human-error-main-hero"> 

                     
                       {/* Text area 1 */}
                      <div className="human-error-main-hero-texts">
                       
                         <h2>Radiologists make mistakes too. </h2>
                          <p>We know that all humans make mistakes. However, in medicine, this can spell disaster. Before proposing our solution to this issue, we want to explain what are the causes of human error.</p>
                          <p>According to Richard Gunderman, MD, PhD, Chancellor’s Professor at Indiana University School of Medicine, radiologists make mistakes for several reasons. These include errors caused by fatigue from working for too long or too intensely or errors caused by distractions such as phone calls or frequent interruptions. In some cases, a radiologist might make an error because they have been asked to interpret and render a diagnosis on an abnormality that lies just outside their zone of expertise. Even in the most ideal setting, human error in radiology is inevitable. This explains why the medical profession acknowledges that there is an acceptable margin within which medical practitioners can make mistakes.</p>
                          <p>Imagine you are sitting at a desk, looking at a screen for eight hours a day and trying to identify very small dots on very large black and white images. These tiny dots are cancer cells, and you only have a couple of minutes to detect them. This is how your mammogram is evaluated and interpreted and this method inevitably leaves room for human error. </p>
                          <p>Adrian P. Brady, Honorary professor at Glasgow Royal Infirmary, has undertaken comprehensive research on why human error occurs in radiology. According to his research, the following five factors <span> are responsible for 94.7% of the misdiagnoses in radiology.</span></p>
                        
                          
                      </div>

                   
                      <img src={HumanErrorPie} className="human-error-pie"/>

                    
                     
                      {/* Text area 2 */}
                      <div className=" human-error-main-hero-texts">
                            <ul>
                                <li><p> <span>Heavy workload   </span>(accounts for 30.6% of misdiagnoses). This is a key contributor to misdiagnoses since two thirds of radiologists in the United States have to cope with high workloads. Given that the number of radiologists per thousand people has been declining over the last two decades, the cost of human error caused by heavy workloads is likely to increase in the future.</p></li>
                                <li><p> <span>Visual fatigue  </span> (accounts for 22.4% of misdiagnoses). This is a radiology specific human error factor in which the ability to focus on details in medical images reduces and symptoms of oculomotor strain increase as time goes on. This means that a radiologist will perform better at the beginning of the day, with their performance declining as the end of the day approaches.</p></li>
                                <li><p> <span> Mental fatigue  </span>(accounts for 21.2% of misdiagnoses). This is one of the biggest problems in the healthcare system. The length of continuous duty shifts and work hours for many healthcare professionals is much greater than would be allowed in other safety-conscious industries, such as transportation or nuclear power. Continuous, prolonged decision-making results in mental fatigue, and the nature of radiologists’ work makes them particularly prone to this. Unsurprisingly, this form of fatigue increases later in the day and leads to the unconscious taking of shortcuts in cognitive processes, resulting in poor judgement and diagnostic errors.</p></li>
                                <li><p> <span> Inattentional blindness </span> (accounts for 16.2% of misdiagnoses). This occurs when the observer fails to notice a fully visible but unexpected object (in the case of a mammogram, breast cancer) because their attention was engaged in a different task. A study at Harvard’s Visual Attention Lab found that 80% of the radiologists observed failed to make an accurate diagnosis when there was a distraction in their work environment. While this indicates that a radiologist should be isolated from their environment in order to avoid inattentional blindness, this is practically impossible in current hospital or medical centre environments in the United States.</p></li>
                                <li><p> <span> Lack of expertise </span>   (accounts for 4.3% of diagnosis). 6.4% of breast cancer cases have cells with features which makes them difficult to detect if the radiologist has limited familiarity with them.  </p></li>
                            </ul>

                            <p>None of these factors are intentional errors on the part of the radiologist. Instead, they occur simply because radiologists are human beings.</p>
                                
                      </div>

                        {/* Text area 3 */}


                        <div className="human-error-main-hero-texts">
                       
                       <h2>The cost is high. </h2>
                        <p>To avoid the extensive pressure on radiologists or any other medical professionals, the medical profession acknowledges an acceptable margin of error in diagnoses. This means that if a radiologist misses a case of breast cancer which the average radiologist would also miss, the error falls within an acceptable margin of human error. This acceptable margin of error is equal to approximately 10% of breast cancer detection cases on mammogram evaluation and interpretation. </p>
                        <p>On the one hand, it is quite understandable that these acceptable margins of error exist; being human naturally comes with limitations and radiologists are no different from the average human being. On the other hand, the 10% of breast cancer cases which are missed means a lot for the patients and healthcare system as whole. Medical errors cost the US economy $750 billion each year, and the share in this of human error in radiology is more than $110 billion. </p>
                        <p>From the patients’ perspective the cost is even higher: most Americans will experience human error in healthcare at least once in their lifetime. For breast cancer patients, human error can have fatal consequences - even a one-year delay in diagnosis results in a 24% fall in life expectancy for Stage 2 and Stage 3 cases and causes medical expenses to increase by 7.5 times. In addition, when one considers what a woman with a missed diagnosis will have to deal with, the psychological effects of a missed diagnosis cannot be quantified.</p>
                        <p>We have seen, therefore, that radiologists make mistakes, not because there are not well-qualified or trained, but because they are human beings. However, the cost of these mistakes is high, and we all, especially women, are left to deal with the consequences. </p>
                      
                        
                        </div>


                            {/* Text area 4 */}

                            <div className="human-error-main-hero-texts" >
                                <h2>Technology is the future.</h2>
                                <p>If it was still the early 2000s, the existence and impact of human error in healthcare would be far more daunting since at that time we had no viable strategy or structure to limit its influence on our lives. However, over the last two decades technology in healthcare has moved into a phase where human error has become preventable. Now we are in the position where advanced technologies, led by artificial intelligence, are capable of eliminating the factors causing human error and thereby ensure that radiologist performance is optimal.</p>
                                <p>With the main causes of human error in radiology in mind, we will now set out how our technology makes a difference. </p>

                                 <div className="human-error-main-hero-texts human-error-child">
                                         <p>1.    When you teach artificial intelligence to detect critical areas on a mammogram, it becomes a perfect tool for radiologists to work with, <span> since software does not tire or suffer from visual/mental fatigue. </span> This is just one contribution to eliminate fatigue related human error cases.</p>
                                         <p>2.    Artificial intelligence reduces the time needed by a radiologist to evaluate a mammogram from 35 minutes to 5 minutes, as it <span>automatically identifies the red flags the radiologist needs to interpret. </span> The lower a radiologist’s workload, the higher the quality of a radiologist’s performance.</p>
                                         <p>3.    Finally, <span>  software performance is highly stable.</span> While a radiologist’s performance declines over the working hours, software performance remains the same from early morning to late evening, which continues to eliminate human error.  </p>
                                 </div>
                               
                                 <p>The perfect solution, therefore, is to bring radiologists and technology together. Radiologists can continue to do their jobs and our software will eliminate the possibility of human error.</p>
                                 <p>This is how Vitamu works. Our radiologists recheck the mammograms with the use of artificial intelligence. This reduces their workload, reduces the possible occurrence of fatigue and reduces the occurrence of human error. In this way, we can ensure that almost no breast cancer cases are missed.</p>
                            </div>

                            <div style={{marginTop: "-90px"}} className="upside-footer">
                                   <p></p>

                                   <a className="button">
                                     <span className="buttonText"> Get Started</span>
                                     <span className="line">|</span>
                                     <span className="arrow">➔</span>
                                   </a>  

                                   <a className="button-human">
                                     <span className="buttonText-human"> Read Stories</span>
                                     <span className="line-human">|</span>
                                     <span className="arrow-human">➔</span>
                                   </a>  

                             </div>

                                   
     
   
   
      
     
      
  

                           

                            <Footer/>
                            
                               



                        



                    


                    </div>
                       
                
            </div> 
         </div>
         </>
    )
}

export default HumanError;
                
            