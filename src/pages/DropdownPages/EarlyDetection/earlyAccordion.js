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
  width:"80%",
  
  
  
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


export default function EartlyAccordion() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="mui-widthh" >



      <Accordion
       
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >Symptoms and Signs</Typography>
        </AccordionSummary>


        <AccordionDetails>

           <div style={{display: "flex", flexDirection: "column", gap:"16px" }}>

            <p className="accordions-text">Every person should know the symptoms and signs of breast cancer, and any time an abnormality is discovered, it should be investigated by a healthcare professional.</p>
            <p className="accordions-text">Most people who have breast cancer symptoms and signs will initially notice only one or two, and the presence of these symptoms and signs do not automatically mean that you have breast cancer.</p>
            <p className="accordions-text">By performing monthly breast self-exams, you will be able to more easily identify any changes in your breast. Be sure to talk to your healthcare professional if you notice anything unusual</p>
            <p className="accordions-text"><span>A Change In How The Breast Or Nipple Looks Or Feels</span></p>
             <p className="accordions-text ml-20">• Nipple tenderness or a lump or thickening in or near the breast or underarm area</p>
             <p className="accordions-text ml-20">• A change in the skin texture or an enlargement of pores in the skin of the breast (some describe this as similar to an orange peel’s texture)</p>
             <p className="accordions-text ml-20">• A lump in the breast (It’s important to remember that all lumps should be investigated by a healthcare professional, but not all lumps are cancerous.)</p>
           <p className="accordions-text"><span> A Change In The Breast Or Nipple Appearance</span></p>
           <p className="accordions-text ml-20">Any unexplained change in the size or shape of the breast</p>
           <p className="accordions-text ml-20">• Dimpling anywhere on the breas</p>
           <p className="accordions-text ml-20">• Unexplained swelling of the breast (especially if on one side only)</p>
           <p className="accordions-text ml-20">• Unexplained shrinkage of the breast (especially if on one side only)</p>
           <p className="accordions-text ml-20">• Recent asymmetry (unequal or lack of sameness) of the breasts. Although it is common for women to have one breast that is slightly larger than the other, if the onset of asymmetry is recent, it should be checked.</p>
           <p className="accordions-text ml-20">• Nipple that is turned slightly inward or inverted</p>
           <p className="accordions-text ml-20">• Skin of the breast, areola, or nipple that becomes scaly, red, or swollen or may have ridges or pitting resembling the skin of an orange</p>
           <p className="accordions-text"><span>Any Nipple Discharge—Particularly Clear Discharge Or Bloody Discharge</span></p>
           <p className="accordions-text">It is also important to note that a milky discharge that is present when a woman is not breastfeeding should be checked by her doctor, although it is not linked with breast cancer</p>
           <p className="accordions-text">Let your doctor know about any nipple discharge, clear, bloody or milky. The most concerning discharges are bloody or clear.</p>
           <p className="accordions-text" style={{ marginTop: "30px", textDecoration:"underline"}}>If I have some symptoms, is it likely to be cancer?</p>
        
           <p className="accordions-text">Most often, symptoms are not due to cancer, but any breast cancer symptom you notice should be investigated as soon as it is discovered. If you have any of these symptoms, you should tell your healthcare provider so that the problem can be diagnosed and treated.</p>
           <p className="accordions-text" style={{ marginTop: "30px", textDecoration:"underline"}}>If I have no symptoms, should I assume I do not have cancer?</p>
           <p className="accordions-text">Although there’s no need to worry, regular screenings are always important. Your doctor can check for breast cancer before you have any noticeable symptoms. During your office visit, your doctor will ask about your personal and family medical history and perform a physical examination. In addition, your doctor may order one or more imaging tests, such as a mammogram.</p>
           </div>

        
        
        </AccordionDetails>
    
    
    
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >Breast Self-Exam</Typography>
        </AccordionSummary>


        <AccordionDetails>
      
      
       
       <div style={{display: "flex", flexDirection: "column", gap:"16px" }}>
       <p className="accordions-text"></p>
        <p className="accordions-text"><span>Once A Month</span></p>
        <p className="accordions-text">Adult women of all ages are encouraged to perform breast self-exams at least once a month. Johns Hopkins Medical center states,</p>
        <p className="accordions-text">“Forty percent of diagnosed breast cancers are detected by women who feel a lump, so establishing a regular breast self-exam is very important.”</p>
        <p className="accordions-text">While mammograms can help you to detect cancer before you can feel a lump, breast self-exams help you to be familiar with how your breasts look and feel so you can alert your healthcare professional if there are any changes.</p>
        <p style={{marginTop:"40px"}} className="accordions-text"><span>How Should A Breast Self-Exam Be Performed?</span></p>
        <p style={{textDecoration:"underline"}}  className="accordions-text">1. In the Shower</p>
        <p className="accordions-text">With the pads/flats of your 3 middle fingers, check the entire breast and armpit area pressing down with light, medium, and firm pressure. Check both breasts each month feeling for any lump, thickening, hardened knot, or any other breast changes</p>
        <p style={{marginTop:"40px", textDecoration:"underline"}}  className="accordions-text">2. In Front of a Mirror</p>
        <p className="accordions-text">Visually inspect your breasts with your arms at your sides. Next, raise your arms high overhead.</p>
        <p className="accordions-text">Look for any changes in the contour, any swelling, or dimpling of the skin, or changes in the nipples. Next, rest your palms on your hips and press firmly to flex your chest muscles. Left and right breasts will not exactly match—few women’s breasts do, so look for any dimpling, puckering, or changes, particularly on one side.</p>
        <p style={{marginTop:"40px", textDecoration:"underline"}} className="accordions-text">3. Lying Down</p>
        <p className="accordions-text">When lying down, the breast tissue spreads out evenly along the chest wall. Place a pillow under your right shoulder and your right arm behind your head. Using your left hand, move the pads of your fingers around your right breast gently covering the entire breast area and armpit.</p>
        <p className="accordions-text">Use light, medium, and firm pressure. Squeeze the nipple; check for discharge and lumps. Repeat these steps for your left breast.</p>
        <p  style={{marginTop:"40px", textDecoration:"underline"}} className="accordions-text">Can I Rely On Breast Self-Exams Alone To Be Sure I Am Breast Cancer Free?</p>
        <p className="accordions-text">Mammography can detect tumors before they can be felt, so screening is key for early detection. But when combined with regular medical care and appropriate guideline-recommended mammography, breast self-exams can help women know what is normal for them so they can report any changes to their healthcare provider.</p>
        <p className="accordions-text">If you find a lump, schedule an appointment with your doctor, but don’t panic — 8 out of 10 lumps are not cancerous. For additional peace of mind, call your doctor whenever you have concerns.</p>
        <p className="accordions-text"></p>
        <p className="accordions-text"></p>
        <p className="accordions-text"></p>
        <p className="accordions-text"></p>
    
    
    
        </div>
        
        
        </AccordionDetails>
    
    
    
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >Mammogram</Typography>
        </AccordionSummary>


        <AccordionDetails>

        <div style={{display: "flex", flexDirection: "column", gap:"16px" }}>
       <p className="accordions-text"><span>What Is A Mammogram?</span></p> 
       <p className="accordions-text">A mammogram is an x-ray that allows a qualified specialist to examine the breast tissue for any suspicious areas. The breast is exposed to a small dose of ionizing radiation that produces an image of the breast tissue.</p> 
       <p style={{marginTop:"30px"}} className="accordions-text"><span>Why Do I Need A Mammogram?</span></p> 
       <p className="accordions-text">Mammograms can often show a breast lump before it can be felt. They also can show tiny clusters of calcium called micro-calcifications. Lumps or specks can be caused by cancer, fatty cells, or other conditions like cysts. Further tests are needed to find out if abnormal cells are present.</p> 
       <p style={{marginTop:"30px"}} className="accordions-text"><span>Recommendations for all women:</span></p> 
       <p className="accordions-text">Women 40 and older should have mammograms every 1 or 2 years. Women who are younger than 40 and have risk factors for breast cancer should ask their healthcare professional whether mammograms are advisable and how often to have them. Even women who have no symptoms and no known risks for breast cancer should have regularly scheduled mammograms to help detect potential breast cancer at the earliest possible time.</p> 
       <p style={{marginTop:"30px"}} className="accordions-text"><span>What Happens If My Mammogram Results Are Abnormal?</span></p> 
       <p className="accordions-text">If the mammogram shows an abnormal area of the breast, your doctor will order additional tests offering clearer, more detailed images of that area</p>
       <p className="accordions-text">Although lumps are usually non-cancerous, the only way to be certain is to perform additional tests, such as an ultrasound or MRI. If further tests show that the mass is solid, your radiologist may recommend a biopsy, a procedure in which cells are removed from a suspicious area to check for the presence of cancer.</p>
     
       </div>
        
        
        </AccordionDetails>
    
    
    
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >Clinical Breast-Exam</Typography>
        </AccordionSummary>

      
        <AccordionDetails>


        <div style={{display: "flex", flexDirection: "column", gap:"16px" }}>
       <p className="accordions-text"><span>What’s The Difference Between A Breast Self-Exam And A Clinical Breast Exam?</span></p> 
       <p className="accordions-text">A clinical breast exam is performed by a healthcare professional who is trained to recognize many different types of abnormalities and warning signs. This in-office exam will most likely be completed by your family physician or gynecologist at your annual exam, whereas your breast self-exam is something every woman should do at once at month at home.</p> 
       <p style={{marginTop:"30px"}} className="accordions-text"><span>A Visual Check of Skin and Tissue</span></p> 
       <p className="accordions-text">During a clinical breast exam, your healthcare provider checks your breasts’ appearance. You may be asked to raise your arms over your head, let them hang by your sides, or press your hands against your hips. These postures allow your healthcare provider to look for differences in size or shape between your breasts. The skin covering your breasts is checked for any rash, dimpling, or other abnormal signs. Your nipples may be checked to see if fluid is expressed when lightly squeezed.</p> 
       <p style={{marginTop:"30px"}} className="accordions-text"><span>A Manual Check for Unusual Texture or Lumps</span></p> 
       <p className="accordions-text">Using the pads of the fingers, your healthcare provider checks your entire breast, underarm, and collarbone area for any lumps or abnormalities. It is worth noting that some women have breast tissue that appears to be full of tiny fibrous bumps or ridges throughout the breast tissue, known as fibrocystic breasts. Overall lumpy tissue is something your provider will want to note but is unrelated to cancer.</p> 
       <p className="accordions-text">A suspicious lump –the type your physician is checking for– is generally about the size of a pea before anyone can feel it in the breast tissue. The manual exam is done on one side and then the other. Your healthcare provider will also check the lymph nodes near the breast to see if they are enlarged.</p> 
     
       <p style={{marginTop:"30px"}} className="accordions-text"><span>An Assessment of Any Suspicious Area</span></p> 
       <p className="accordions-text">If a lump is discovered, your healthcare provider will note its size, shape, and texture. He or she will also check to see if the lump moves easily. Benign lumps often feel different from cancerous ones, but any lump found will likely need to be examined with further diagnostic measures.</p>
       <p className="accordions-text">It may be helpful to know that lumps that appear soft, smooth, round, and movable are likely to be either benign tumors or cysts. A lump that is hard and oddly-shaped and feels firmly attached within the breast is more likely to be cancer, but further tests are needed to diagnose the problem.</p>
       <p style={{marginTop:"30px"}} className="accordions-text"><span>The Value of Clinical Breast Exams</span></p> 
       <p className="accordions-text">Clinical Breast exams are an important part of early detection. Although most lumps are discovered through breast self-exams, an experienced professional may notice a suspicious place that fails to register as a warning in the patient’s mind.</p>

      </div>
       
        
     
        </AccordionDetails>
      
      
      
      
      
      
      </Accordion>




    </div>
  );
}

