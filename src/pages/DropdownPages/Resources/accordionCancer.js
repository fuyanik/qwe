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


export default function AccordionCancer() {
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
          }} >What is Cancer?</Typography>
        </AccordionSummary>


        <AccordionDetails>

           <div style={{display: "flex", flexDirection: "column", gap:"16px" }}>
           <p className="accordions-text"><span>Understanding Breast Cancer</span></p>
            <p className="accordions-text">Cancer is a broad term for a class of diseases characterized by abnormal cells that grow and invade healthy cells in the body. Breast cancer starts in the cells of the breast as a group of cancer cells that can then invade surrounding tissues or spread (metastasize) to other areas of the body.</p>
            <p style={{marginTop:"44px"}} className="accordions-text"><span>What Causes Cancer to Develop?</span></p>
            <p className="accordions-text">Cancer begins in the cells which are the basic building blocks that make up tissue. Tissue is found in the breast and other parts of the body. Sometimes, the process of cell growth goes wrong and new cells form when the body doesn’t need them and old or damaged cells do not die as they should. When this occurs, a build up of cells often forms a mass of tissue called a lump, growth, or tumor.</p>
            <p className="accordions-text">Breast cancer occurs when malignant tumors develop in the breast. These cells can spread by breaking away from the original tumor and entering blood vessels or lymph vessels, which branch into tissues throughout the body. When cancer cells travel to other parts of the body and begin damaging other tissues and organs, the process is called metastasis.</p>
        
             
           </div>

        
        
        </AccordionDetails>
    
    
    
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >Causes of Breast Cancer</Typography>
        </AccordionSummary>


        <AccordionDetails>
      
      
       
       <div style={{display: "flex", flexDirection: "column", gap:"16px" }}>
       <p className="accordions-text">When you’re told that you have breast cancer, it’s natural to wonder what may have caused the disease. But no one knows the exact causes of breast cancer. Doctors seldom know why one woman develops breast cancer and another doesn’t, and most women who have breast cancer will never be able to pinpoint an exact cause. What we do know is that breast cancer is always caused by damage to a cell’s DNA.</p>
        <p style={{marginTop: "29px"}} className="accordions-text"><span>Known Risk Factors</span></p>
        <p className="accordions-text">Women with certain risk factors are more likely than others to develop breast cancer. A risk factor is something that may increase the chance of getting a disease. Some risk factors (such as drinking alcohol) can be avoided. But most risk factors (such as having a family history of breast cancer) can’t be avoided. Having a risk factor does not mean that a woman will get breast cancer. Many women who have risk factors never develop breast cancer.</p>
        
    
    
    
        </div>
        
        
        </AccordionDetails>
    
    
    
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >Breast Tumors</Typography>
        </AccordionSummary>


        <AccordionDetails>

        <div style={{display: "flex", flexDirection: "column", gap:"16px" }}>
        <p className="accordions-text"> As you learn about breast cancer, we will repeatedly reference the anatomy of the breast. Understanding the different parts and functions will help you better grasp the details of breast cancer. </p>
       
       <p style={{marginTop:"38px"}} className="accordions-text"><span>Knowing your body helps you to:</span></p> 
       <p className="accordions-text">Make informed decisions. Have a better dialogue with your doctor. Be aware of anything unusual.</p> 
       <p style={{marginTop:"38px"}} className="accordions-text"><span>Adipose Tissue</span></p> 
       <p className="accordions-text">The female breast is mostly made up of a collection of fat cells called adipose tissue. This tissue extends from the collarbone down to the underarm and across to the middle of the ribcage. As a woman ages, especially once she reaches menopause, the breast tissue contains more adipose (fatty) tissue.</p> 
       <p style={{marginTop:"38px"}} className="accordions-text"><span>Lobes, Lobules, and Milk Ducts</span></p> 
       <p className="accordions-text">A healthy female breast is made up of 12–20 sections called lobes. Each of these lobes is made up of many smaller lobules, the gland that produces milk in nursing women. Both the lobes and lobules are connected by milk ducts, which act as stems or tubes to carry the milk to the nipple. These breast structures are generally where the cancer begins to form.</p> 
       <p style={{marginTop:"38px"}} className="accordions-text"><span>What Happens If My Mammogram Results Are Abnormal?</span></p> 
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
          }} >Breast Anatomy</Typography>
        </AccordionSummary>

      
        <AccordionDetails>


        <div style={{display: "flex", flexDirection: "column", gap:"16px" }}>
        <p className="accordions-text"> As you learn about breast cancer, we will repeatedly reference the anatomy of the breast. Understanding the different parts and functions will help you better grasp the details of breast cancer. </p>

       <p  style={{marginTop:"30px"}} className="accordions-text"><span>Knowing your body helps you to:</span></p> 
       <p className="accordions-text">Make informed decisions. Have a better dialogue with your doctor. Be aware of anything unusual.</p> 
       <p style={{marginTop:"30px"}} className="accordions-text"><span>Adipose Tissue</span></p> 
       <p className="accordions-text">The female breast is mostly made up of a collection of fat cells called adipose tissue. This tissue extends from the collarbone down to the underarm and across to the middle of the ribcage. As a woman ages, especially once she reaches menopause, the breast tissue contains more adipose (fatty) tissue.</p> 
       <p style={{marginTop:"30px"}} className="accordions-text"><span>Lobes, Lobules, and Milk Ducts</span></p> 
       <p className="accordions-text">A healthy female breast is made up of 12–20 sections called lobes. Each of these lobes is made up of many smaller lobules, the gland that produces milk in nursing women. Both the lobes and lobules are connected by milk ducts, which act as stems or tubes to carry the milk to the nipple. These breast structures are generally where the cancer begins to form.</p> 
       

      </div>
       
        
     
        </AccordionDetails>
      
      
      
      
      
      
      </Accordion>


      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >Male Breast Cancer</Typography>
        </AccordionSummary>

      
        <AccordionDetails>


        <div style={{display: "flex", flexDirection: "column", gap:"16px" }}>
        <p className="accordions-text"> All people, whether male or female, are born with some breast cells and tissue. Even though males do not develop milk-producing breasts, a man’s breast cells and tissue can still develop cancer. Even so, male breast cancer is very rare. Less than one percent of all breast cancer cases develop in men, and only one in a thousand men will ever be diagnosed with breast cancer.</p>
        <p className="accordions-text"> Breast cancer in men is usually detected as a hard lump underneath the nipple and areola. Men carry a higher mortality than women do, primarily because awareness among men is less and they are less likely to assume a lump is breast cancer, which can cause a delay in seeking treatment. The majority of men diagnosed are over the age of 50.</p>
        <p style={{marginTop:"40px"}} className="accordions-text"><span>Infiltrating Ductal Carcinoma </span></p>
        <p className="accordions-text"> Of the men who develop breast cancer, the vast majority of those cases are Infiltrating Ductal Carcinoma (IDC), which means cells in or around the ducts begin to invade surrounding tissue. Very rarely, a man might be diagnosed with inflammatory breast cancer or Paget disease of the nipple, which is Ductal Carcinoma In Situ (DCIS) contained within the nipple and usually areola.</p>
       
       

      </div>
       
        
     
        </AccordionDetails>
      
      
      
      
      </Accordion>


      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >Groth of Breast Cancer</Typography>
        </AccordionSummary>

      
        <AccordionDetails>


        <div style={{display: "flex", flexDirection: "column", gap:"16px" }}>
        <p className="accordions-text"> <span>What Causes Breast Cancer Growth?</span> </p>
        <p className="accordions-text">There is much that we know and much that we have yet to understand. However, we do know that cancer spreads in three important ways:</p>
        <p className="accordions-text">Damaged cells replicate, creating more damaged cells and tumor growth. Our body’s hormones and chemicals can accelerate the growth of some tumors. Lymph and blood vessels can carry the cancer to others areas of the body, and lymph node examination can help pinpoint the progression of the disease. Damaged Cells</p>
        <p className="accordions-text">Healthy cells are the basic building blocks of all tissue and organs in the body. But when cell DNA (the cell’s wiring) is damaged, mutated cells begin to rapidly reproduce without following the pre-wired plan. Aggressive cell growth can form a tumor (or mass of tissue) that does not function as originally intended. These abnormal cells or groups of cells can progress into the disease known as breast cancer and can spread to other parts of the body.</p>
     
        <p  style={{marginTop:"30px"}} className="accordions-text"><span>Accelerated Growth</span></p>
        <p className="accordions-text"> The growth and spread of breast cancer can be difficult to grasp because cancer cell growth is often fueled by normally healthy chemicals of the body, like estrogen, progesterone, and the HER2/neu gene (a growth hormone). Although each of these three bodily chemicals can serve an important healthy function, when a cell becomes cancerous these chemicals can accelerate the growth of breast cancer tumors. These are known as prognostic factors of the breast cancer cells.</p>
        <p className="accordions-text"> Healthy HER2 receptors are the proteins that help manage how a breast cell grows, divides, and repairs itself. However, in about a quarter of all breast cancer patients, the HER2 gene isn’t functioning properly. It makes an excess number of copies of itself in a process known as “HER2 gene amplification.” Then these extra genes instruct the cells to make too many HER2 receptors, which is called “HER2 protein overexpression.” The ultimate result is that breast cells grow and divide in an uncontrolled fashion. </p>

        <p style={{marginTop:"30px"}} className="accordions-text"><span>Cancer Receptors</span></p>
        <p className="accordions-text">Think of a receptor as a mouth. When open, cancer cells can feed and grow. When blocked off or closed, the same cells begin to starve. </p>
        <p className="accordions-text">By identifying the cancer’s unique receptors, your doctor can recommend effective treatment methods to block the receptors. Remember, inhibiting the cancer’s “food supply” works to restrict the cancer’s growth. Ideally, your treatment plan will stop the cancer growth before it spreads through the lymph system and on to other tissue and organs in the body. </p>

        <p style={{marginTop:"30px"}} className="accordions-text"><span>The Lymph System</span></p>
        <p className="accordions-text">The lymph system, which is part of the immune system, is a network of lymph vessels and lymph nodes running throughout the entire body. Similar to how the blood circulatory system distributes elements throughout the body, the lymph system transports disease-fighting cells and fluids. Clusters of bean-shaped lymph nodes are fixed in areas throughout the lymph system; they act as filters by carrying abnormal cells away from healthy tissue. </p>
        <p className="accordions-text"> The lymph system, which is part of the immune system, is a network of lymph vessels and lymph nodes running throughout the entire body. Similar to how the blood circulatory system distributes elements throughout the body, the lymph system transports disease-fighting cells and fluids. Clusters of bean-shaped lymph nodes are fixed in areas throughout the lymph system; they act as filters by carrying abnormal cells away from healthy tissue.

