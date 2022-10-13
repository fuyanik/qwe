import "./card10.css"


import { useGlobalState } from "../../hookState";
import PayScreen from "../../pages/PayScreen/payScreen";


const Card10 = ({text1,text2,display}) => { 
  const [isPayScreen] = useGlobalState("isPayScreen");
   return (
    <> 
    {
    isPayScreen ? <PayScreen/> : 
    <div className="card10" style={{display:display}}>
       <div className="card10-main">
           <div className="card10-main-texts" >

             <p>{text1}</p>
             <p>{text2} </p>
             <p>If you cannot afford a recheck, please send us an e-mail at hello@vitamu.com. We can help.</p>
           </div>

           <input placeholder="$120.00" className="nameİnput"/>
            


       </div>
     </div>   }
   
     </>
     );

}


export default Card10;