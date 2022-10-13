import { MdArrowBack } from "react-icons/md";
import "./backButton.css"
import React from 'react';


const BackButton = ({backButtonClick, left}) => {


return (

    
<button className="back-button"  onClick={backButtonClick}  

style={{

left: left

}}> <MdArrowBack className="back-icon"  



/>  </button>



)

}

export default BackButton;