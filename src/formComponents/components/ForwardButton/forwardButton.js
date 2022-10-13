import React from 'react';
import "./forwardButton.css";
import { MdOutlineArrowForward } from "react-icons/md";
import gV from '../../../gV';




//gV.buttonType == 0  ?  "Continue" : <MdOutlineArrowForward className='forward-icon' />

const ForwardButton = ({forwardButtonClick, width,left,buttonText}) => {

    return (
    
        <button 
        onClick= {forwardButtonClick}
        style = {{
        width: width,
        left: left
      

        }}


        
        className='forward-button' > <span className='button-text'> { buttonText } </span> </button>
    )


    
    }
 




export default ForwardButton;