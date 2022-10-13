import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "./someQuestion.css";

import { MdExpandMore } from "react-icons/md";
var mq = window.matchMedia( "(max-width: 768px)" );




//#FBFBFB;

//açılan pencerenin içi ve bottom çizgiler
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  
  
   
  
  "&:not(:last-child)": {
    borderBottom:"1px solid rgb(255, 208, 0);",
  },

  "&:before": {
    display: "inline",
    
  }
}));

// yandaki iconlar
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
   sx={{
    height:"5px"
   }}
    expandIcon={
      
     <MdExpandMore style={{color:"black"}} className="accordion-icon"
    
     
     />
    }

    {...props}
  />

  //İÇ GENEL
))(({ theme }) => ({
  
  paddingRight: "0px",
 
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)"
  },
  "& .MuiAccordionSummary-content": {
   
    marginLeft: theme.spacing(-2),
  
  }
}));

//iç METİN
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  paddingLeft: "1px",

  
}));

const YellowButton = ({text}) => {
    return(
        <div className="accordions-yellow-button">  
           {text}
        </div>
    )
 }

export default function AccordionSomeQuestion({width}) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };



  return (
    <div
    className="accordionn-some-question"
    style={{ zIndex:"1",width:width, display:"flex", flexDirection:"column", gap:"0px"}}
    
    >



      <Accordion
        
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header"  style={{paddingBlock:"32px"}} >
          <Typography style={{  fontFamily : "Sofia Pro", fontSize: "18.6px",  fontWeight: "00", lineHeight:"25px"
          }} >For general questions about breast health</Typography>
        </AccordionSummary>


        <AccordionDetails  >
        
        <p style={{display:"flex", flexDirection:"row",width:"100%", gap:"4px", color:"gray"}} className="normal-text">Visit <span>Resources</span></p>

        
        </AccordionDetails>
    
    
    
      </Accordion>

      <Accordion
        
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" style={{paddingBlock:`${mq.matches ? "32px" : "28px" }`}}>
          <Typography style={{  fontFamily : "Sofia Pro", fontSize: "18.6px",      fontWeight: "00"
          }} >For general questions about recheck</Typography>
        </AccordionSummary>


        <AccordionDetails>
        
        <div style={{display:"flex", flexDirection:"column", gap:"20px"}}>
          <p style={{display:"flex", flexDirection:"row",width:"100%", gap:"6px", color:"rgb(101, 101, 101)"}} className="normal-text">Visit <span>Frequently Asked Questions.</span></p>
          <p style={{color:"gray"}} className="normal-text" >or</p>
          <p style={{display:"flex", flexDirection:"row",width:"100%", gap:"6px", color:"gray"}} className="normal-text">Drop us an-mail: <span>hello@vitamu.com</span></p>

        </div>


        
        </AccordionDetails>
    
    
    
      </Accordion>

      <Accordion
        
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" style={{paddingBlock:"32px"}}>
          <Typography style={{  fontFamily : "Sofia Pro", fontSize: "18.6px", fontWeight: "00",lineHeight:"25px"
          }} >Want to talk to a radiologist before recheck?</Typography>
        </AccordionSummary>


        <AccordionDetails>
        <p style={{display:"flex", flexDirection:"column",width:"100%", gap:"0", color:"rgb(101, 101, 101)"}} className="normal-text">Understood. Drop us an e-mail at:  <span>radiologist@vitamu.com</span></p>
        <p style={{marginTop:"15px",color:"rgb(101, 101, 101)",width:"100%"}} className="normal-text">You will get a response in 24 hours. </p>

        
        </AccordionDetails>
    
    
    
      </Accordion>

      <Accordion
        
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{  fontFamily : "Sofia Pro", fontSize: "18.6px",      fontWeight: "00"
          }} >Want to read recheck stories?</Typography>
        </AccordionSummary>


        <AccordionDetails>
        
        <p style={{marginTop:"15px",color:"rgb(101, 101, 101)",width:"100%"}} className="normal-text">We recheck more than +100.000 mammograms each year, and here are patient stories. Real ones.  </p>
        <p style={{marginTop:"10px",display:"flex", flexDirection:"row",width:"100%", gap:"6px", color:"rgb(101, 101, 101)"}} className="normal-text">Click <span>Here</span></p>
        
        
        </AccordionDetails>
    
    
    
      </Accordion>

    
      



   





    </div>
  );
}

