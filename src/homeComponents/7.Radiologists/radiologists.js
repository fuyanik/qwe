import "./radiologists.css"
import {Link} from 'react-router-dom';
import doctorImage1 from "./images/doctorImage1.png"
import doctorImage2 from "./images/doctorImage2.png"
import doctorImage3 from "./images/doctorImage3.png"
import doctorImage4 from "./images/doctorImage4.png"

import image1 from "./images/image1.jpeg"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import image4 from "./images/image4.png"

import { useState } from "react";
import BiRadsDropdown from "../BiRadsDropdown/biRadsDropdown";

const Radiologists = ( ) => {

    const [isHover, setIsHover] = useState(false);
    const mq = window.matchMedia( "(min-width: 768px)" );


return (

    <div className="main">


    <p className="divider">_________________________________________________________________________________________________________</p>

    <div data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="00" className="text0">World class radiologists, centered around you. </div>
    <div data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="00" className="text1"> World class radiologists. </div>
    <div data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="00" className="text2">Centered around you.</div>
    <div data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="00" className="text3"> Swipe right to see more</div>


     { /* <div className="row">

        <div className="container" >
            <div className="img"> </div>
            <h5 className="docName"> Jessica Pallerson </h5>
            <p className="schName">University of Kansas School of Medicine</p>
            <p className="exp"> 20+ years of experience </p>
        </div>



        <div className="container">
            <div className="img-2"> </div>
            <h5 className="docName"> Kimberly Windson</h5>
            <p className="schName">Yale University School of Medicine</p>
            <p className="exp"> 8+ years of experience </p>
        </div>


        <div className="container">
            <div className="img-3"> </div>
            <h5 className="docName">Elaonar Noen</h5>
            <p className="schName">David Geffen School of Medicine UCLA</p>
            <p className="exp"> 20+ years of experience </p>
        </div>


        <div className="container">
            <div className="img-4"> </div>
            <h5 className="docName">Sarel M. Gaur</h5>
            <p className="schName">University of Rochester School of Medicine</p>
            <p className="exp"> 20+ years of experience </p>
        </div>

</div> */}

<div  className="doctor-section">

<div data-aos="fade-right"  data-aos-duration="1000" data-aos-delay="100" className="doctor-section__item ">
   <img src= { mq.matches ? image1 : doctorImage1} className="doctor-img-mobile" /> 
  <h5 className="mob-docName"> Jessica Pallerson </h5>
  <p className="mob-schName">University of Kansas School of Medicine</p>
  <p className="mob-exp"> 20+ years of experience </p>


  </div>

  <div data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="600" className="doctor-section__item ">
  <img src={ mq.matches ? image2 : doctorImage2} className="doctor-img-mobile" /> 
  <h5 className="mob-docName"> Kimberly Windson</h5>
   <p className="mob-schName">Yale University School of Medicine</p>
  <p className="mob-exp"> 8+ years of experience </p>
  
  </div>

  <div data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="600" className="doctor-section__item">
  <img src={ mq.matches ? image3 : doctorImage3} className="doctor-img-mobile" /> 
  <h5 className="mob-docName">Elaonar Noen</h5>
  <p className="mob-schName">David Geffen School of Medicine UCLA</p>
  <p className="mob-exp"> 20+ years of experience </p>
  </div>

  <div data-aos="fade-left"  data-aos-duration="1000" data-aos-delay="100" className="doctor-section__item "> 
   <img src={ mq.matches ? image4 : doctorImage4} className="doctor-img-mobile" />
   <h5 className="mob-docName">Sarel M. Gaur</h5>
    <p className="mob-schName">University of Rochester School of Medicine</p>
    <p className="mob-exp"> 20+ years of experience </p>
 </div>
  

</div>


    <p className="divider">_________________________________________________________________________________________________________</p>
    <p data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="100" className="textBottom">We have 80+ certified radiologist in our team. </p>


{isHover && <BiRadsDropdown
onMouseLeave={() => setIsHover(false)}
top={"585%"}
left={"44%"}
/>}
    <Link
    style={{  textDecoration: "none",}}
    to="/form">   <a 
    data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="00"
    onMouseMove={() => setIsHover(true)}
    className="button31" href="#">

        <span className="buttonText31"> Get Started</span>
        <span className="line31">|</span>
        <span className="arrow31"> ➔</span>

    </a> </Link>
   

    <p className="divider">_________________________________________________________________________________________________________</p>



  


</div>




)


}

export default Radiologists;