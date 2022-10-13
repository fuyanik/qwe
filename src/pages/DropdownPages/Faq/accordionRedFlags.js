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
      
     <MdExpandMore className="accordion-icon"
    
     
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

export default function AccordionRedFlags() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };



  return (
    <div  className="mui-widthh">

      <Accordion
        
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{  fontFamily : "Sofia Pro", fontSize: "18.6px", fontWeight: "600", letterSpacing:"-0.9px"
          }} >What should I do if there are red-flags</Typography>
        </AccordionSummary>


        <AccordionDetails>
            
             
        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>
           <p>If there are any red flags, your report will have a clear warning stating "Show this report to your physician or radiologist immediately". If this is the case, you must give your recheck report to your physician as soon as possible.</p>
        </div>

        
        
        </AccordionDetails>
    
    
    
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography style={{  fontFamily : "Sofia Pro", fontSize: "18.6px", fontWeight: "600", letterSpacing:"-0.9px"
          }} > May I talk to one of your radiologist</Typography>
        </AccordionSummary>


        <AccordionDetails>
       
        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>
            <p>If you have special request before, during, or after the recheck process, you can talk to your assigned radiologists. Drop us an e-mail at <span>hello@vitamu.com</span>, and we can arrange this for you.</p>
        </div>
        
        
        </AccordionDetails>
    
    
    
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography style={{  fontFamily : "Sofia Pro", fontSize: "18.6px", fontWeight: "600", letterSpacing:"-0.9px"
          }} >Should I give the report to my physician</Typography>
        </AccordionSummary>


        <AccordionDetails>

        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>
         
         <p>If your recheck report tells the score of your mammogram result is BI-RADS 1, then you are breast cancer-free, and you do not have to give your recheck report to your physician.</p>
         <p>However, if there are any red flags, your report will have a clear warning stating "Show this report to your physician or radiologist immediately". If this is the case, you must give your recheck reports to your physician as soon as possible.</p>
        
        </div>
        
        
        </AccordionDetails>
    
    
    
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography style={{  fontFamily : "Sofia Pro", fontSize: "18.6px", fontWeight: "600", letterSpacing:"-0.9px"
          }}>What</Typography>
        </AccordionSummary>

      
        <AccordionDetails>


        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>
         
          <p>If you upload a digital copy of your mammogram we will deliver your final report within 24 hours. If you choose to ship a CD/USB stick containing your mammogram to us, or give us permission to acquire the mammograms from your medical centre, the final report will be completed within 24 hours after we have received the mammogram.</p>
           
        </div>
        
     
        </AccordionDetails>
      
      
      </Accordion>

      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography style={{  fontFamily : "Sofia Pro", fontSize: "18.6px", fontWeight: "600", letterSpacing:"-0.9px"
          }} >What will my recheck report include</Typography>
        </AccordionSummary>

      
        <AccordionDetails>


        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>
           <p> A recheck report includes three sections. </p>
           <p><span>1- General information </span>regarding breast symmetry and tissue density </p>
           <p><span>2- Overview of sensitive areas </span></p>
           <p><span>3- Detailed identification of red-flags </span>(including benign and malign tissues) if any are identified.</p>
           <p>If you have an all-clean mammogram then the report will include sections 1 and 2 above. If your mammogram indicates that there are some problems requiring a further mammogram screening, an ultrasound or a biopsy, the report will provide details of these problems at section 3 for your doctor to review. If you would like to see some sample reports, please click here. </p>
        
         </div>
        
     
        </AccordionDetails>
      
      
      </Accordion>

      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography style={{  fontFamily : "Sofia Pro", fontSize: "18.6px", fontWeight: "600", letterSpacing:"-0.9px"
          }} >How much do I pay for a recheck?</Typography>
        </AccordionSummary>

      
        <AccordionDetails>


        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>
            <p>A recheck will only cost you $120. No additional payments, no extra charges.</p>
            <p>So, how is it possible to get your mammogram checked by two radiologists at that price? </p>
            <p>The answer is our technology. Without our artificial intelligence, an average radiologist would spend a minimum of 35 minutes on a recheck. However, with our artificial intelligence, a radiologist needs just 5 minutes to identify all possible calcifications, benign and malign cells, and other forms of breast complications. The less time it takes for a radiologist to perform the recheck, the less you pay.</p>
         </div>
        
     
        </AccordionDetails>
      
      
      </Accordion>

      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography style={{  fontFamily : "Sofia Pro", fontSize: "18.6px", fontWeight: "600", letterSpacing:"-0.9px"
          }} >Can I get a written copy of my recheck report?</Typography>
        </AccordionSummary>

      
        <AccordionDetails>


        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>
          <p>Your recheck report will be digitally signed by our radiologists, meaning you will not need a physical copy. However, if you want one, just drop us an e-mail at hello@vitamu.com, and we can send you a physical copy for free.</p>
        </div>
        
     
        </AccordionDetails>
      
      
      </Accordion>


    </div>
  );
}

