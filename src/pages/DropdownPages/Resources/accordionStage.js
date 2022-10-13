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

const YellowButton = ({text}) =>{
    return(
        <div className="accordions-yellow-button">  
           {text}
        </div>
    )
}

export default function AccordionStages() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };



  return (
    <div
    className="mui-widthh"
    >



      <Accordion
        
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >{"Stage 0 & 1"} </Typography>
        </AccordionSummary>


        <AccordionDetails>

           <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>
             <p><span>What Types Of Cancer Are Diagnosed As Stage 0 And 1 Breast Cancer?</span></p>
             <p>The stage of cancer indicates the size of the tumor of abnormal cells and whether or not those cells are contained to the place of origin. The most common type of breast cancer is ductal carcinoma in situ (DCIS), indicating the cancer cell growth starts in the milk ducts.</p>
             <p style={{marginTop:"40px"}}><spa >What does the term, “in situ” mean?</spa></p>
             <p>Stage 0 cancers are called “carcinoma in situ.” Carcinoma means cancer and “in situ” means “in the original place.” Three possible types of “in situ carcinoma” of the breast tissue are:</p>
             <p><span>DCIS</span> – Ductal carcinoma in situ</p>
             <p><span>LCIS</span> – Lobular carcinoma in situ</p>
             <p><span>Paget disease</span> of the nipple</p>
             <p style={{marginTop:"40px"}} ><span>What Is Stage 0 DCIS?</span></p>
             <p>Stage 0 breast cancer, ductal carcinoma in situ (DCIS) is a non-invasive cancer where abnormal cells have been found in the lining of the breast milk duct. In Stage 0 breast cancer, the atypical cells have not spread outside of the ducts or lobules into the surrounding breast tissue. Ductal Carcinoma In Situ is very early cancer that is highly treatable, but if it’s left untreated or undetected, it can spread into the surrounding breast tissue.</p>
          
             <p style={{marginTop:"40px"}} ><span>What is Stage 0 LCIS?</span></p>
             <p>Lobular carcinoma in situ at Stage 0 generally is not considered cancer. Although it has carcinoma in the name, it really describes a growth of abnormal but non-invasive cells forming in the lobules. Some experts prefer the name lobular neoplasia for this reason because it accurately refers to the abnormal cells without naming them as cancer. LCIS, however, may indicate a woman has an increased risk of developing breast cancer.</p>
             <p>If you have been diagnosed with LCIS, your doctor may recommend regular clinical breast exams and mammograms. He or she may also prescribe Tamoxifen, a hormone therapy medication that helps prevent cancer cells from growing.</p>


             <p style={{marginTop:"40px"}}>What Does It Mean to Have Stage 1 Breast Cancer?</p>
             <p>In Stage 1 breast cancer, cancer is evident, but it is contained to only the area where the first abnormal cells began to develop. The breast cancer has been detected in the early stages and can be very effectively treated.</p>
             <p>Stage 1 can be divided into Stage 1A and Stage 1B. The difference is determined by the size of the tumor and the lymph nodes with evidence of cancer.</p>
            
             <p style={{marginTop:"40px",textDecoration:"underline"}}>Stage 1A breast cancer means the following description applies:</p>
             <p>The tumor is smaller than the approximate size of a peanut (2 centimeters or smaller) AND has not spread to the lymph nodes. (2.5 centimeters=1 inch)</p>
        
             <p style={{marginTop:"40px",textDecoration:"underline"}}>Stage 1B breast cancer means one of the following descriptions applies:</p>
             <p>Lymph nodes have cancer evidence with small clusters of cells between the approximate size of a pinprick to the approximate width of a grain of rice (.2mm to 2.0 mm).</p>
             {YellowButton({text:"and either"})}
             <p>No actual tumor is found in the breast.</p>
             {YellowButton({text:"or"})}
             <p>The tumor is smaller than the approximate size of a peanut (2 centimeters or smaller). (2.5 centimeters=1 inch)</p>
            
             <p style={{marginTop:"40px"}} >Similar to stage 0, breast cancer at this stage is very treatable and survivable. When breast cancer is detected early, and is in the localized stage (there is no sign that the cancer has spread outside of the breast), the 5-year relative survival rate is 100%.</p>
            
              <p style={{marginTop:"40px"}} > <span>What Should a Person With Stage 0 or Stage 1 Breast Cancer Expect Regarding Treatment?</span></p>
              <p>Even though Stage 0 breast cancer is considered “non-invasive,” it does require treatment, typically surgery or radiation, or a combination of the two. Chemotherapy is usually not part of the treatment regimen for earlier stages of cancer.</p>
              <p>Stage 1 is highly treatable, however, it does require treatment, typically surgery and often radiation, or a combination of the two. Additionally, you may consider hormone therapy, depending on the type of cancer cells found and your additional risk factors. Like stage 0, Chemotherapy is often not necessary for earlier stages of cancer.</p>
           </div>

        
        
        </AccordionDetails>
    
    
    
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >Stage2</Typography>
        </AccordionSummary>


        <AccordionDetails>
      
      
       
       <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>


           <p>Stage 2 means the breast cancer is growing, but it is still contained in the breast or growth has only extended to the nearby lymph nodes.</p>
           <p>This stage is divided into groups: Stage 2A and Stage 2B. The difference is determined by the size of the tumor and whether the breast cancer has spread to the lymph node</p>
           <p>For Stage 2 breast cancer, chemotherapy is usually done first, followed by surgery and radiation therapy.</p>
          
          
            <p style={{marginTop:"40px",textDecoration:"underline"}}>Stage IIA Breast Cancer Means One Of The Following Descriptions Applies.</p>
            {YellowButton({text:"Either"})}

            <p>No actual tumor is associated with the cancerous cells and less than four auxillary lymph nodes have cancer cells present.</p>
            
            {YellowButton({text:"or"})}
            <p>The tumor is less than 2 centimeters and less than four auxillary lymph nodes have cancer cells present.</p>
        
            {YellowButton({text:"or"})}
            <p>The tumor is between 2 and 5 centimeters and has not yet spread to the lymph nodes.</p>
     
            <p style={{marginTop:"40px",textDecoration:"underline"}}>Stage IIB Breast Cancer Means One Of The Following Descriptions Applies.</p>
            {YellowButton({text:"Either"})}
            <p>The tumor is between the 2 and 5 centimeters and has spread to less than four axillary lymph nodes.</p>
            {YellowButton({text:"or"})}
            <p>The tumor is larger than five centimeters, but has not spread to any axillary lymph nodes.</p>
     
     
        </div>
        
        
        </AccordionDetails>
    
    
    
      </Accordion>


      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >Stage3</Typography>
        </AccordionSummary>


        <AccordionDetails>

        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"18px" }}>
      
            <p>Stage 3 cancer means the breast cancer has extended to beyond the immediate region of the tumor and may have invaded nearby lymph nodes and muscles, but has not spread to distant organs. Although this stage is considered to be advanced, there are a growing number of effective treatment options.</p>
            <p>This stage is divided into three groups: Stage 3A, Stage 3B, and Stage 3C. The difference is determined by the size of the tumor and whether cancer has spread to the lymph nodes and surrounding tissue.</p>
          
            <p style={{marginTop:"40px",textDecoration:"underline"}}>Stage 3A Breast Cancer Means One Of The Following Descriptions Applies.</p>
            {YellowButton({text:"Either"})}
            <p>No actual tumor is associated with the cancerous cells or the tumor may be any size, AND the nearby lymph nodes (4 or more nodes with as many as 9 affected) contain cancer.</p>
            {YellowButton({text:"or"})}
            <p>The tumor is larger than the approximate size of a small lime (more than 5 centimeters), AND small clusters of breast cancer cells are found in the lymph nodes between the approximate size of a pinprick and the width of a grain of rice. (.2mm – 2.0mm.)</p>
            {YellowButton({text:"or"})}
            <p>The tumor is larger than the approximate size of a small lime (over 5 centimeters), AND the cancer has spread to 1, 2, or 3 lymph nodes under the arm or near the breastbone.</p>
            
            <p style={{marginTop:"40px"}}>Stage 3B Breast Cancer Means The Following Descriptions Apply.</p>
            <p>The tumor may be any size, AND cancer has invaded the chest wall or breast skin with evidence of swelling, inflammation, or ulcers (such as with cases like inflammatory breast cancer). The breast cancer may also have invaded up to 9 nearby lymph nodes</p>
           
            <p style={{marginTop:"40px"}}>Stage 3C Breast Cancer Means One Of The Following Descriptions Applies.</p>
            {YellowButton({text:"Either"})}
            <p>No actual tumor is found in the breast (such as with cases like inflammatory breast cancer) or the tumor may be any size, AND cancer may have invaded the chest wall or breast skin with evidence of swelling, inflammation, or ulcers and cancer has also invaded 10 or more lymph nodes under the arm</p>
            {YellowButton({text:"or"})}
            <p>No actual tumor is found in the breast or the tumor may be any size AND lymph nodes extending to the collarbone area are found to contain cancer.</p>
            {YellowButton({text:"or"})}
            <p>No actual tumor is found in the breast or the tumor may be any size AND lymph nodes under the arm and near the breastbone are found to contain cancer.</p>

             <p style={{marginTop:"40px"}}>“Inoperable” Breast Cancer Is Often Still Treatable</p>
             <p style={{marginTop:"40px"}}>Stage 3C breast cancer is divided into operable and inoperable stage 3C breast cancer. However, the term “inoperable” is not the same as “untreatable.”</p>
             <p>If your physician uses the word “inoperable,” it may simply mean that a simple surgery at this time would not be enough to get rid of all the breast cancer that is within the breast and the tissue around the breast. There must be healthy tissue at all of the margins of the breast when it is removed. Keep in mind that the breast tissue goes beyond the breast mound – it goes up to the clavicle and down to a few inches below the breast mound. There must also be tissue to close the chest wound after the surgery is performed.</p>
             <p>Another treatment method may be used first to shrink the breast cancer as much as possible before surgery is considered.</p>
             
             <p style={{marginTop:"40px"}}><span>What Should A Person With Stage 3 Breast Cancer Expect From Treatment? </span></p>
             <p>Stage 3 treatment options vary widely and may consist of mastectomy and radiation for local treatment and hormone therapy or chemotherapy for systemic treatment. Nearly every person with a Stage 3 diagnosis will do best with a combination of two or more treatments.</p>
             <p>Chemotherapy is always given first with the goal to shrink the breast cancer to be smaller within the breast and within the lymph nodes that are affected. This is known as neoadjuvant chemotherapy.</p>
             <p>Other possible treatments include biologic targeted therapy and immunotherapy. There may be various clinical trial options for interested patients with Stage 3 breast cancer.</p>
       </div>
        
        
        </AccordionDetails>
    
    
    
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >Stage 4</Typography>
        </AccordionSummary>

      
        <AccordionDetails>


        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>
          
            <p>Stage 4 breast cancer means that the cancer has spread to other areas of the body, such as the brain, bones, lung and liver.</p>
            <p>Although Stage 4 breast cancer is not curable, it is usually treatable and current advances in research and medical technology mean that more and more women are living longer by managing the disease as a chronic illness with a focus on quality of life as a primary goal. With excellent care and support, as well as personal motivation, Stage 4 breast cancer may respond to a number of treatment options that can extend your life for several years.</p>
           
            <p style={{marginTop:"40px"}}><span>What Should A Person With Stage 4 Breast Cancer Expect From Treatment?</span></p>
            <p>Treatment options vary widely depending on where you live, your access to specialists and sub-specialists, and your willingness to try therapies that are still in the experimental phase.</p>
            <p>Seek out oncology specialists who specialize in Stage 4 breast cancer. Discuss with your treatment team what clinical trials may be available for your clinical situation.</p>
            <p>During this time, be sure to surround yourself with a support system of friends and family.</p>

   
      </div>
        
     
        </AccordionDetails>
      
      
      </Accordion>


   





    </div>
  );
}

