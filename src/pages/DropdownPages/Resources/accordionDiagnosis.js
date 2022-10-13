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


export default function AccordionDiagnosis() {
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
          }} >Diagnostic Mammogram</Typography>
        </AccordionSummary>


        <AccordionDetails>

           <div style={{display: "flex", flexDirection: "column", gap:"16px" }}>
           <p className="accordions-text"><span>What is the Difference between a Diagnostic Mammogram and a Screening Mammogram?</span></p>
            <p className="accordions-text">A mammogram is an x-ray of the breast. While screening mammograms are routinely administered to detect breast cancer in women who have no apparent symptoms, diagnostic mammograms are used after suspicious results on a screening mammogram or after some signs of breast cancer alert the physician to check the tissue.</p>
            <p style={{marginTop:"35px"}} className="accordions-text"><span>Such signs may include:</span></p>
            <p style={{marginLeft:"20px"}} className="accordions-text">• A lump</p>
            <p style={{marginLeft:"20px"}} className="accordions-text">• Breast pain</p>
            <p style={{marginLeft:"20px"}} className="accordions-text">• Nipple discharge</p>
            <p style={{marginLeft:"20px"}} className="accordions-text">• Thickening of skin on the breast</p>
            <p style={{marginLeft:"20px"}} className="accordions-text">• Changes in the size or shape of the breast</p>

            <p className="accordions-text"></p>
          
            <p className="accordions-text">A diagnostic mammogram can help determine if these symptoms are indicative of the presence of cancer. As compared to screening mammograms, diagnostic mammograms provide a more detailed x-ray of the breast using specialized techniques. They are also used in special circumstances, such as for patients with breast implants.</p>
            <p style={{marginTop:"35px"}} className="accordions-text"><span>What’s Involved in a Diagnostic Mammogram?</span></p>
            <p className="accordions-text">If your doctor prescribes a diagnostic mammogram, realize that it will take longer than a normal screening mammogram, because more x-rays are taken, providing views of the breast from multiple vantage points. The radiologist administering the test may also zoom in on a specific area of the breast where there is a suspicion of an abnormality. This will give your doctor a better image of the tissue to arrive at an accurate diagnosis.</p>
            <p className="accordions-text">In addition to finding tumors that are too small to feel, mammograms may also spot ductal carcinoma in situ (DCIS). These are abnormal cells in the lining of a breast duct, which may become invasive cancer in some women.</p>
            <p className="accordions-text">These abnormal cells do not appear as a mass at all. Instead, they look like tiny grains of sand called microcalcifications. If these microcalcifications are grouped together and/or are in a row, this is a sign they might be DCIS. Not all DCIS findings progress into invasive cancer. There are studies currently being done to help determine which do to help physician’s plan what treatment is best for a woman’s specific findings of DCIS inside the duct of the breast.</p>
            <p  style={{marginTop:"35px"}} className="accordions-text"><span>How Reliable are Mammograms for Detecting Cancerous Tumors?</span></p>
            <p className="accordions-text">The ability of a mammogram to detect breast cancer may depend on the size of the tumor, the density of the breast tissue, and the skill of the radiologist administering and reading the mammogram. Mammography is less likely to reveal breast tumors in women younger than 50 years than in older women. This may be because younger women have denser breast tissue that appears white on a mammogram. Likewise, a tumor appears white on a mammogram, making it hard to detect.</p>
            <p className="accordions-text">There have been wonderful improvements in the last 10 years regarding mammogram technology. Today, it is best to get a 3D mammogram also known as tomosynthesis. This type of modern mammogram machine detects breast cancer 28% more accurately than older X-ray analog mammograms.</p>
            <p className="accordions-text">You can call our mammography facility beforehand to find out if they perform 3D mammography. You may also ask if the radiologist is a breast imaging radiologist. This also contributes to getting an accurate reading of your mammogram.</p>
            <p className="accordions-text">If you had prior mammograms done at a different facility, get those mammograms either sent to the new facility where you are going or pick them up yourself and take them there. It is important for the radiologist to always compare prior mammograms to the most recent one.</p>
          
           
            
        
             
           </div>

        
        
        </AccordionDetails>
    
    
    
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >MRI</Typography>
        </AccordionSummary>


        <AccordionDetails>
      
      
       
       <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>

            <p><span>How Does A Breast MRI Help To Diagnose Breast Cancer?</span></p>
            <p>During diagnostic examinations, it is helpful to get a variety of images and perspectives. If your initial exams are not conclusive, your doctor may recommend a breast MRI (magnetic resonance imaging) to assess the extent of the disease.</p>
            <p>During a breast MRI, a magnet connected to a computer transmits magnetic energy and radio waves (not radiation) through the breast tissue. It scans the tissue, making detailed pictures of areas within the breast. These images help the medical team distinguish between normal and diseased tissue.</p>
            
        
    
    
    
        </div>
        
        
        </AccordionDetails>
    
    
    
      </Accordion>


      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >Biopsy</Typography>
        </AccordionSummary>


        <AccordionDetails>

        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"18px" }}>
            <p><span>What is a Breast Biopsy?</span></p>
            <p>A breast biopsy is a test that removes tissue or sometimes fluid from the suspicious area. The removed cells are examined under a microscope and further tested to check for the presence of breast cancer. A biopsy is the only diagnostic procedure that can definitely determine if the suspicious area is cancerous.</p>
            <p>The good news is that 80% of women who have a breast biopsy do not have breast cancer.</p>
            <p style={{marginTop:"38px"}} ><span>There are three types of biopsies:</span></p>
            <p style={{marginLeft:"25px"}}> • Fine-needle aspiration</p>
            <p>Core-needle biopsy</p>
            <p style={{marginLeft:"25px"}}>• Surgical biopsy</p>
            <p style={{marginLeft:"25px"}}>• The latter two are the most commonly used on the breast.</p>
       
            <p style={{marginTop:"38px"}} >There are several factors that help a doctor decide which type of biopsy to recommend. These include the appearance, size, and location of the suspicious area on the breast. Before discussing biopsy results, let’s first distinguish between the three types of biopsies.</p>
             <p><span>What is fine-needle aspiration?</span></p>
             <p>In most cases, a fine needle aspiration is chosen when the lump is likely to be filled with fluid. If the lump is easily accessible or if the doctor suspects that it may be a fluid-filled cystic lump, the doctor may choose to conduct a fine-needle aspiration (FNA). During this procedure, the lump should collapse once the fluid inside has been drawn and discarded. Sometimes, an ultrasound is used to help your doctor guide the needle to the exact site, whereby sound waves create a picture of the inside of the breast.</p>
             <p>If the lump persists, the surgeon or radiologist, a doctor who specializes in medical imaging such as x-rays and mammograms, will perform a fine needle aspiration biopsy (FNABx), a similar procedure using the needle to obtain cells from the lump for examination.</p>
             <p style={{marginTop:"38px"}} ><span>What is a core-needle biopsy?</span></p>
             <p>Core needle biopsy is the procedure to remove a small amount of suspicious tissue from the breast with a larger “core” (meaning “hollow”) needle. It is usually performed while the patient is under local anesthesia, meaning the breast is numbed. During the procedure, the doctor may insert a very small marker inside the breast to mark the location of the biopsy. If surgery is later required, the marker makes it easier for the surgeon to locate the abnormal area. Even if no further treatment such as surgery is needed, the marker allows a breast imaging radiologist to see on future mammograms where the biopsy was done.</p>
             <p>The radiologist or surgeon performing the core-needle biopsy may use specialized imaging equipment to guide the needle to the desired site. As with fine-needle aspiration, this may involve ultrasound.</p>
             <p>During an ultrasound-guided core needle biopsy, the patient lies down while the doctor holds the ultrasound against the breast to direct the needle. On the other hand, during a stereotactic-guided core-needle biopsy, the doctor uses x-ray equipment and a computer to guide the needle. Typically, the patient is positioned lying on the stomach on a special table that has an opening for the breast, and the breast is compressed, similar to a mammogram.</p>
             <p>Occasionally, no imaging equipment is used, but this is typically only in cases where the lump can be felt through the skin. This type of procedure is called a freehand core-needle biopsy.</p>
             <p>There are fewer side effects associated with a core-needle biopsy than with surgical biopsy.</p>
             <p style={{marginTop:"38px"}}><span>What should I expect from a surgical biopsy?</span></p>
             <p>(Also known as “wide local excision,” “wide local surgical biopsy,” “open biopsy,” or “lumpectomy”)</p>
             <p>As with a core-needle biopsy, a surgical biopsy is done while the patient is under local anesthesia. Typically, this test is performed in a hospital setting where an IV and medications are administered to make the patient drowsy.</p>
             <p>The surgeon makes a one- to two-inch cut on the breast and then removes all or part of the abnormal lump and often a small amount of normal-looking tissue, known as the “margin.” If the lump cannot be easily felt but can be seen on a mammogram or ultrasound, a radiologist may insert a thin wire to mark the suspicious spot prior to the surgeon performing the biopsy. Once again, a marker is usually placed internally at the biopsy site at the conclusion of the procedure.</p>

             <p style={{marginTop:"38px"}}><span>What Can Be Learned From The Biopsy Results?</span></p>
             <p>Once the biopsy is complete, a specially trained doctor called a pathologist examines the tissue or fluid samples under a microscope, looking for abnormal or cancerous cells. The pathology report, which can take one or two weeks to complete, is sent to the patient’s doctor. It indicates whether the suspicious area is cancerous and provides a full picture of your situation. For the patient, waiting for results can be a real challenge, but being able to make an informed decision regarding your treatment is well worth it. Your doctor will go over the report with you and, if necessary, discuss the treatment options.</p>
             <p>If no cancer cells are found, the report will indicate that the cells in the lump are benign, meaning non-cancerous. However, some type of follow-up or treatment may still be needed, as recommended by the healthcare professional.</p>
             <p>If cancer cells are found, the report will provide more information to help determine the next steps.</p>
             <p>The report for a core-needle biopsy sample will include tumor type and the tumor’s growth rate or grade. If cancer is found, the pathologist will also perform lab tests to look at cells for estrogen or progesterone receptors.</p>
             <p>In the case of a surgical biopsy, the results reveal data about the type, grade, and receptor status of the tumor, as well as the distance between the surrounding normal tissue and the excised tumor. The margin, as we mentioned earlier, shows whether the site is clear of cancer cells.</p>
             <p>A positive margin means cancer cells are present at the margin of the tumor. In cases of positive margins, the cancer has spread beyond the immediate area.</p>
             <p>A negative margin or clear margin indicates there are no tumor cells at the margin. That means the cancer is contained in the area nearest to the tumor.</p>
             <p>A close margin means that the space between the cancerous tissue and surrounding normal tissue is less than about 3 millimeters (0.118 inch).</p>
             <p>If you have a biopsy resulting in a cancer diagnosis, the pathology report will help you and your doctor talk about the next steps. You will likely be referred to a breast cancer specialist, and you may need more scans, lab tests, or surgery. Your medical team uses the pathology report and the results of the other tests to determine the stage of cancer and to design the best treatment plan for you.</p>
       
       </div>
        
        
        </AccordionDetails>
    
    
    
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >Lab Tests</Typography>
        </AccordionSummary>

      
        <AccordionDetails>


        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>
          <p>If you are diagnosed with breast cancer, your doctor may order additional lab tests to assist with prognosis. The two most common lab tests are the hormone receptor test and the HER2/neu test. Results from these tests can provide insight into which cancer treatment options may be most effective for you</p>
          <p  style={{marginTop:"40px"}}><span>Testing The Tumor Cells For Hormone Receptors</span></p> 
          <p>A hormone receptor is a specialized protein located on the surface of or within a cell. The receptor binds to the female hormones estrogen and progesterone, which flow through the blood. Once bound, the hormone signals the cell to start growing and multiplying.</p>
          <p>Many breast cancer tumors contain hormone receptors, often in large numbers. When hormone receptors are present, estrogen and/or progesterone can fuel the growth of the cancer. Such hormone-dependent cancers often respond well to hormone therapy, which differs from hormone replacement therapy (HRT). If neither estrogen receptors (ER) nor progesterone receptors (PR) are present, the cancer is said to be “hormone-receptor-negative,” and hormone therapy would likely be ineffective. Knowing whether the cancer cells have hormone receptors can be valuable to your medical team and your treatment plan.</p>
          
          <p  style={{marginTop:"40px"}}><span>Who Needs Hormone Receptor Testing?</span></p>
          <p>Hormone receptor testing is generally recommended for all breast cancers, including DCIS. If your doctor orders this test, you may be asked to discontinue taking any prescribed hormones for a period of time before the breast tissue sample is obtained. Usually, the sample comes from a biopsy, but the test may also be performed on tissue removed during a lumpectomy or mastectomy. It is standard of care however to obtain these types of pathology results on biopsy tissue.</p>
    
          <p style={{marginTop:"40px"}}><span>How Does The Test Work?</span></p>
          <p>The testing lab typically uses a specialized staining process on the breast tissue sample to see if hormone receptors are present. The technical name for this procedure is an “immunohistochemical staining assay” or an “ImmunoHistoChemistry (IHC).” Findings will be included in a pathology report given to your doctor. If the cancer is deemed “estrogen-receptor-positive” (ER+), its cells have receptors for the estrogen hormone. That means that the cancer cells likely receive signals from estrogen to promote growth. About two out of every three breast cancers contain hormone receptors.</p>
          <p>If the cancer is progesterone-receptor-positive (PR+), its cells have receptors for progesterone. This hormone could then promote the growth of the cancer</p>
          <p>The cancer cells being estrogen and/or progesterone receptor-positive (hormone positive) is a good prognostic factor to have, usually leading to a better prognosis.</p>

          <p  style={{marginTop:"40px"}}><span>What do the results of hormone testing mean?</span></p>
          <p>Breast cancer patients who test positive for both estrogen receptors and progesterone receptors usually have a better-than-average prognosis for survival and a complete recovery than those who have no receptors present. Also, the more receptors and the more intense their reaction, the better they respond to hormone therapy. Patients with one type of receptor but not the other may still reap benefits from this form of treatment, but likely not to the same degree. As mentioned earlier, if the cancer is both ER- and PR-negative, it probably won’t respond to hormone therapy. Typical response rates to hormone therapy are as follows:</p>
           

           <p  style={{marginTop:"40px"}}><span>ER and PR positive:</span> 75-80%</p>
           <p> <span>ER positive and PR negative:</span> 40-50%</p>
           <p><span>ER negative and PR positive:</span> 25-30%</p>
           <p><span>ER negative and PR negative: 10% or less</span></p>

           <p style={{marginTop:"40px"}}><span>HER2/neu Test</span></p>
           <p>Similar to the hormone receptor test, the HER2/neu test looks for a specific kind of protein that is found with certain types of cancer cells and the gene that produces it. The formal name of that gene is the human epidermal growth factor receptor 2, and it makes HER2 proteins. These proteins are receptors on breast cells.</p>
           <p>In a sense, genes contain the formula for the number and combination of proteins a cell needs to remain healthy and function properly. Certain genes and the proteins they create can determine how breast cancer progresses, as well as how it responds to various types of treatment.</p>


           <p style={{marginTop:"40px"}}><span>What is a HER2 receptor and how does it relate to breast cancer?</span></p>
            <p>Healthy HER2 receptors are the proteins that help manage how a breast cell grows, divides, and repairs itself. However, in about a quarter of all breast cancer patients, the HER2 gene isn’t functioning properly. It makes an excess number of copies of itself in a process known as “HER2 gene amplification.” Then these extra genes instruct the cells to make too many HER2 receptors, which is called “HER2 protein overexpression.” The ultimate result is that breast cells grow and divide in an uncontrolled fashion.</p>
            <p>The HER2/neu test can discover whether the sample is normal or whether it has too much of the HER2/neu protein or an excessive number of copies of its gene. If you have been diagnosed with invasive breast cancer or have had recurrent breast cancer, your doctor may recommend this test. It will help your oncology team determine your prognosis, characteristics of the tumor including how aggressive the tumor is likely to be, and the best treatment options.</p>
            <p>This test is often ordered in conjunction with the hormone receptor test. Typically, the breast cancer tissue sample from a biopsy or the tumor removed during a mastectomy is used. This test can take about a week to get the pathology results back, whereas determining if the cells are cancer usually is known in just a day or two.</p>
   

            <p style={{marginTop:"40px"}}><span>What will the HER2/neu results tell me?</span></p>
            <p>There are four tests for HER2, and results of these may appear on your pathology report, which may take several weeks to come back.</p>
            <p>The first one is the IHC test, which is short for “ImmunoHistoChemistry.” It looks at whether there is excess HER2 protein in the cancerous cells. A result of 0 or 1+ indicates there is no excess, 2+ is borderline, and 3+ means the cells test positive for HER2 protein over-expression.</p>
            <p>The remaining three tests all examine if the cells contain too many copies of the HER2 gene. These tests include:</p>
   
            <p style={{marginTop:"40px", marginLeft:"28px"}}><span>• The FISH test</span> (“Fluorescence In Situ Hybridization”)</p>
            <p style={{ marginLeft:"28px"}}><span>• The SPoT-Light HER2 CISH test</span> (“Subtraction Probe Technology Chromogenic In Situ Hybridization”)</p>
            <p style={{ marginLeft:"28px"}}><span>• The Inform HER2 Dual ISH test</span> (“Inform Dual In Situ Hybridization”)</p>
      
            <p style={{marginTop:"40px"}}>There are only two possible results for these three tests: positive, meaning HER2 gene amplification, or negative, indicating the number of HER2 genes is not excessive.</p>
            <p>In the pathology report, breast cancers with HER2 protein overexpression and HER2 gene amplification are called HER2-positive. This type of cancer often grows faster, spreads to other areas more readily, and has a higher likelihood of recurring versus HER2-negative breast cancer.</p>
      
            <p style={{marginTop:"40px"}} ><span>Blood Testing for HER2/neu</span></p>
            <p>Sometimes, especially when there is not enough tumor tissue available to perform the test, a blood sample is drawn from the patient’s arm to collect similar data. This blood test is called a “serum HER2/neu test,” and it can be used as part of the initial workup upon cancer diagnosis or to monitor the effectiveness of treatment. If initially the level of serum HER2/neu is elevated to more than 15ng/mL and then it falls, the treatment is likely working. However, if the serum level remains elevated, this indicates the treatment is not working. If the serum level declines but then, upon later testing, is elevated once again, this is a sign that the cancer could be recurring.</p>
            <p>When all three of the tests come back negative for receptors for hormones (progesterone and estrogen) and negative for HER2, triple negative breast cancer may be the diagnosis.</p>
            <p></p>
   
      </div>
        
     
        </AccordionDetails>
      
      
      </Accordion>


      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >Waiting for the Results</Typography>
        </AccordionSummary>

      
        <AccordionDetails>


        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>
      
          <p><span>What to Do When You Have to Wait</span></p>
          <p>Waiting for the results of biopsy testing, scans, or lab tests can understandably weigh heavily on your mind. Some people cope by educating themselves and trying to map out their possible options; others reduce stress by distracting themselves with whatever feels fun; still others find the waiting time provides the opportunity to assess their priorities or deepen meaningful relationships.</p>
          <p><span>Regardless of the balance that works best for you, here are a few thoughts of hope to keep in mind.</span></p>
       
          <p style={{marginLeft:"28px"}}>• Only about 20% of all breast tumors are cancerous.</p>
          <p style={{marginLeft:"28px"}}>• Most cancerous tumors are highly treatable.</p>
          <p style={{marginLeft:"28px"}}>• Cancer treatment opportunities are continually improving.</p>

          <p style={{marginTop:"40px"}} ><span>Some Practical Tips For The Wait</span></p>
          <p style={{marginLeft:"28px"}}>• Evaluate how you are spending your emotional energy and reduce “optional” stress. </p>
          <p style={{marginLeft:"28px"}}>• Continue with your normal routine, including going to work.</p>
          <p style={{marginLeft:"28px"}}>• Treat yourself to healthy food.</p>
          <p style={{marginLeft:"28px"}}>• Go for a walk or continue to get exercise if you can.</p>
          <p style={{marginLeft:"28px"}}>• Seek support from others who have been in similar situations.</p>
          <p style={{marginLeft:"28px"}}>• Calm your mind with meditation, prayer, or thoughts that bring you a sense of peacefulness.</p>

          <p style={{marginTop:"40px"}} ><span>Signs That May Indicate It’s Time To Learn Some New Coping Skills</span></p>
          <p><span>Obsession.</span> If you find yourself obsessing about cancer, it may be time to intentionally back off from the intensity.</p>
          <p>If you’re losing sleep, neglecting self care, unable to care for your children, “awfulizing,” or spending several hours online researching, it might be time to step away for a while. Take breaks!</p>
          <p>Avoidance. Don’t diagnose yourself, delay, or avoid recommended tests and treatment.</p>
          <p>If your physician has ordered more tests, it is because he or she feels the need to gather more facts. If treatment or further testing is recommended, it’s in your best interest to respond prompt</p>
          <p><span>Feeling overwhelmed with advice.</span> Don’t assume anyone else’s situation or story will be identical to yours.</p>
          <p>You have the right to be discerning about when and how you get your advice, although well-meaning friends and acquaintances may be drawn to share their positive and negative experiences, you can listen to your own emotions. It’s always okay to say when you’ve had enough.</p>
          <p><span>Hopelessness or Despair.</span> Notice depression.</p>
          <p>If you find yourself experiencing symptoms of depression, be sure to let your healthcare provider know. Although sadness, anxiety, and grief are natural emotions at this time, do your best to cultivate hope and keep it alive inside you.</p>
         
        
       

      </div>
       
        
     
        </AccordionDetails>
      
      
      
      
      </Accordion>





    </div>
  );
}

