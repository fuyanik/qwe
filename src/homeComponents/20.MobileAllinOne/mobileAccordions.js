import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import {Link} from 'react-router-dom';
import "./mobileAllinOne.css";

import { MdExpandMore } from "react-icons/md";




//#FBFBFB;

//açılan pencerenin içi ve bottom çizgiler
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: "#FBFBFB",
  
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


export default function MobileCustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="00" className="mobile-accordion">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{
              color: "#000000",
              fontFamily : "'Sofia Pro'",
              fontSize: "18.6px",
              fontWeight: "500",
              display: "inline",
              width: "100%",

          }} >Mammogram Recheck</Typography>
        </AccordionSummary>

        <AccordionDetails>

          <Typography style={{
             
              fontSize: "18px",
              fontFamily : "'Sofia Pro'",
              color: "#656565",
              maxWidth: "90%",
          }} > Already got your mammogram results? That’s great, but you should have them rechecked. We recheck your mammograms to ensure that you are breast cancer free.  </Typography>
                  <Link
    style={{  textDecoration: "none",}}
    to="/form">       <a 
                     
                     style={{position: "relative",  left: "8px", zIndex: "1", width:"240px", height:"47px"}}
                     className="button7" href="#"  
                     
                     
                     >

                      <span className="buttonText7"> Get Started</span>
                      <span className="line7">|</span>
                      <span className="arrow7"> ➔</span>

                     </a> </Link>
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
              fontSize: "18.6px",
              fontWeight: "500"

          }} >Self-Exam Reminder</Typography>
        </AccordionSummary>
       
        <AccordionDetails>
        <Typography style={{
             
             fontSize: "18px",
             fontFamily : "'Sofia Pro'",
             color: "#656565",
             maxWidth: "90%",
         }} >The best way to detect abnormalities in your breasts is to conduct a monthly breast self-exam. We can show you how to carry out a self-exam effectively and will send you a free reminder so that you won’t forget. </Typography>
        <h3 className="accordion-footer">Start Today ➔ </h3>
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
              fontSize: "18.6px",
              fontWeight: "500"

          }}  >Mammogram Scheduler</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography style={{
             
             fontSize: "18px",
             fontFamily : "'Sofia Pro'",
             color: "#656565",
             maxWidth: "90%",
         }} >Haven’t had a mammogram? If you are over 40, you should have one every year. We can find you an imaging centre where you can have your annual mammogram screening. </Typography>
        <h3 className="accordion-footer">Schedule yours today ➔ </h3>
     
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
              fontSize: "18.6px",
              fontWeight: "500"

          }}  >Mammogram Storage</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography style={{
             
             fontSize: "18px",
             fontFamily : "'Sofia Pro'",
             color: "#656565",
             maxWidth: "90%",
         }} >Keeping track of your mammograms is an important part of dealing with any potential serious medical problems. We provide a place for you to store all of your mammograms for free.  </Typography>
        <h3 className="accordion-footer">Learn More ➔ </h3>
     
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

