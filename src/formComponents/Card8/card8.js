import AnswerButtons from "../components/AnswerButtons/answerButtons";
import "./card8.css";
import { useState } from "react";
import { setGlobalState, useGlobalState } from "../../hookState";
import gV from "../../gV";




const Card8 = ({display}) => {
 
    
  const[isSelect1, setIsSelect1] = useState(false);
  const[isSelect2, setIsSelect2] = useState(false);

    return <div className="card8" style={{display:display}}>
        <div className="card8-main">
             <div className="card8-main-texts">
                     <p>We will need you to send us a copy of your mammogram. You can do this in two ways. </p>
                     <p>Which do you prefer?</p>
                     <p>Uploading the digital copy is the fastest way. Otherwise, if you choose to ship a hard copy of your mammogram, the 24-hour recheck period will start after we receive it in the post.</p>
             </div>

             <div className="card8-main-buttons">
                      
                      <AnswerButtons
                      text={"I can upload the digital copy ➔"}
                      className={`${isSelect1 ? "answer-buttons-clicked" : "answer-buttons"}`}
                      handleClick={() => {gV.p = 6; gV.preferTo = "upload"; setIsSelect1(true); setIsSelect2(false);  setGlobalState("formDestiny" , 3);  }  }
                     />

                     <AnswerButtons
                      text={"I prefer to ship them ➔"}
                      className={`${isSelect2 ? "answer-buttons-clicked" : "answer-buttons"}`}
                      handleClick={() => {gV.p = 7; gV.preferTo="ship"; setIsSelect2(true); setIsSelect1(false);  setGlobalState("formDestiny" , 4);  }  }
                     />
                


             </div>


        </div>

    </div>;
}

export default Card8;