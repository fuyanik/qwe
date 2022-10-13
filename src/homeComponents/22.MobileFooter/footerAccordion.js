import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";


import { MdExpandMore } from "react-icons/md";





//#FBFBFB;

//açılan pencerenin içi ve bottom çizgiler
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: "#FBFBFB",
  
  "&:not(:last-child)": {
    border:"none"
  },

  "&:before": {
    display: "inline"
  }
}));

// yandaki iconlar
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      
     <MdExpandMore className="accordion-icon"
    
     
     />
    }

    {...props}
  />

  //İÇ GENEL
))(({ theme }) => ({
    
  paddingRight: "0px",
  backgroundColor: "white;",
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
  backgroundColor: "white;",

  
}));


export default function MobileFooterCustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="mobile-footer-accordion">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{
              color: "#000000",
              fontFamily : "'Sofia Pro'",
              fontSize: "17.6px",
              fontWeight: "500",
              display: "inline",
              width: "100%",

          }} >Facts</Typography>
        </AccordionSummary>

        <AccordionDetails>

          <ul  className="mobile-footer-accordion-list">
             
         
          <li>Human Error</li>
          <li>Missed Diagnosis</li>
          <li>Early Detection</li>
          <li> Statistics</li>
          <li> Resources</li>
          
          
           </ul>
         
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography style={{
              color: "#000000",
              fontFamily : "'Sofia Pro'",
              fontSize: "17.6px",
              fontWeight: "500"

          }} >Recheck</Typography>
        </AccordionSummary>
       
        <AccordionDetails>
        <ul  className="mobile-footer-accordion-list">
             
         
             <li>How it Works</li>
             <li>Technology</li>
             <li>Journey of a Mammogram</li>
             <li>What is Next? </li>
             <li> Radiology Team</li>
             <li> Report Samples</li>
             
             
              </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography style={{
              color: "#000000",
              fontFamily : "'Sofia Pro'",
              fontSize: "17.6px",
              fontWeight: "500"

          }}  >People</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ul  className="mobile-footer-accordion-list">
             
         
             <li>Our Story</li>
             <li>Number</li>
             <li>Stories</li>
             <li>Donate </li>
             <li> Research Fund</li>
             <li> Join the Team</li>
             
             
              </ul>
     
        </AccordionDetails>
      </Accordion>


      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography style={{
              color: "#000000",
              fontFamily : "'Sofia Pro'",
              fontSize: "17.6px",
              fontWeight: "500"

          }}  >Help</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ul  className="mobile-footer-accordion-list">
             
         
             <li>Contact</li>
             <li>FAQ</li>
             <li>Stage 4 Support</li>
             <li>Getting a Copy of Yout Mammogram </li>
             <li> Research Fund</li>
             <li> Breast Self-Exam Reminder</li>
             
             
              </ul>
     
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

