import React from 'react'
import Navbar from "../../../homeComponents/1.Navbar/navbar";
import HumanErrorImage from "../HumanError/images/HumanErrorImage.png"
import HumanErrorAudio from "../HumanError/images/HumanErrorAudio.png"
import UpsideFooter from '../components/upsideFooter';
import Footer from '../../../homeComponents/11.Footer/footer';

const Technology = () => {
  return (
    <>
      <Navbar mobileMenuText={"Menu"} mobileMenuTo={"/mobileNavMenu"} />
      <div className="human-error">
        <div className="human-error-main">
         
         
          <div className="human-error-main-header">
            <div
              style={{ width: "68%" }}
              className="human-error-main-header-left"
            >
              <p className='accordions-yellow-button'> Our Technology </p>
              <h5>
              We bring radiologists and artificial intelligence together. For women, for a good cause.
              </h5>
              <p>14 min read · Audio version is also available.</p>
              <img
                src={HumanErrorAudio}
                className="human-error-main-header-left-audio"
                alt=''
              />
            </div>
            <img
              src={HumanErrorImage}
              className="human-error-main-header-right"
              alt=''
            />
          </div>
        
          <div className='normal-text' style={{gap:"20px"}} >
              
                 <p className='big-normal-text'>Basics of Artificial Intelligence (“AI”)</p>
                 <p>When we use our computers or smart phones, the software in these devices tells their different parts how to work and function. When you click on an application button on your phone, software operates to bring you the relevant content; when you press the search button on Facebook, a software algorithm brings up the profiles you want to see. Depending on the complexity of the task, the software required becomes more complex. Ever since the computer science revolution, humans have developed software that has enabled space travel, digital learning and access to World Wide Web. The second phase of the revolution, namely artificial intelligence, has been even more amazing.  </p>
                 <p>The concept of artificial intelligence is simple: if you create software that not only completes certain tasks but also learns how to complete those tasks, then you have artificial intelligence that works just like our brains. If you add hardware to that software, the device becomes a smart robot. The difference between artificial intelligence and traditional software, therefore, is in its ability to learn. The exciting part about this is the endless opportunities that this learning ability creates. </p>
                 <p>Today, almost all of the applications that you use on your phone contain an artificial intelligence algorithm that aims to enhance your experience. For instance, YouTube’s artificial intelligence learns your interests and habits, then shows you the content you will like. The more time you spend on YouTube, the more the artificial intelligence learns and the better it performs. Facebook’s artificial intelligence, on the other hand, learns from your profile and shows you customised adverts and content. Every Facebook user will see different and customised adverts since each user has a unique identity, lifestyle, and consumption habits and makes unique life choices. </p>
             
                 <p style={{marginTop:"40px"}} className='big-normal-text'>Why do we need artificial intelligence?</p>
                  <p>Compared to the capabilities of human beings, artificial intelligence is superior in multiple ways.</p>
                  <p>1.    AI can operate much faster than human beings - it can complete a task in seconds while a human needs hours, days, and years depending on the complexity of the task. Think about how your credit scores are calculated; with the use of AI, your financial capabilities can be identified in just 30 seconds. Without the assistance of AI, a human would need at least 3 hours to make a similar calculation.   </p>
                  <p>2.    AI never sleeps. As human beings, our performance declines over time as we get increasingly tired and need to sleep. The same does not apply to AI, which can operate 24/7 at the same performance level. </p>
                  <p>3.    AI, by its nature, cannot not make the mistakes that are caused by human error.</p>
            
                  <p style={{marginTop:"40px"}} className='big-normal-text'>Artificial Intelligence and Reading Mammograms</p>
                  <p>At the beginning of our journey at Vitamu, we realised that breast cancer cases were frequently being missed on mammogram evaluation simply because of human error. We saw an opportunity for artificial intelligence to evaluate mammograms far more accurately than humans alone. We decided to develop a special form of artificial intelligence which could read mammograms and be used as a tool by radiologists. The idea was simple and original and gave us the opportunity to find all breast cancer cases and eliminate the impact of human error. In terms of software development, this was straightforward - we would teach our software to learn from radiologists through imitation of standardised procedures. </p>
                  <p>However, the difficulty lay in obtaining the data. If you want to teach and train artificial intelligence you need data, in the same way that you need textbooks to teach children. In our case, the data was a large set of mammograms that belong to women with proven breast cancer after a biopsy. For privacy reasons, it is normally relatively hard to obtain this data, but we were fortunate to acquire anonymised data from our partners which include New York University, University of California LA, and Massachusetts Institute of Technology. </p>
                  <p>We trained our artificial intelligence with 38,000 mammogram files that show different forms of breast cancer. The training took six months as each mammogram was divided into 1200 small pieces and each piece was processed 340 times on Amazon Web Services cloud servers. Seven engineers worked full-time to create our unique artificial intelligence software. Eventually, we achieved our goal.    </p>

        
                  <p style={{marginTop:"40px"}} className='big-normal-text'>Measuring the Performance</p>
                  <p>Once you have created and trained artificial intelligence, you need to check its performance. Performance measurement is particularly important in healthcare where quality of performance directly affects lives. </p>
                  <p>In a clinical study performed in cooperation with New York University, we evaluated a sample of 1480 mammograms (20% of them belonging to breast cancer patients) in three different ways. </p>
                  <p>The first part of the study involved 28 radiologists who each reviewed the mammograms individually. On average, these radiologists identified 89.2% of breast cancer cases.  </p>
                  <p>In the second part of the study, 22 radiologists reviewed the mammograms in pairs. When two radiologists reviewed the mammograms together, we found that the breast cancer detection rate increased to 93.9%. As expected, two radiologists perform better than a single radiologist.</p>
                  <p>In the third part of the study, we used our artificial intelligence alone to review the mammograms. Our software detected 98.2% of breast cancer cases in the data set. While this was an excellent achievement, we did not stop there. </p>
                  <p>Next, we wanted to assess the detection rate when a single radiologist evaluated the mammograms with the assistance of our AI. With the help of our software, a group of 36 radiologists were able to detect 99.6% of all breast cancer cases.</p>
                  <p>At the final stage of the performance evaluation, two radiologists reviewed the mammograms with the assistance of our AI. The results showed that these radiologists were able to detect breast cancer cases with close to 100% accuracy.</p>
                  <p>This performance review clearly shows that while the possibility of breast cancer being missed when a mammogram is evaluated by a single radiologist is 10.8%, when two radiologists work together with the assistance of our AI there is only a  0.00009% possibility that a case of breast cancer can be missed.</p>
                  <p>In addition to the close to 100% accuracy outlined above, the assistance of our AI reduces the time required for a radiologist to accurately evaluate a mammogram from thirty-five minutes (required when a single radiologist is reviewing a mammogram) to just five minutes. This means that, through Vitamu, all mammograms can be evaluated by two radiologists and our AI at a very reasonable cost.4</p>

        
          </div>
        

            <UpsideFooter/>
            <div style={{marginLeft:"120px"}}><Footer/></div>

        
        
        </div>
      </div>




    </>
  );
}

export default Technology;