</p>
        <p className="accordions-text"> The type of breast cancer is generally determined by the origin of the growth of cancer cells, which is almost always in the lobes, lobules, or ducts. When cancer is found in the nearby lymph nodes, it helps doctors identify just how far the cancer has spread. If the nearest nodes contain cancer, additional nodes are usually examined for the presence or absence of cancer cells to understand how far the disease has progressed.</p>
        <p className="accordions-text"> There are situations in which the bloodstream transports breast cancer cells from the breast to other parts of the body as well. The pathologist looks closely at the breast cancer cells to see if there is angio invasion, meaning blood vessels running through the tumor, and/or lymphatic invasion, meaning lymphatic vessels running through the tumor. When present, there is an increased risk of the cancer being able to spread to other parts of the body.</p>
        <p className="accordions-text"> </p>
        <p className="accordions-text"> </p>
        <p className="accordions-text"> </p>
     
       <p  style={{marginTop:"30px"}} className="accordions-text"><span>Knowing your body helps you to:</span></p> 
       <p className="accordions-text">Make informed decisions. Have a better dialogue with your doctor. Be aware of anything unusual.</p> 
       <p style={{marginTop:"30px"}} className="accordions-text"><span>Adipose Tissue</span></p> 
       <p className="accordions-text">The female breast is mostly made up of a collection of fat cells called adipose tissue. This tissue extends from the collarbone down to the underarm and across to the middle of the ribcage. As a woman ages, especially once she reaches menopause, the breast tissue contains more adipose (fatty) tissue.</p> 
       <p style={{marginTop:"30px"}} className="accordions-text"><span>Lobes, Lobules, and Milk Ducts</span></p> 
       <p className="accordions-text">A healthy female breast is made up of 12–20 sections called lobes. Each of these lobes is made up of many smaller lobules, the gland that produces milk in nursing women. Both the lobes and lobules are connected by milk ducts, which act as stems or tubes to carry the milk to the nipple. These breast structures are generally where the cancer begins to form.</p> 
       

      </div>
       
        
     
        </AccordionDetails>
      
      
      
      
      
      
      </Accordion>


      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >Risk Factors</Typography>
        </AccordionSummary>

      
        <AccordionDetails>


        <div style={{display: "flex", flexDirection: "column", gap:"16px" }}>


       <p  className="accordions-text"><span>What do Scientists Actually Know About The Cause of Breast Cancer?</span></p> 
       <p className="accordions-text">Cancer grows when a cell’s DNA is damaged, but why or how that DNA becomes damaged is still unknown. It could be genetic or environmental, or in most cases, a combination of the two. But most patients will never know exactly what caused their cancer. However, there are certain established risk factors that are associated with breast cancer.</p> 
       <p style={{marginTop:"30px"}} className="accordions-text"><span>Genetic Factors</span></p> 
       <p className="accordions-text"><span>Gender:</span> Breast cancer occurs nearly 100 times more often in women than in men.</p> 
       <p className="accordions-text"><span>Age:</span>Two out of three women with invasive cancer are diagnosed after age 55. </p> 
       <p className="accordions-text"><span>Race:</span>Breast cancer is diagnosed more often in Caucasian women than women of other races. </p> 
       <p className="accordions-text"><span>Obesity:</span> Obesity is a risk factor for both men and women.</p> 
       <p className="accordions-text"><span>Family History and Genetic Factors:</span>  If your mother, sister, father or child has been diagnosed with breast or ovarian cancer, you have a higher risk of being diagnosed with breast cancer in the future. Your risk increases if your relative was diagnosed before the age of 50.</p> 
      
       <p className="accordions-text"><span>Personal Health History:</span> If you have been diagnosed with breast cancer in one breast, you have an increased risk of being diagnosed with breast cancer in the other breast in the future. Also, your risk increases if abnormal breast cells have been detected before (such as atypical hyperplasia, lobular carcinoma in situ (LCIS) or ductal carcinoma in situ (DCIS)).</p> 
       <p className="accordions-text"><span>Menstrual and Reproductive History:</span> Early menstruation (before age 12), late menopause (after 55), having your first child at an older age, or never having given birth can also increase your risk for breast cancer.</p> 
       <p className="accordions-text"><span>Certain Genome Changes:</span>Mutations in certain genes, such as BRCA1 and BRCA2, can increase your risk for breast cancer. This is determined through a genetic test, which you may consider taking if you have a family history of breast cancer. Individuals with these gene mutations can pass the gene mutation onto their children.</p> 
       <p className="accordions-text"><span>Dense Breast Tissue:</span> Having dense breast tissue can increase your risk for breast cancer and make lumps harder to detect. Several states have passed laws requiring physicians to disclose to women if their mammogram indicates that they have dense breasts so that they are aware of this risk. Be sure to ask your physician if you have dense breasts and what the implications of having dense breasts are.</p> 
      
       <p style={{marginTop:"40px"}} className="accordions-text"><span>Environmental and Lifestyle Risk Factors</span></p> 
      
      
       <p className="accordions-text"><span>Lack of Physical Activity:</span> A sedentary lifestyle with little physical activity can increase your risk for breast cancer.</p> 
       <p className="accordions-text"><span>Poor Diet:</span>  A diet high in saturated fat and lacking fruits and vegetables can increase your risk for breast cancer.</p> 
       <p className="accordions-text"><span>Being Overweight or Obese:</span> BBeing overweight or obese can increase your risk for breast cancer. Your risk is increased if you have already gone through menopause.</p> 
       <p className="accordions-text"><span>Drinking Alcohol:</span> Frequent consumption of alcohol can increase your risk for breast cancer. The more alcohol you consume, the greater the risk.</p> 
       <p className="accordions-text"><span>Radiation to the Chest:</span> Having radiation therapy to the chest before the age of 30 can increase your risk for breast cancer.Breast cancer occurs nearly 100 times more often in women than in men.</p> 
       <p className="accordions-text"><span>Combined Hormone Replacement Therapy (HRT):</span> B Taking combined hormone replacement therapy, as prescribed for menopause, can increase your risk for breast cancer and increases the risk that the cancer will be detected at a more advanced stage.</p> 
       

       <p style={{marginTop:"45px"}} className="accordions-text"><span>What are the Stats?</span></p> 
       <p className="accordions-text">60-70% of people with breast cancer have no connection to these risk factors at all, and other people with risk factors will never develop cancer.</p> 
     
       <p style={{marginTop:"45px"}} className="accordions-text"><span>These do not Cause Breast Cancer</span></p> 
       <p className="accordions-text">Breast cancer is not contagious; you can’t contract cancer from a person who has the disease. Breast cancer is not caused by wearing underwire bras, implants, deodorants, antiperspirants, mammograms, caffeine, plastic food serving items, microwaves, or cell phones, as myths often suggest.s</p> 
       

      </div>
       
        
     
        </AccordionDetails>
      
      
      
      
      
      
      </Accordion>




    </div>
  );
}

