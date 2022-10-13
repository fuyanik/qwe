import React from 'react'
import Navbar from "../../../homeComponents/1.Navbar/navbar";
import HumanErrorImage from "./images/HumanErrorImage.png"
import HumanErrorAudio from "./images/HumanErrorAudio.png"
import UpsideFooter from '../components/upsideFooter';
import Footer from '../../../homeComponents/11.Footer/footer';

const Statistics = () => {
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
              <p> Good to know </p>
              <h5>
              About <h2> 1 in 8 U.S. women</h2> will develop breast cancer over the course of her lifetime.
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
        
          <div className='normal-text' >
              
              <p>In 2022, an estimated <span>276,480 new cases of invasive breast cancer</span> will be diagnosed in women in the U.S. as well as <span>48,530 new cases of non-invasive (in situ) breast cancer.</span> </p>
              <p style={{marginLeft:"28px"}}>• In 2021, it is estimated that <span>23.000 women’s breast cancer were missed</span> on mammogram screening, in the United States.</p>
              <p style={{marginLeft:"28px"}}>• <span>64% of breast cancer cases are diagnosed at a localized stage</span> (there is no sign that the cancer has spread outside of the breast), for which the 5-year <span>survival rate is 99%</span></p>
              <p style={{marginLeft:"28px"}}>• This year, an estimated <span>42,170 women will die from breast cancer</span> in the U.S.</p>
              <p style={{marginLeft:"28px"}}>• Although rare, men get breast cancer too. In 2022, an estimated <span>2,620 men</span> will be diagnosed with breast cancer this year in the U.S. and approximately <span>520 will die.</span></p>
              <p style={{marginLeft:"28px"}}>• Breast cancer is the most common cancer in American women, except for skin cancers. </p>
              <p style={{marginLeft:"28px"}}>• It is estimated that in 2022, approximately <span>30% of all new women cancer diagnoses will be breast cancer.</span></p>
              <p style={{marginLeft:"28px"}}>• There are over <span>3.5 million breast cancer survivors</span> in the United States</p>
              <p style={{marginLeft:"28px"}}>• On average, <span>every 2 minutes</span> a woman is diagnosed with breast cancer in the United States.</p>
        
          </div>
        

            <UpsideFooter/>
            <div style={{marginLeft:"120px"}}><Footer/></div>

        
        
        </div>
      </div>




    </>
  );
}

export default Statistics





