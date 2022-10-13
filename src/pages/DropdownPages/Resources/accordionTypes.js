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

export default function AccordionTypes() {
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
          }} >Ductal Carcinoma In Situ (DCIS) </Typography>
        </AccordionSummary>


        <AccordionDetails>

           <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>
             <p>Ductal carcinoma in situ (DCIS) is a non-invasive cancer where abnormal cells have been found in the lining of the breast milk duct. The atypical cells have not spread outside of the ducts into the surrounding breast tissue. Ductal carcinoma in situ is very early cancer that is highly treatable, but if it’s left untreated or undetected, it may spread into the surrounding breast tissue.</p>
             <p style={{marginTop:"40px"}}> <span>What does the term, “in situ” mean?</span></p>
             <p>The earliest stages of cancers are called “carcinoma in situ.” Carcinoma means “cancer” and in situ means “in the original place.”</p>
           
           </div>

        
        
        </AccordionDetails>
    
    
    
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} > Invasive Ductal Carcinoma (IDC)</Typography>
        </AccordionSummary>


        <AccordionDetails>
      
      
       
       <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>

            <p>The abnormal cancer cells that began forming in the milk ducts have spread beyond the ducts into other parts of the breast tissue. Invasive cancer cells can also spread to other parts of the body. It is also sometimes called infiltrative ductal carcinoma.</p>
            <p>IDC is the most common type of breast cancer, making up nearly 70- 80% of all breast cancer diagnoses. IDC is also the type of breast cancer that can most commonly affects men.</p>
     
            <p style={{marginTop:"40px"}}><span>What is the Difference between Invasive Ductal Carcinoma (IDC) and Ductal Carcinoma In Situ (DCIS)?</span></p>
            <p>DCIS means the cancer is still contained in the milk duct and has not invaded any other area. IDC is cancer that began growing in the duct and is invading the surrounding tissue. Cancer staging done by a physician, along with a physical exam and medical history can help identify the best treatment options.</p>
        </div>
        
        
        </AccordionDetails>
    
    
    
      </Accordion>


      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >Lobular Carcinoma In Situ(LCIS)</Typography>
        </AccordionSummary>


        <AccordionDetails>

        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"18px" }}>
      
             <p>Lobular Carcinoma In Situ (LCIS) is a condition where abnormal cells are found in the lobules of the breast. The atypical cells have not spread outside of the lobules into the surrounding breast tissue.</p>
             <p>LCIS is highly treatable and seldom becomes invasive cancer. However, having LCIS in one breast increases the risk of developing breast cancer in either breast.</p>
             
             <p style={{marginTop:"40px"}}><span>What is the Difference between Lobular Carcinoma In Situ (LCIS) and Ductal Carcinoma In Situ (DCIS)?</span></p>
             <p>LCIS is very similar to DCIS. LCIS is cancer that’s in the lobules; DCIS is cancer that’s in the milk ducts.s</p>
           
       </div>
        
        
        </AccordionDetails>
    
    
    
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >Triple Negative Breast Cancer</Typography>
        </AccordionSummary>

      
        <AccordionDetails>


        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>
          
             <p><span>What is Triple Negative Breast Cancer?</span></p>
             <p>A diagnosis of triple negative breast cancer means that the three most common types of receptors known to fuel most breast cancer growth–estrogen, progesterone, and the HER-2/neu gene– are not present in the cancer tumor. This means that the breast cancer cells have tested negative for hormone epidermal growth factor receptor 2 (HER-2), estrogen receptors (ER), and progesterone receptors (PR).</p>
             <p>Since the tumor cells lack the necessary receptors, common treatments like hormone therapy and drugs that target estrogen, progesterone, and HER-2 are ineffective. Using chemotherapy to treat triple negative breast cancer is still an effective option. In fact, triple negative breast cancer may respond even better to chemotherapy in the earlier stages than many other forms of cancer.</p>
             
             <p style={{marginTop:"40px"}}><span>Who is at Risk for Triple Negative Breast Cancer?</span></p>
             <p>15% of breast cancer is triple negative Triple negative breast cancer occurs in about 10-20% of diagnosed breast cancers and is more likely to affect younger people, African Americans, Hispanics, and/or those with a BRCA1 gene mutation.</p>
             <p style={{marginTop:"40px"}}><span>What is the Prognosis for Triple Negative Breast Cancer?</span></p>
             <p>Triple negative breast cancer can be more aggressive and difficult to treat. Also, the cancer is more likely to spread and recur. The stage of breast cancer and the grade of the tumor will influence your prognosis. Research is being done currently to create drug therapies that are specific for triple negative breast cancer.</p>
           
           
            
   
      </div>
        
     
        </AccordionDetails>
      
      
      </Accordion>

      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >Inflammatory Breast Cancer (IBC)</Typography>
        </AccordionSummary>

      
        <AccordionDetails>


        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>
          
             <p><span>What is Inflammatory Breast Cancer (IBC)?</span></p>
             <p>Inflammatory breast cancer is an an aggressive and fast growing breast cancer in which cancer cells infiltrate the skin and lymph vessels of the breast. It often produces no distinct tumor or lump that can be felt and isolated within the breast. But when the lymph vessels become blocked by the breast cancer cells, symptoms begin to appear.</p>

             <p style={{marginTop:"40px"}}><span>What are the Symptoms of Inflammatory Breast Cancer?</span></p>
             <p>Early IBC symptoms may include persistent itching and the appearance of a rash or small irritation similar to an insect bite. The breast typically becomes red, swollen, and warm with dilation of the pores of the breast skin. The skin may appear pitted like an orange peel, and nipple changes such as inversion, flattening, or dimpling may occur.</p>
             <p>Mastitis, an infection of the breasts, can carry similar symptoms. If your primary care physician or gynecologist says it is mastitis, but symptoms persist after a one week treatment of antibiotics, it’s important to be seen by a breast specialist.</p>
             
             <p style={{marginTop:"40px"}}><span>How is Inflammatory Breast Cancer Diagnosed and Treated?</span></p>
             <p>A diagnosis of inflammatory breast cancer is classified as Stage 3 breast cancer and is diagnosed through your physician’s clinical judgment and a biopsy. A biopsy for inflammatory breast cancer is a biopsy of the skin of the breast.</p>
             <p>If the pathology results show that the skin and dermal lymphatics of the breast skin contain breast cancer cells, this confirms it is inflammatory breast cancer.</p>
             <p>Typically, IBC grows rapidly and requires aggressive treatment. This is the only type of breast cancer that requires urgent treatment, beginning with chemotherapy. Most oncologists recommend both local treatment of the affected breast and systemic treatment (whole body treatment).</p>
             <p>Surgery, radiation therapy, chemotherapy and hormone treatments may be included in the regimen. With aggressive treatment, the survival rate for inflammatory breast cancer patients has improved significantly in recent years.</p>
           
            
   
      </div>
        
     
        </AccordionDetails>
      
      
      </Accordion>

      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >Metastatic Breast Cancer</Typography>
        </AccordionSummary>

      
        <AccordionDetails>


        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>
          
             <p><span>What is Metastatic Breast Cancer?</span></p>
             <p>Metastatic breast cancer is also classified as Stage 4 breast cancer. The cancer has spread to other parts of the body. This usually includes the lungs, liver, bones or brain.</p>
             
             <p style={{marginTop:"40px"}}><span>How does Cancer Spread, or Metastasize?</span></p>
             <p>The spread of cancer usually happens through one or more of the following steps:</p>
            
             <p style={{marginLeft:"28px"}}>• Cancer cells invade nearby healthy cells. When the healthy cell is taken over, it too can replicate more abnormal cells.</p>
             <p style={{marginLeft:"28px"}}>• Cancer cells penetrate into the circulatory or lymph system. Cancer cells travel through the walls of nearby lymph vessels or blood vessels.</p>
             <p style={{marginLeft:"28px"}}>• Migration through circulation. Cancer cells are carried by the lymph system and the bloodstream to other parts of the body.   </p>
             <p style={{marginLeft:"28px"}}>• Cancer cells lodge in capillaries. Cancer cells stop moving as they are lodged in capillaries at a distant location and divide and migrate into the surrounding tissue.</p>
             <p style={{marginLeft:"28px"}}>• New small tumors grow. Cancer cells form small tumors at the new location (called micrometastases.)</p>
            
            
             <p><span>Metastasis in the bone may cause:</span></p>
             <p style={{marginLeft:"28px"}}>• Severe, progressive pain</p>
             <p style={{marginLeft:"28px"}}>• Swelling</p>
             <p style={{marginLeft:"28px"}}>• Bones that are more easily fractured or broken</p>

             <p><span>Metastasis to the brain may cause: </span></p>
             <p style={{marginLeft:"28px"}}>• Persistent, progressively worsening headache or pressure to the head</p>
             <p style={{marginLeft:"28px"}}>• Vision disturbances</p>
             <p style={{marginLeft:"28px"}}>• Seizures</p>
             <p style={{marginLeft:"28px"}}>• Vomiting or nausea</p>
             <p style={{marginLeft:"28px"}}>• Behavioral changes or personality changes</p>
          
             <p><span>Metastasis to the liver may cause:</span></p>
             <p style={{marginLeft:"28px"}}>• Jaundice</p>
             <p style={{marginLeft:"28px"}}>• Itchy skin or rash</p>
             <p style={{marginLeft:"28px"}}>• Abnormally high enzymes in the liver</p>
             <p style={{marginLeft:"28px"}}>• Abdominal pain, appetite loss, nausea, and vomiting</p>

             <p><span>Metastasis to the lungs may cause:</span></p>
             <p style={{marginLeft:"28px"}}>• Chronic cough or inability to get a full breath</p>
             <p style={{marginLeft:"28px"}}>• Abnormal chest X-ray</p>
             <p style={{marginLeft:"28px"}}>• Chest pain</p>

             <p>Other nonspecific systemic symptoms of metastatic breast cancer can include fatigue, weight loss, and poor appetite, but it’s important to remember these can also be caused by medication or depression.</p>
            
           
           
            
   
      </div>
        
     
        </AccordionDetails>
      
      
      </Accordion>

      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >Breast Cancer During Pregnancy</Typography>
        </AccordionSummary>

      
        <AccordionDetails>


        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>
          
             <p><span>Can a Woman Get Breast Cancer During Pregnancy?</span></p>
             <p>It is possible to be diagnosed with breast cancer during pregnancy, although it is rare and the breast cancer is not caused by the pregnancy. Women who are diagnosed with breast cancer during pregnancy have tremendous additional strain due to concern for the safety of the unborn child. It can be a traumatic and extremely difficult situation, but there is still hope for both mother and child, thanks to the many treatment options available.</p>
             <p>If you are pregnant and have been diagnosed, be sure to communicate carefully with your obstetric care team as well as your oncology team, and it never hurts to verify that they have open communication with each other. Your medical team will take extra care in designing the treatment plan that best controls the breast cancer while protecting your unborn child.</p>
            
             <p style={{marginTop:"40px"}}><span>What Cancer Treatments are Safest During Pregnancy? </span></p>
             <p>Your treatment plan will depend on the size of the tumor, its location, and the term of your pregnancy. As with women who are not pregnant, surgery is usually the first step for treating early-stage breast cancer. Surgery during pregnancy can be safely performed with little risk to your unborn child, so your medical team will most likely proceed by removing the lump with a lumpectomy or mastectomy, and possibly some lymph nodes from under the arm.</p>
             <p>Chemotherapy may be a treatment option, depending on your cancer type and the stage of your pregnancy. There are specific windows of time during pregnancy that is safe to receive chemotherapy without harming the baby.</p>
             <p>The effects of hormone therapy on unborn children is not entirely understood. Because of this, if hormone therapy is prescribed, it will most likely be used only after the baby is born.</p>
             <p>Although the cancer itself cannot spread to and harm the unborn child, sometimes the best treatment plan for the mother may put the unborn child at risk. These decisions will require the expertise and consultation between your obstetrician, surgeon, medical oncologist, and radiation oncologist. You will also need the emotional support of family and friends and may benefit from the professional assistance of a skilled counselor or psychologist.</p>
             <p style={{marginTop:"40px"}}><span></span></p>
            

           
            
   
      </div>
        
     
        </AccordionDetails>
      
      
      </Accordion>

      <Accordion
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >Other Types</Typography>
        </AccordionSummary>

      
        <AccordionDetails>


        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>
          
        <p>Although by far, the most common breast cancer type is ductal carcinoma in situ (DCIS), there are other types that are less commonly seen.</p>
            
            <p style={{marginTop:"40px"}}><span>Medullary Carcinoma</span></p>
            <p>Medullary carcinoma accounts for 3-5% of all breast cancer types. The tumor usually shows up on a mammogram, but does not always feel like a lump. At times, it feels like a spongy change of breast tissue.</p>
      
            <p style={{marginTop:"40px"}}><span>Tubular Carcinoma</span></p>
            <p>Making up about 2% of all breast cancer diagnosis, tubular carcinoma cells have a distinctive tubular structure when viewed under a microscope. It is usually found through a mammogram and is a collection of cells that can feel like a spongy area of breast tissue rather than a lump. Typically this type of breast cancer is found in women aged 50 and above and usually responds well to hormone therapy.</p>
      
            <p style={{marginTop:"40px"}}><span>Mucinous Carcinoma (Colloid)</span></p>
            <p>Mucinous carcinoma represents approximately 1% to 2% of all breast cancers. The main differentiating features are mucus production and cells that are poorly defined. It also has a favorable prognosis in most cases.  </p>
      
            <p style={{marginTop:"40px"}}><span>Paget Disease of The Breast or Nipple</span></p>
            <p>This condition (also known as mammary Paget disease) is a rare type of cancer affecting the skin of the nipple and often the areola, which is the darker circle of skin around the nipple. Most people with Paget disease evident on the nipple also have one or more tumors inside the same breast; generally either ductal carcinoma in situ or invasive breast cancer (1–3). Paget disease is frequently misdiagnosed at first because the first noticeable symptoms can easily be confused with more common skin conditions affecting the nipple. Like all breast cancers, the prognosis for Paget disease depends on a variety of factors, including the presence or absence of invasive cancer and whether or not it has spread to nearby lymph nodes.</p>
           
                

      </div>
        
     
        </AccordionDetails>
      
      
      </Accordion>


   





    </div>
  );
}

