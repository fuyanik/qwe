import {Link} from 'react-router-dom';
import { useState } from 'react';
import BiRadsDropdown from '../BiRadsDropdown/biRadsDropdown';


const Serviceİtems = ({Background,textShort,textLong,textFooter,displayElement}) => {
  const [isHover, setIsHover] = useState(false);

  const spaniko = () =>{return <span className="spaniko"> {textFooter} </span>}
  const button = () => { return (
    <Link
    style={{  textDecoration: "none",}}
    to="/form">     <a 
    onMouseMove={() => {setIsHover(true)}}
    className="button" href="../FormPage/index.html">
    <span className="buttonText"> Get Started</span>
    <span className="line">|</span>
   
    <span className="arrow">➔</span>
 
     </a> </Link>
  )}

  
  const displayFunc = () => { 
    if(displayElement){
      return (
        isHover ? <BiRadsDropdown
        onMouseLeave={() => {setIsHover(false)}}
        top={"334%"}
        left={"23%"}
        /> : button()
        
        )
    }

    if(!displayElement){
      return spaniko()
    }

      
  }

    return(

      <div data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="00" className="service-items">

       <div 
       style={{
        backgroundImage : `url(${Background})`,
        backgroundSize : "cover",
        backgroundPosition : "center",
        width : "373px",
        height : "66px",

       }}> </div>

      <p className='service-items-p'>{textShort}</p>
      <p className='service-items-p2'>{textLong}</p>




    {displayFunc()}
      

      </div>

    )
}

export default Serviceİtems;