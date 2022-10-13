import "./answerButtons.css";
import { useState } from "react";
const AnswerButtons = ({text,handleClick,className}) => { 

 

    return(
     
       <div className={className} onClick={handleClick}>
         {text}

        </div>
    )
}

export default AnswerButtons;