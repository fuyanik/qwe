

const WomenCards = ({Background,textLong,textShort,imageWidth,imageHeight,headerDisplay,marginTop,MarginRight}) => { 
  
  
    //  className={`${imageWoman}`}

return ( 
    
    <div className="women-cards">
   
   

        <div className="women-cards-header" style={{display: headerDisplay}}>
  
        <h3 data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="00" style={{display: headerDisplay}}>Women speak here.</h3>
        <p data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="00"> In 2021, we found 1.400+ breast cancer cases missed by radiologists, and a recheck made a difference for all these women. </p>
        <p data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="00" > We will continue to make a change, <span> together.</span>  </p>
  
        </div>

   
   
    <div 
   data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="00"
    style=
    {{
    MarginRight : MarginRight,
    marginTop: marginTop,
    backgroundImage : `url(${Background})`,
    width: imageWidth,
    height: imageHeight,
    backgroundSize : "cover",
    backgroundPosition: " center top",
    
    }}> 
    </div>

    <h1 data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="00" > {textLong} </h1>
    <span data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="00" className="women-span"> {textShort} </span>



    </div>

)

}

export default WomenCards;