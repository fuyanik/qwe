import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import waiting from "../images/waiting.png";
import completed from "../images/completed1.png";
import "../userPanel.css"
import { db } from "../../../firebase";
import { doc } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import { useState,useEffect } from "react";
import { getAuth } from "firebase/auth";

import { MdExpandMore } from "react-icons/md";
import { red } from "@mui/material/colors";
import { style } from "@mui/system";
import Stepper from "./stepper";
import VerticalLinearStepper from "./stepper";



//#FBFBFB;

//açılan pencerenin içi ve bottom çizgiler
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: "white",
  
  "&:not(:last-child)": {
    borderBottom: " 1px solid rgba(128, 128, 128, 0.31)"
  },

  "&:before": {
    display: "inline"
  }
}));

// yandaki iconlar
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      
     <MdExpandMore className="panel-accordion-icon"
    
     
     />
    }

    {...props}
  />

  //İÇ GENEL
))(({ theme }) => ({
  paddingRight: "0px",
  backgroundColor: "",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)"
  },
  "& .MuiAccordionSummary-content": {
   
    marginLeft: theme.spacing(3),
  
  }
}));

//iç METİN
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  paddingLeft: "1px",
  
}));


export default function CustomizedAccordions() {

  

  const auth = getAuth();
  const user = auth.currentUser;

 const [userActiveStep, setUserActiveStep] = useState(0);
 

 useEffect(() => {
   onSnapshot(doc(db, "VitamuUsersREAL", `${user.email}`), (doc) => {
     
     setUserActiveStep(doc.data().activeStep);
     console.log(userActiveStep);
  
    });

 } , []);

 const returnAccordionTittle = () => {

   if(userActiveStep === 0){
     return <p className="accordion-title-text"  >Recheck requested and payment authorized</p>
   }
   if(userActiveStep === 1){
     return <p className="accordion-title-text"  >Medical images obtained</p>
   }
   if(userActiveStep === 2){
     return <p className="accordion-title-text"  >Artificial intelligence evaluation is completed</p>
   }
   if(userActiveStep === 3){
     return <p className="accordion-title-text"  >Radiologist 1 evaluation is completed</p>
   }
   if(userActiveStep === 4){
     return <p className="accordion-title-text"  >Radiologist 2 evaluation is completed</p>
   }
   if(userActiveStep === 5){
     return <p className="accordion-title-text"  >Recheck completed</p>
   }

   if(userActiveStep === 6){
    return <p className="accordion-title-text"  >Recheck completed</p>
  }

}





  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (


    <div>

   {/* ACCORDİON 1 */}
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
       
       
    
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
         
          <p className="accordion-date" >June 15, 2022</p>
          
         
          <div className="accordion-title" style={{paddingRight: "10px"}}> 
             { userActiveStep === 6 ?  <img className="accordion-waiting" src={completed}/>  :  <img className="accordion-waiting2" src={waiting}/> }
          
         {returnAccordionTittle()    }  
          </div>
       
        </AccordionSummary>
        <AccordionDetails>

     

         <VerticalLinearStepper
         activeStep1={userActiveStep}
         />
       

    


        </AccordionDetails
        
        >
     
     
      </Accordion>



       {/* ACCORDİON 2 */}
     {/*
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
       
       
       
       
       
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
        
        <p className="accordion-date" >May 12, 2021</p>

          <div className="accordion-title"> 
             <img className="accordion-waiting" src={completed}/>
             <p className="accordion-title-text"  >Recheck Completed</p>
          </div>
        
        </AccordionSummary>
       
       
       
       
        <AccordionDetails>
      
        <VerticalLinearStepper
        activeStep1={6}
        />
        
        </AccordionDetails>
      </Accordion> 
      */
      }


       {/* ACCORDİON 3 */}
     { /* <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
      
      
        <AccordionSummary  aria-controls="panel3d-content" id="panel3d-header">
       
        <p className="accordion-date" >April 12, 2020</p>

          <div className="accordion-title"> 
             <img className="accordion-waiting" src={completed}/>
             <p className="accordion-title-text"  >Recheck Completed</p>
          </div>
        
         
          
       
        </AccordionSummary>
       
       
       
        <AccordionDetails>
       
        <VerticalLinearStepper
        activeStep1={6}
        />
        
     
        </AccordionDetails>
    </Accordion>  */}
   
    </div>
  );
}

