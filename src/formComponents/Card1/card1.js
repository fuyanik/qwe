import "./card1.css"
import gV from "../../gV.js";

import React from 'react';

const Card1 = ({animation}) => {

 


return (

    
    <div className={`card1 ${animation}`}>
    <div className="card1-main">
       
       <div className="card1-main-texts">
         <p> Hello there!</p>
         <p> It will take only 3 minutes to complete this form, and we promise the recheck will be worth your time. Let's get to know each other. My name is Jessica, and I am a board-certified radiologist specializing in breast cancer diagnosis.</p>
         <p> <span> What is your name? </span></p>
       </div>
    
       <h2>Please enter your full name.</h2>


        <input placeholder="Type your name here."  className="nameİnput" type="text" name="name" id="name"
        
        onChange={(e) => {
         
           gV.userName = e.target.value;

          {/*  db.collection("user").add({
            
            name: gV.userName,
           })  */}
       
       
        }}
        
        />


    </div>
    </div>


)

}

export default Card1;

