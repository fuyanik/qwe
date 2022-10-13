import React from 'react'
import Navbar from "../../../homeComponents/1.Navbar/navbar";
import UpsideFooter from '../components/upsideFooter';
import HumanErrorImage from "./images/HumanErrorImage.png"
import HumanErrorAudio from "./images/HumanErrorAudio.png"

import Footer from "../../../homeComponents/11.Footer/footer";


const OurStory = () => {
  
  return (
      <> 
      <Navbar
      mobileMenuText={"Menu"}
      mobileMenuTo={"/mobileNavMenu"}
      />
      <div className="human-error">
          <div className="human-error-main">
              
                 <div style={{width:"100%"}} className="human-error-main-header">

                        <div className="human-error-main-header-left">
                            <p> Our Story </p>
                            <h5>We had some bad experiences with breast cancer. This is how we started Vitamu.</h5>
                            <p>4 min read · Audio version is also available.</p>
                            <img src={HumanErrorAudio}  className="human-error-main-header-left-audio"/>
                        </div>

                        <img src={HumanErrorImage} className="human-error-main-header-right"/> 
                          
                 </div>
                 <div className='normal-text' style={{gap:"20px"}} >
              
       
                 
              <p style={{marginTop:"30px"}} className='big-normal-text'>Two unforgettable losses.   </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed enim nibh. Duis luctus et risus vel elementum. Vestibulum nec auctor nisl. Vivamus venenatis ex nibh, non ullamcorper </p>
            
              <p style={{marginTop:"30px"}} className='big-normal-text'>A search for a reliable solution.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed enim nibh. Duis luctus et risus vel elementum. </p>
            
              <p style={{marginTop:"30px"}} className='big-normal-text'>Bringing things together.</p>
              <p>Phasellus eu massa in orci blandit auctor vel ac magna. Donec venenatis euismod enim non maximus. Vivamus vel condimentum elit, at venenatis erat. Proin tincidunt luctus nibh vel facilisis. Curabitur consectetur eros ac massa accumsan, vel pretium nunc consectetur. In est ante, posuere eu laoreet et, gravida at metus. Aliquam pretium porttitor erat, at euismod risus interdum placerat. Nunc lacinia congue dui id elementum. Pellentesque et lacus ac lacus congue dapibus.</p>
            
              <p style={{marginTop:"30px"}} className='big-normal-text'>Forming the team.</p>
              <p>Phasellus eu massa in orci blandit auctor vel ac magna. Donec venenatis euismod enim non maximus. Vivamus vel condimentum elit, at venenatis erat. Proin tincidunt luctus nibh vel facilisis. Curabitur consectetur eros ac massa accumsan, vel pretium nunc consectetur. In est ante, posuere eu laoreet et, gravida at metus. Aliquam pretium porttitor erat, at euismod risus interdum placerat. Nunc lacinia congue dui id elementum. Pellentesque et lacus ac lacus congue dapibus.</p>
            
              <p style={{marginTop:"30px"}} className='big-normal-text'>Early users.</p>
              <p>Phasellus eu massa in orci blandit auctor vel ac magna. Donec venenatis euismod enim non maximus. Vivamus vel condimentum elit, at venenatis erat. Proin tincidunt luctus nibh vel facilisis. Curabitur consectetur eros ac massa accumsan, vel pretium nunc consectetur. In est ante, posuere eu laoreet et, gravida at metus. Aliquam pretium porttitor erat, at euismod risus interdum placerat. Nunc lacinia congue dui id elementum. Pellentesque et lacus ac lacus congue dapibus.</p>
            
              <p style={{marginTop:"30px"}} className='big-normal-text'>Today</p>
              <p>Phasellus eu massa in orci blandit auctor vel ac magna. Donec venenatis euismod enim non maximus. Vivamus vel condimentum elit, at venenatis erat. Proin tincidunt luctus nibh vel facilisis. Curabitur consectetur eros ac massa accumsan, vel pretium nunc consectetur. In est ante, posuere eu laoreet et, gravida at metus. Aliquam pretium porttitor erat, at euismod risus interdum placerat. Nunc lacinia congue dui id elementum. Pellentesque et lacus ac lacus congue dapibus.</p>
            
              <UpsideFooter/>
            <div style={{marginLeft:"120px"}}><Footer/></div>
            
                   
                     </div>
              
          </div> 
       </div>
       </>
  )
}

export default OurStory;