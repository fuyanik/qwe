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

export default function AccordionTreatment() {
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
          }} >Choosing Your Doctor </Typography>
        </AccordionSummary>


        <AccordionDetails>

           <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>
          
             <p> <span>Your Doctor Patient Relationship</span></p>
             <p>From the time you are diagnosed with breast cancer, you will work with a team of cancer specialists that may include:</p>
             <p style={{marginLeft:"28px"}}>• A medical oncologist</p>
             <p style={{marginLeft:"28px"}}>• A surgical oncologist</p>
             <p style={{marginLeft:"28px"}}>• A radiation oncologist</p>
             <p style={{marginLeft:"28px"}}>• A care-manager/caseworker/nurse navigator or patient navigator</p>
             <p>Your healthcare team may also include an oncology nurse and a registered dietitian.</p>
           
             <p style={{marginTop:"40px"}}> <span>Can you ask questions and get answers you can understand?</span></p>
             <p>Finding the right team, one that consists of professionals with whom you are comfortable, makes a big difference in how your treatment will progress. Your physicians should be knowledgeable, of course, but they should also welcome questions and be able to explain your treatment options to you in a way you can understand.</p>
           
             <p style={{marginTop:"40px"}}> <span>Do you understand your treatment goals and why particular treatments are recommended?</span></p>
             <p>Once you’ve identified your team, your doctors can describe your treatment choices, the expected results, and the possible side effects you may experience.</p>
            
             <p style={{marginTop:"40px"}}> <span>Are your concerns treated with respect?</span></p>
             <p>Don’t be afraid to ask questions; raising your concerns—even those that you may think will be viewed as trivial—with your oncology team will help you better understand your options and provide your doctors with insight into what is important to you. Today, there are many treatment options available to you. Work with your team to find the right combination for you.</p>

             <p style={{marginTop:"40px"}}> <span>Do you feel comfortable sharing with your medical team about what you have learned regarding your condition?</span></p>
             <p>Do your research. Speak with support groups and breast cancer survivors. The more information you gather about your treatment options, the better decisions you’ll make.</p>
             
             <p style={{marginTop:"40px"}}> <span>Do you know the parts of your treatment plan that are up to you?</span></p>
             <p>Remember that while your doctors can make recommendations and provide options, the final decisions regarding your treatment are yours. With good research, you can have confidence in the path you take. By embracing your part, you’ll give yourself the best odds for a long and healthy life.</p>

             <p style={{marginTop:"40px"}}> <span>When is a second opinion a good idea?</span></p>
             <p>Having a second opinion can help you be certain of your treatment plan and healthcare partnering decisions. You will have less anxiety if you can cultivate a sense of trust and care with your doctor. In addition to quality care and good treatment decisions, your peace of mind is an important part of the equation.</p>

             <p style={{marginTop:"40px"}}> <span>Here some ideas that may be important to consider regarding second opinions:</span></p>
             <p>Most breast cancer doctors are very comfortable with their patients seeking a second opinion.</p>
             <p>Many health insurance companies will pay for a second opinion if you or your doctor requests it, and some companies require a second opinion.</p>
             <p>If you get a second opinion, the doctor may agree with your first doctor’s diagnosis and treatment plan. Or the second doctor may suggest another approach. Either way, you’ll have more information and perhaps a greater sense of control. You may also feel more confident about the decisions you make, knowing that you’ve looked carefully at your options.</p>
             <p>It is important to be sure that treatments you receive are in keeping with the NCCN treatment guidelines. So consider printing off the NCCN Guidelines for Patients document. It contains the guidelines for treatment based on stage of the disease and prognostic factors of the tumor that are considered the gold standard nationally.</p>
             <p>It may take some time and effort to gather your medical records and see another doctor. Usually it’s not a problem if it takes you several weeks to get a second opinion. In most cases, the delay in starting treatment will not make treatment less effective. To make sure, you should discuss this possible delay with your doctor. Some women with breast cancer need treatment right away.</p>
             <p>There are many ways to find a breast cancer doctor for a second opinion. You can ask your doctor, a local or state medical society, a nearby hospital, or a medical school for names of specialists.</p>
            
             
          
          
           
           </div>

        
        
        </AccordionDetails>
    
    
    
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} > Standart Treatment vs. Clinical Trials</Typography>
        </AccordionSummary>


        <AccordionDetails>
        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>

            <p>Before selecting your treatment plan, you should first understand the difference between standard treatment and clinical trials.</p>
            <p>Breast cancer standard treatments are methods that experts agree are appropriate, accepted, and widely used. These standard procedures have proven useful in fighting breast cancer in the past.</p>
            <p>A breast cancer clinical trial, on the other hand, is an approved research study that some doctors believe has a strong potential to improve standard treatments. When clinical trials demonstrate better results than the standard, that new treatment becomes the standard. Remember, all our current standards were clinical trials at one time.</p>
            <p>If a breast cancer clinical trial is an option for you, your doctor will explain the possible trade-offs with the trial treatment versus standard treatment. Together with your medical team, you will need to decide what treatment method is the best for you and your health.</p>
       
            <p style={{marginTop:"40px"}}> <span>Breast Cancer Standard Treatments by Stage</span></p>
            <p style={{marginTop:"40px"}}>Your treatment options depend on the stage of your disease and these factors: </p>
            <p style={{marginLeft:"28px"}}>• The size of the tumor in relation to the size of your breast</p>
            <p style={{marginLeft:"28px"}}>• The results of specific pathology tests (hormone receptors, HER2 receptors, grade of the cells, proliferation rate of the cells)</p>
            <p style={{marginLeft:"28px"}}>• Whether you have gone through menopause</p>
            <p style={{marginLeft:"28px"}}>• Your general health</p>
            <p style={{marginLeft:"28px"}}>• Your age</p>
            <p style={{marginLeft:"28px"}}>• Your family history or other risk factors associated with a predisposition for developing breast or ovarian cancer </p>
            <p>Below are brief descriptions of common treatments for each stage. Other treatments may be appropriate for some women. Research studies (clinical trials) can be an option at all stages of breast cancer.</p>

            
            <p style={{marginTop:"40px"}}> <span>Stage 0 (DCIS)</span></p>
            <p>Most women with ductal carcinoma in situ (DCIS), also known as non-invasive breast cancer, have breast-conserving surgery, also known as lumpectomy followed by radiation therapy. For some women over the age of 70 who have an early diagnosed breast cancer and the tumor is hormone receptor positive, they may be a candidate to forego radiation therapy. Though Stage 0 breast cancer is the very earliest that breast cancer can be diagnosed, there are situations in which there is a lot of DCIS within the breast tissue. In some situations, it may be necessary to have a mastectomy performed. Some women also may choose to have a mastectomy. Women with DCIS may receive Tamoxifen to reduce the risk of developing invasive breast cancer in the future.</p>
           
            <p style={{marginTop:"40px"}}> <span>Stages 1, 2, 3A, and Some 3C</span></p>
            <p>Women with Stage 1, Stage 2, Stage 3A, or operable Stage 3C breast cancer may have a combination of treatments. (Operable means the cancer can be treated with surgery.)</p>
            <p>Some may have breast-conserving surgery followed by radiation therapy to the breast. This choice is common for women with Stage I or II breast cancer. Some may decide to have a mastectomy. With either approach, women (especially those with Stage II or IIIA breast cancer) often have lymph nodes under the arm removed.</p>
            <p>Whether or not radiation therapy is used after mastectomy depends on the extent of the cancer. If cancer cells are found in 1 to 3 lymph nodes under the arm or if the tumor in the breast is large, the doctor sometimes suggests radiation therapy after mastectomy. If cancer cells are found in more than 3 lymph nodes under the arm and/or the tumor was very close to the chest wall, the doctor usually will suggest radiation therapy after mastectomy.</p>
            <p>The choice between breast-conserving surgery (followed by radiation therapy) and mastectomy depends on many factors:</p>
            <p style={{marginLeft:"28px"}}>• The size of the tumor in relationship to the size of the breast</p>
            <p style={{marginLeft:"28px"}}>• The location of the tumor within the breast

</p>
            <p style={{marginLeft:"28px"}}>• Whether multiple tumors are found within the breast, known as multicentric (which requires mastectomy)

</p>
            <p style={{marginLeft:"28px"}}>• Whether the patient carries a breast cancer gene

</p>
            <p style={{marginLeft:"28px"}}>• Certain features of the cancer itself

</p>
            <p style={{marginLeft:"28px"}}>• How the woman feels about surgery changing her breast appearance

</p>
            <p style={{marginLeft:"28px"}}>• How the woman feels about radiation therapy

</p>
            <p style={{marginLeft:"28px"}}>• The woman’s ability to travel to a radiation treatment center

</p>
            <p style={{marginLeft:"28px"}}>• The patient’s age

</p>
            <p style={{marginLeft:"28px"}}>• The patient’s health conditions

</p>

            <p>It is important to note that some women decide to do bilateral mastectomies for peace of mind. Although women without a known genetic cause for their breast cancer have a relatively low rate of developing breast cancer in the opposite healthy breast, still there is a trend currently for women to opt for bilateral mastectomies with immediate reconstruction.

</p>
            <p>Breast reconstruction is a covered benefit by health insurance companies and is required to be covered by a federal law passed in 1998 for women diagnosed with breast cancer. It is not considered cosmetic surgery but instead part of a woman’s treatment to restore her silhouette and psychological well being.

</p>
            <p>Some women have chemotherapy before surgery. This is called neoadjuvant therapy (treatment before the main treatment). Chemotherapy before surgery may shrink a large tumor so that breast-sparing surgery is possible. Women with large Stage II or IIIA breast tumors often are advised to choose this treatment.

</p>

<p>
After surgery, many women receive adjuvant therapy. Adjuvant therapy is treatment given after the main treatment to lower the chance of breast cancer returning. Radiation treatment is local therapy that can kill any remaining cancer cells in and near the breast. Women may also have hormone therapy, chemotherapy, targeted therapy, or a combination. These systemic therapies can destroy cancer cells that remain anywhere in the body. They can prevent or delay the cancer from coming back in the breast or elsewhere.


</p>
            

            
            
            <p style={{marginTop:"40px"}}> <span>Stage 3B and Some Stage 3C

</span></p>

<p>Women with Stage 3B (including inflammatory breast cancer) or inoperable Stage 3C breast cancer have chemotherapy first and then may be offered other treatments. (Inoperable means the cancer can’t be treated with surgery without first shrinking the tumor.) They may also have targeted therapy.

</p>
<p>If the chemotherapy or targeted therapy shrinks the tumor, then surgery may be possible:

</p>
<p><span>Mastectomy:</span> The surgeon removes the breast. In most cases, the lymph nodes under the arm are removed, known as an axillary node dissection. After a mastectomy, a woman may receive radiation therapy to the chest and underarm area.

</p>
<p><span>Breast-conserving surgery: </span>In rare cases, the surgeon removes the cancer but not the breast. The lymph nodes under the arm are usually removed. After surgery, a woman may receive radiation therapy to the breast and underarm area. This may be possible for someone with stage III breast cancer if they received neoadjuvant chemotherapy and the tumor was successfully shrunk to be smaller as a result. Women with inflammatory breast cancer are never a candidate for breast conserving surgery, even though chemotherapy is given first. This is because the breast cancer began within the underlying skin of the breast; therefore, all of that skin must be surgically removed.

</p>

<p>After surgery, the doctor will likely recommend chemotherapy, targeted therapy, hormone therapy, or a combination. This therapy may help prevent the disease from coming back in the breast or elsewhere.

</p>


            <p style={{marginTop:"40px"}}> <span>Stage 4 and Recurrent

</span></p>

<p>Women with Stage 4 breast cancer will be treated based on where the cancer returned. If the cancer returned in the chest area or within the breast tissue that remained after surgery, the doctor may suggest surgery, radiation therapy, chemotherapy, hormone therapy, or a combination.

</p>
<p>Women with Stage 4 breast cancer or recurrent cancer that has spread to the bones, liver, or other areas usually have hormone therapy, chemotherapy, targeted therapy, or a combination. Radiation therapy may be used to control tumors in certain parts of the body. These treatments are not likely to cure the disease, but they may help a woman live longer.

</p>
<p>Many women need supportive care along with anti-cancer treatments. Anti-cancer treatments are given to slow the progress of the disease, and whenever possible to control the cancer, treating it as a chronic illness. Supportive care helps manage pain, other symptoms of cancer, or the side effects of treatment (such as nausea). This care can help a woman feel better physically and emotionally. Supportive care does not aim to extend life. Some women with advanced cancer decide to have only supportive care. Today more and more research is taking place regarding Stage 4 breast cancer, which is increasing the treatment options for patients diagnosed with metastatic breast cancer. It is not unusual, particularly for women whose tumors are estrogen receptor positive, to live a decade or more while maintaining quality of life.
</p>

           
            </div>
        
        
        </AccordionDetails>
    
    
    
      </Accordion>


      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >Lymph Node Removal and Lymphedema</Typography>
        </AccordionSummary>


        <AccordionDetails>

        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>

              <p>In addition to your surgical procedure, such as a lumpectomy or mastectomy, your doctor may need to remove and examine lymph nodes to determine whether the cancer has spread and to what extent. Your doctor will use one of two procedures for this, either a sentinel lymph node biopsy/removal or an axillary node dissection. We’ll define these terms below.</p>
                
                <p style={{marginTop:"40px"}}> <span>How Does The Lymph System Relate To Breast Cancer?</span></p>
                <p>Although breast cancer is not easily controlled, the spread of breast cancer is sometimes predictable. The cancer cells spread through a customary path, out from the tumor and into the surrounding lymph nodes, before they progress throughout the body.</p>
               
                <p style={{marginTop:"40px"}}> <span>What is the sentinel node?</span></p>
                <p>The sentinel lymph node (and in some cases there are several grouped together) is the first node “downstream” from the cancer in the lymph circulatory system. If the cancer were to travel away from the breast tumor and into the lymphatic system, this node would be the first one to show evidence of breast cancer.</p>

                
                <p style={{marginTop:"40px"}}> <span>What is a Sentinel Node Biopsy?</span></p>
                <p>A sentinel lymph node biopsy is a procedure to examine the lymph node closest to the tumor because this is where the cancer cells have most likely spread. First, the surgeon will want to identify the “sentinel lymph node,” the lymph node (or nodes) closest to the tumor. To be able to identify the sentinel lymph node, the surgeon will inject dye or radioactive substances into the tissue near the tumor. The lymph nodes that are the most susceptible to the cancer’s spread will be marked by the dye or radioactive substance. During surgery, the nearest lymph nodes will be removed and checked for the presence of cancer cells.</p>
                <p>A biopsy is nearly always taken from the sentinel node, and the breast surgeon typically removes the sentinel node as well for dissection.</p>

                
                <p style={{marginTop:"40px"}}> <span>What is an Axillary Node Dissection?</span></p>
                <p>This procedure is a method for determining if the cancer has spread to more than one of your lymph nodes. Axillary node dissection removes some of the the axillary lymph nodes, which are the lymph nodes located in the underarm. Once removed, they are dissected and examined by the pathologist, looking at all of the tissue and individual nodes very closely under a microscope.</p>

                
                <p style={{marginTop:"40px"}}> <span>Do the Lymph Nodes Always Need to be Removed?</span></p>
                <p>Not always, especially when there is no evidence of any cancer in the lymph system. A mastectomy or lumpectomy operation will most often include either a sentinel node biopsy or an axillary node dissection. Both procedures involve a separate incision for lumpectomy patients. Following surgery, the pathologist will test the lymph nodes to determine whether the cancer has spread past the breast. When some evidence of cancer is found in the lymph system, recents standards are as follows:</p>



                
                <p style={{marginTop:"40px"}}>For patients who are having a lumpectomy and the sentinel node is positive for cancer: </p>
                <p>Effective in mid-2012, the standard of care was changed to no longer require women with early-stage breast cancers to have a full dissection and removal of the lymph nodes under the arm when the sentinel node is found to contain cancer. This applies to postmenopausal patients who are over age 70 and whose cancer is estrogen receptor-positive. Radiation to the underarm area and upper chest wall is also part of treatment.</p>

                
                <p style={{marginTop:"40px"}}> For patients who are having a mastectomy surgery and have a positive sentinel node:</p>
                <p>For these women, the standard of care remains the same, calling for the node removal and dissection of the axillary (or underarm) nodes. The additional nodes removed at the time of the breast cancer surgery will be examined by the pathologist in the following days to determine if others beyond the sentinel node contained cancer or not. If cancer cells are found in those lymph nodes, other cancer treatments will be considered.</p>

                
                <p style={{marginTop:"40px"}}> <span>What Is Lymphedema?</span></p>
                <p>Lymphedema is a chronic condition that is caused by a disruption or damage to the normal drainage pattern in the lymph nodes. It most often causes swelling of the arm, but it can also affect the breast, chest, and sometimes even the legs. The swelling, caused by an abnormal collection of too much fluid, is called lymphedema. Removing the axillary lymph nodes increases your risk for developing lymphedema.</p>
                <p>The risk of developing lymphedema continues for the rest of your life, so it is imperative that you are aware of these risks. Often it is best to learn about preventative measures for lymphedema before surgery so you will know the signs and symptoms to look for and can discuss treatment options with your physician.</p>
                <p>Some ways to reduce the risk of developing lymphedema following a lymph node surgical removal or radiation to the lymph node area under the arm are:</p>
                <p style={{marginLeft:"28px"}}>• Avoid wearing tight rings, watches, or other jewelry on the affected arm</p>
                <p style={{marginLeft:"28px"}}>• No needle sticks or blood pressures should be taken on the affected arm</p>
                <p style={{marginLeft:"28px"}}>• Whenever a minor injury such as a small cut of the finger or arm occurs, immediately wash the area, apply antibiotic ointment, and cover with a bandage.</p>
                <p>After lymph node surgery, if you experience unusual and painful swelling, you should immediately notify your doctor to monitor it. There is no cure for lymphedema, but your doctor can take steps to reduce swelling and maintain that reduction. With proper health care, good nutrition, and exercise, it may be possible for you to reduce the effects of lymphedema.</p>
                
                <p style={{marginTop:"40px"}}> <span></span></p>
                <p></p>

                
              
       </div>
        
        
        </AccordionDetails>
    
    
    
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >Breast Reconstruction</Typography>
        </AccordionSummary>

      
        <AccordionDetails>


        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>
          
         <p style={{marginTop:"40px"}}> <span>Breast Reconstruction Options</span></p>
         <p>There are a few options for breast reconstruction, and which one you use will depend on your age, body type, and treatment plan.</p>
        
         <p style={{marginLeft:"28px"}}><span>• Breast Implants:</span> The breasts are filled with sacs of saline or silicone gel, or a combination of both.</p>
         <p style={{marginLeft:"28px"}}><span>• Skin Grafts and Transplant </span>(TRAM Flap, Latissimus Flap, or Gluteal Flap): An alternative solution is to use tissue the surgeon removes from another part of your body, like the belly (TRAM), back (latissimus), or buttocks (gluteal). The surgeon sculpts this tissue into the shape of your breast.</p>
         <p style={{marginLeft:"28px"}}><span>• Flap</span> (Deep Inferior Epigastric Perforator Flap): This solution uses the abdominal fat (no muscle) to sculpt the tissue into the shape of your breast, resulting in a full tummy tuck and no lifting restrictions later.</p>
         <p style={{marginLeft:"28px"}}><span>• Additional Cosmetic Details:</span> In addition to reconstructing the breast, the surgeon can add a nipple, change the shape or size of the reconstructed breast, and operate on the opposite breast as well for a better match. The plastic surgeon will be able to discuss with you the benefits and risks of each procedure and help you decide what will make you feel the most natural.</p>
  
            
            <p style={{marginTop:"40px"}}> <span>Are there any Alternatives to Breast Reconstruction Surgery?</span></p>
            <p>One alternative to breast reconstruction is a removable prosthetic breast that is worn in the bra. This will preserve the shape and look of the breast without the surgical procedures. Some women opt for a prosthesis to help balance out their weight and posture, too.</p>

            <p style={{marginTop:"40px"}}> <span>Coping with Change, Making Your Plan</span></p>
            <p>After a mastectomy, you have several choices that can help you become comfortable with the changes in your body. They are all options with benefits to each approach. What is best for you and your body may not be what is best for another woman.</p>
            <p>If you think you will opt for a breast reconstruction, you should speak with your medical team before you have the lumpectomy or mastectomy, even if you plan to wait until later to have your breast reconstruction.</p>
            <p>Whether you undergo breast reconstruction, wear a prosthetic breast, or choose to simply embrace the changes you have experienced by allowing the breast removal to remain obvious, you should feel free to make whatever decision is right for you. The goal is to prevent the discomfort of unwanted change, while enabling you to accept what has occurred and continue on with your life.</p>

            
   
      </div>
        
     
        </AccordionDetails>
      
      
      </Accordion>

      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >Lumpectomy</Typography>
        </AccordionSummary>

      
        <AccordionDetails>


        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>
          
            <p > <span>What Is A Lumpectomy?</span></p>
            <p>A lumpectomy usually removes the least amount of breast tissue needed to get the tumor out and a margin of healthy tissue around it. The surgeon removes the cancer and a small portion or margin of the surrounding tissue, but not the breast itself. Even though the lumpectomy is the least invasive breast cancer surgery, it can still be very effective, and further surgery may not be needed.</p>
        
            <p style={{marginTop:"40px"}}> <span>What happens when more tissue needs to be taken?</span></p>
            <p>A partial mastectomy requires the surgeon to remove a larger portion of the breast than in the lumpectomy — perhaps a whole segment or quadrant of tissue — in order to eliminate the cancer. Occasionally, the surgeon will remove some of the lining over the chest muscles as well.</p>
           
          
             
           
            
   
      </div>
        
     
        </AccordionDetails>
      
      
      </Accordion>

      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >Mastectomy</Typography>
        </AccordionSummary>

      
        <AccordionDetails>


        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>
          
             
        <p> <span>What Is A Mastectomy?</span></p>
        <p>In the past, breast cancer surgery often required removing the entire breast, chest wall, and all axillary lymph nodes in a procedure called a radical mastectomy. While radical mastectomies are less common today, there are instances in which this surgery is the best option to treat the cancer.</p>
        <p>If the cancer is detected early enough, there are usually options that will remove the cancer while preserving breast tissue. The common options are a lumpectomy (most often followed by breast radiation treatments) and a partial mastectomy.</p>
            
            <p> <span>The more common mastectomy procedures today are:</span></p>
            <p style={{marginTop:"40px"}}> <span>Partial Mastectomy</span></p>
            <p>A partial mastectomy requires the surgeon to remove a larger portion of the breast than in the lumpectomy — perhaps a whole segment or quadrant of tissue — in order to eliminate the cancer. Occasionally, the surgeon will remove some of the lining over the chest muscles as well.</p>
           
            <p style={{marginTop:"40px"}}> <span>Skin-Sparing Mastectomy</span></p>
            <p>This procedure requires removal of the breast, nipple, areola, and sentinel lymph node (or nodes) but not the breast skin. Many women who intend to have breast reconstruction will opt for this procedure.</p>
            
            <p style={{marginTop:"40px"}}> <span>Simple Mastectomy (also known as total mastectomy)</span></p>
            <p>This surgery requires removal of the breast, nipple, areola, and sentinel lymph node or nodes. It leaves the chest wall and more distant lymph nodes intact.</p>
         
            <p style={{marginTop:"40px"}}> <span>Modified Radical Mastectomy</span></p>
            <p>This procedure requires removal of the entire breast, nipple, areola, and axillary lymph nodes but often leaves the chest wall intact.</p>

           
            
   
      </div>
        
     
        </AccordionDetails>
      
      
      </Accordion>




      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >Chemotherapy</Typography>
        </AccordionSummary>

      
        <AccordionDetails>


        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>

          
              <p> <span>What Is Chemotherapy?</span></p>
              <p>Chemotherapy is a treatment method that uses a combination of drugs to either destroy cancer cells or slow down the growth of cancer cells.</p>
              <p>Cytotoxic drugs (meaning “toxic to cells”) are usually given orally or through a vein (intravenously or “through the bloodstream”).</p>
              <p>Chemotherapy is a systemic therapy, meaning that the drugs travel in the bloodstream throughout the entire body.</p>
              
              <p style={{marginTop:"40px"}}> <span>Who Needs Breast Cancer Chemotherapy?</span></p>
              <p>Chemotherapy is offered to most patients based on several factors including:</p>
              <p style={{marginLeft:"28px"}}>• Tumor type</p>
              <p style={{marginLeft:"28px"}}>• Tumor grade</p>
              <p style={{marginLeft:"28px"}}>• Tumor size</p>
              <p style={{marginLeft:"28px"}}>• Type of receptors and status</p>
              <p style={{marginLeft:"28px"}}>• Number of lymph nodes involved and degree of involvement</p>
              <p style={{marginLeft:"28px"}}>• The risk for cancer to spread elsewhere in the body</p>
            
              <p>Your medical team will work to select the right blend of chemotherapy drugs to suppress each stage of the cancer cells’ growth.</p>
            
             
              <p style={{marginTop:"40px"}}> <span>How Is Breast Cancer Chemotherapy Administered?</span></p>
              <p>Chemotherapy is commonly prescribed along with other treatment methods such as hormonal and targeted therapies. It can also be used to shrink a tumor before surgery for easier and safer removal, referred to as neoadjuvant chemotherapy.</p>
              <p>If you receive chemotherapy, your doctor will administer it in short courses with several weeks in between to allow your normal cells to recover. This treatment period can be a challenging time emotionally and physically. It is important for you to develop a support team of family or friends that can help comfort and encourage you in this time.</p>
             
              <p style={{marginTop:"40px"}}> <span>What Are The Side Effects Of Chemotherapy?</span></p>
               <p>Although chemotherapy kills the fast-growing cancer cells, the drugs can also unfortunately harm normal cells that divide rapidly.</p>
               <p>You may have a reduction in red blood cells. When drugs lower the levels of healthy blood cells, you’re more likely to get infections, bruise or bleed easily, and feel very weak and tired. Your healthcare team will check for low levels of blood cells. If your levels are low, your healthcare team may stop the chemotherapy for a while or reduce the dose of the drug. There are also medicines that can help your body make new blood cells.</p>
               <p>You may have a reduction in white blood cells. A reduction in white blood cells can increase your risk of getting an infection. This is why it’s important to stay away from people who have a cold or flu, eat healthy meals, get your rest, and take your temperature each day. A rise in body temperature is usually the first sign of your white blood cells being very low, known as neutropenia. There are medications your medical oncologist can prescribe to get your white blood cells to start increasing in number again.</p>
               <p>Chemotherapy may affect the cells that produce hair. Chemotherapy may cause hair loss. If you lose your hair, it will grow back after treatment, but the color and texture may be changed.</p>
               <p>You may have changes from a different balance of cells lining your intestinal tract. Chemotherapy can cause a poor appetite, nausea and vomiting, diarrhea, or mouth and lip sores. Your healthcare team can prescribe medicines and suggest other ways to help with these problems.</p>
               <p>Chemotherapy may affect the nerve cells. Some drugs used for breast cancer can cause tingling or numbness in the hands or feet. This type of side effect is called peripheral neuropathy. This usually goes away after treatment is over.</p>
              
               <p style={{marginTop:"40px"}}>Are there any lasting side effects of chemotherapy? </p>
               <p>Sometimes people do experience problems that may not go away. For example, some of the drugs used for breast cancer may weaken the heart. Your doctor may check your heart before, during, and after treatment. A rare side effect of chemotherapy is that occasionally, years after treatment, a few women have developed leukemia (cancer of the blood cells).</p>
               <p>Some chemotherapy drugs can damage the ovaries. If you have not gone through menopause yet, you may have hot flashes and vaginal dryness. Your menstrual periods may no longer be regular or they may stop. You may become infertile (unable to become pregnant).</p>
               <p>Pregnancy During Chemotharapy Before treatment begins, you should talk with your doctor about family planning because many drugs given during the first trimester are known to cause birth defects.</p>
               <p>Although chemotherapy is often a very personally challenging time in life, there are thousands of people today who are very thankful for its life-saving and life-extending potential.</p>
            
   
      </div>
        
     
        </AccordionDetails>
      
      
      </Accordion>


      <Accordion
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >Radiation Theraphy</Typography>
        </AccordionSummary>

      
        <AccordionDetails>


        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>
          
        <p> <span>What is Radiation Therapy and How does it Work?</span></p>
        <p>Radiation therapy (also called radiotherapy) uses high-energy rays to kill cancer cells. It affects cells only in the part of the body that is treated with the radiation. Breast cancer radiation therapy may be used to destroy any remaining mutated cells that remain in the breast or armpit area after surgery.</p>
          
            <p style={{marginTop:"40px"}}> Note: There are special situations in which radiation is used for women with metastatic breast cancer experiencing painful bone metastasis. This section however focused on the use of radiation for adjuvant therapy (treatment given after the main treatment to lower the chance of breast cancer returning).</p>
            <p style={{marginTop:"40px"}}> <span>Who should expect to be prescribed radiation therapy and what is involved?</span></p>
             <p>Some people with Stage 0 (DCIS) and most people with Stage 1 invasive cancer and higher, who have had a lumpectomy, can expect radiation therapy to be a part of their treatment regimen.</p>
           
            <p style={{marginTop:"40px"}}> <span>What are the different kinds of radiation therapy?</span></p>
            <p>Most radiation therapy is administered by a radiation oncologist at a radiation center and usually begins three to four weeks after surgery. The radiation is used to destroy undetectable cancer cells and reduce the risk of cancer recurring in the affected breast.</p>
            <p>There are two main kinds of radiation therapy that may be considered, and some people have both.</p>
            <p style={{marginLeft:"28px"}}>• External Beam Breast Cancer Radiation (Traditional cancer-killing rays delivered by a large machine)</p>
            <p style={{marginLeft:"28px"}}>• Internal Breast Cancer Radiation (Newer treatments that inject radioactive cancer-killing treatments only in the affected area)</p>
            <p>Keep in mind that the course of treatment you decide is something you should discuss with your radiation oncologist in order to ensure that it is as effective as possible.</p>

            <p style={{marginTop:"40px"}}> <span>External Beam Breast Cancer Radiation</span></p>
            <p>External beam radiation (also known as traditional or whole breast radiation therapy) uses external beam radiation, like that of a regular x-ray, but the beam is highly focused and targets the cancerous area for two to three minutes. This form of treatment usually involves multiple appointments in an outpatient radiation center — as many as five days a week for five or six weeks. Certain situations may require a slightly higher dose of radiation over a shorter course of treatment, usually three to four weeks (called accelerated radiation.)</p>
            <p>External breast cancer radiation used to be the most common type used for breast cancer. However in more recent years internal radiation clinical trials have enabled more women to opt for this method if their cancer was caught early enough. Internal radiation typically offers fewer noticeable side effects.</p>


            <p style={{marginTop:"40px"}}> <span>Internal Breast Cancer Radiation</span></p>
            <p>Internal radiation is a form of partial breast radiation. During the treatment, the physician or surgeon inserts a radioactive liquid using needles, wires, or a catheter in order to target the area where the cancer originally began to grow and tissue closest to the tumor site to kill any possible remaining cancer cells.</p>
           

            <p style={{marginTop:"40px"}}> <span>Brachytherapy (Internal Radiation) Delivered Via Implantable Device</span></p>
            <p>The doctor places a device inside the breast at the time of the surgery or shortly thereafter which carries targeted radiation to the tissue where the cancer originally grew (also known as the tumor bed). This type of radiation may take only one treatment delivered in the operating room or may take 5-7 days given on an outpatient basis in the radiation therapy department.</p>
            <p>In nearly all cases, the appropriate method is determined by the radiation oncologist based on the location and size of the tumor.</p>


            <p style={{marginTop:"40px"}}> <span>What Are The Side Effects Of Radiation?</span></p>
            <p>Radiation therapy can have side effects, and these vary from person to person</p>
            <p>The most common side-effects are:</p>

            <p style={{marginLeft:"28px"}}>• Sunburn-type skin irritation of the targeted area (which may range from mild to intense)</p>
            <p style={{marginLeft:"28px"}}>• Red, dry, tender, or itchy skin</p>
            <p style={{marginLeft:"28px"}}>• Breast heaviness</p>
            <p style={{marginLeft:"28px"}}>• Discoloration, redness, or a bruised appearance</p>
            <p style={{marginLeft:"28px"}}>• General fatigue</p>


            <p> <span>What should I do about side effects from breast cancer radiation?</span></p>
            <p>If you experience difficulty from side effects, you should discuss them with your doctor, who may be able to suggest ways you can treat side effects and help yourself feel more comfortable. These problems usually go away over a short period of time, but there may be a lasting change in the color of your skin.</p>
          
            <p style={{marginTop:"40px"}}> Here are some good general tips for dealing with the most common side effects of radiation:</p>
          
            <p style={{marginLeft:"28px"}}>• Bras and tight clothes may rub your skin and cause soreness. You may want to wear loose-fitting cotton clothes during this time.</p>
            <p style={{marginLeft:"28px"}}>• Gentle skin care also is important. You should check with your doctor before using any deodorants, lotions, or creams on the treated area.</p>
            <p style={{marginLeft:"28px"}}>• You need to be aware that more intense treatment methods will tax your body. During radiation therapy, it is essential to take good care of yourself by getting extra rest and making good nutrition a priority.</p>
            <p style={{marginLeft:"28px"}}>• Although resting is important, doctors usually advise patients to try to stay active too, unless it leads to pain or other problems. Routine exercise has been proven to reduce the degree of fatigue patients experience from radiation therapy.</p>
            <p style={{marginLeft:"28px"}}>• You may wish to discuss with your doctor the possible long-term effects of radiation therapy. For example, radiation therapy to the chest may harm the lung or heart. Also, it can change the size of your breast and the way it looks. If any of these problems occur, your oncology team can tell you how to manage them.</p>

       
                

      </div>
        
     
        </AccordionDetails>
      
      
      </Accordion>


      <Accordion
        expanded={expanded === "panel9"}
        onChange={handleChange("panel9")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >Harmone Theraphy</Typography>
        </AccordionSummary>

      
        <AccordionDetails>


        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>
          
        
            
            <p> <span>How can Hormones Affect the Growth of Breast Cancer?</span></p>
            <p>Hormones like estrogen and progesterone are chemicals produced by glands in the body. Normally, these hormones help regulate body cycles, like menstruation. However, sometimes these same hormones can cause cancer to grow.</p>
            <p>The pathologist will perform tests on the breast cancer cells to determine if they have receptors that feed on estrogen or progesterone, stimulating their growth. If the cancer cells have these receptors, your doctor may recommend hormone therapy drugs, such as blockers or inhibitors. Both types of drugs help to destroy cancer cells by cutting off their supply of hormones.</p>
          
            <p style={{marginTop:"40px"}}> <span>What do hormone blockers do to treat breast cancer?</span></p>
            <p>The most common hormone therapy drug is Tamoxifen. It blocks the estrogen-shaped openings in the cells, preventing estrogen-fueled cancers from growing.</p>
            <p>Tamoxifen can be taken as a pill on a daily basis, up to five years after surgery.</p>
         
            <p style={{marginTop:"40px"}}> <span>What are hormone inhibitors and how do they work?</span></p>
            <p>Hormone inhibitors also target breast cancer cells with hormone receptors, but unlike hormone blockers, they work by reducing the body’s hormone production. When breast cancer cells are cut off from the ‘food supply’ (in this case, estrogen) the tumor begins to starve and die.</p>
            <p>Generally, the benefits of using hormone therapy and chemotherapy together have a much greater combined effect than using either alone. If your breast cancer is positive for hormone receptors, your doctor may recommend both therapies.</p>
         
            <p style={{marginTop:"40px"}}> <span>When are hormone blockers used?</span></p>
            <p>Hormone inhibitors and blocker options may depend on a person’s stage of life.</p>
            <p>Hormone inhibitors are only used in postmenopausal women. They can be given to premenopausal women if steps are taken by the treatment team to put the ovaries to sleep by blocking the ovaries from producing estrogen or progesterone</p>
            <p>Hormonal therapy may also be called anti-hormone treatment. Think of it as the opposite of hormone replacement therapy (HRT). If pathology tests show that the tumor in your breast has hormone receptors (referred to in the pathology report as being Estrogen receptor positive and/or progestersone receptor positive) , then hormonal therapy may be recommended for you after the completion of your acute treatment (surgery, chemo, and radiation) . (See pathology Tests with Breast Tissue.)</p>
            <p>Hormonal therapy keeps breast cancer cells from receiving or using the natural female hormones in your body (estrogen and progesterone) which they need to grow. Hormonal therapy also blocks the ability of health breast cells to receive hormones that could stimulate breast cancer cells to regrow again in the form of recurrence of the breast cancer within the breast or elsewhere in the body.</p>
         
            <p style={{marginTop:"40px"}}> <span>Options before Menopause</span></p>
            <p>If you have not gone through menopause, the options include:</p>
            <p style={{marginLeft:"28px"}}>• <span>Tamoxifen:</span> This drug can prevent the original breast cancer from returning and also helps prevent the development of new cancers in the other breast or growing elsewhere in your body in the future. It’s in pill form and must be taken every day usually for 5 years.</p>
            <p style={{marginLeft:"28px"}}>• In general, the side effects of Tamoxifen are similar to some of the symptoms of menopause. The most common are hot flashes and vaginal discharge. Others are irregular menstrual periods, thinning bones, headaches, fatigue, nausea, vomiting, vaginal dryness or itching, irritation of the skin around the vagina, and skin rash. Serious side effects are rare, but they include blood clots, strokes, uterine cancer, and cataracts.</p>
            <p style={{marginLeft:"28px"}}>• <span>LH-RH agonist:</span> This type of drug can prevent the ovaries from making estrogen. The estrogen level falls slowly. Examples are leuprolide and goserelin. This type of drug may be given by injection under the skin in the stomach area. Side effects include hot flashes, headaches, weight gain, thinning bones, and bone pain. This is sometimes called chemical menopause. This enables the patient to take hormone inhibitor drugs more commonly given to post-menopausal women.</p>
            <p style={{marginLeft:"28px"}}>• <span>Surgery to remove your ovaries:</span> Until you go through menopause, your ovaries are your body’s main source of estrogen. When the surgeon removes your ovaries, this source of estrogen is also removed. (A woman who has gone through menopause wouldn’t benefit from this kind of surgery because her ovaries produce little to no estrogen.) When the ovaries are removed, menopause occurs right away. This is known as surgical menopause and can enable the patient to take hormone inhibitor drugs. The side effects are often more severe than those caused by natural menopause but taper off with time. Your oncology team can suggest ways to cope with these side effects.</p>
             <p>It is important to note that if a patient receives LH-RH agonist treatment or has her ovaries surgically removed, she will likely be placed on an aromatase inhibitor instead of Tamoxifen, but both remain options.</p>


            <p style={{marginTop:"40px"}}> <span>Options after Menopause</span></p>
            <p>If you have gone through menopause, the options include:</p>
            <p style={{marginLeft:"28px"}}><span>• Aromatase inhibitor:</span> This type of drug prevents the body from making a form of estrogen (estradiol). Examples are anastrazole, exemestane, and letrozole. Common side effects include hot flashes, nausea, vomiting, and painful bones or joints. Serious side effects include thinning bones and an increase in cholesterol. This is also a pill taken daily.</p>
            <p style={{marginLeft:"28px"}}>• <span>Tamoxifen:</span> Hormone therapy is given for at least 5 years. Women who have gone through menopause receive tamoxifen for 2 to 5 years. If tamoxifen is given for less than 5 years, then an aromatase inhibitor often is given to complete the 5 years. Some women have hormone therapy for more than 5 years. </p>
            <p>More research is underway to determine if there is a benefit in taking hormonal therapy for longer than 5 years. Some research studies have demonstrated that there may be benefits in switching from one hormonal therapy agent to another during the 5 year period. Your oncologist will discuss with you the most appropriate hormonal therapy regimen based on your breast cancer pathology and age. It is very important to take these pills every day as without adhering to the daily schedule and dosage as planned, you may not reap the benefit of these drugs. Overall, hormonal therapy can reduce risk of recurrence by 50%.</p>
            <p>These drugs can be expensive. If you need financial help in paying for these medications contact the medical oncology nurse practitioner or social worker to receive assistance how to get the prescription at a discount. Based on the side effects listed above, sexual dysfunction can occur. If you are experiencing a drop in libido, vaginal dryness resulting in pain during intercourse, make your oncologist aware as there may be some options for decreasing these side effects.</p>



                

      </div>
        
     
        </AccordionDetails>
      
      
      </Accordion>

      <Accordion
        expanded={expanded === "panel10"}
        onChange={handleChange("panel10")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >Targeted Therapy</Typography>
        </AccordionSummary>

      
        <AccordionDetails>


        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>
          
             <p> <span>What Is Targeted Therapy?</span></p>
             <p>In addition to chemotherapy and hormone therapy, there are newer, more effective treatments that can attack specific breast cancer cells without harming normal cells. Currently, these targeted methods are commonly used in combination with traditional chemotherapy. However, targeted drugs often have less severe side effects than standard chemotherapy drugs.</p>
            
            <p style={{marginTop:"40px"}}> <span>How do breast cancer targeted therapies work?</span></p>
            <p>Breast cancer targeted therapy uses drugs that block the growth of breast cancer cells in specific ways. For example, targeted therapy may block the action of an abnormal protein (such as HER2) that stimulates the growth of breast cancer cells. For example, Trastuzumab (Herceptin®) or lapatinib (TYKERB®) may be given to a woman whose lab tests show that her breast tumor has too much HER2.</p>

            
            <p style={{marginTop:"40px"}}> <span>Monoclonal Antibodies: Binding Agents For Cancer Cells</span></p>
            <p>One type of targeted therapy currently being studied is monoclonal antibodies. These laboratory-manufactured proteins bind with certain cancers.</p>

            <p style={{marginTop:"40px"}}> <span>Herceptin: Targeting HER2-Positive Receptors</span></p>
            <p>Monoclonal antibody drugs such as Herceptin (also known as Trastuzumab) target HER2-positive tumors. If cancer cells are positive for the HER2/neu receptors that means there is an overabundance of receptors on the cancer cell for the growth-stimulating HER2 protein.</p>
            <p>The tumor acts almost like a magnet for growth hormones, and when the tumor cells connect with growth hormone cells, the cancer can quickly grow and multiply. Herceptin helps shrink these HER2-positive tumors by finding the cells, binding with them, and blocking the action of the receptor.</p>
            <p>This drug is given through a vein. It may be given alone or with chemotherapy. Side effects that most commonly occur during the first treatment include fever and chills.</p>
            <p>Other possible side effects include weakness, nausea, vomiting, diarrhea, headaches, difficulty breathing, and rashes. These side effects generally become less severe after the first treatment. Herceptin also may cause heart damage, heart failure, and serious breathing problems. Before and during treatment, your doctor will check your heart and lungs.</p>

            <p style={{marginTop:"40px"}}> <span>How are Herceptin and other biologic targeted therapies administered and what are the likely side effects?</span></p>
            <p>The drug Herceptin is given through a vein. It may be given alone or with chemotherapy. Side effects that most commonly occur during the first treatment include fever and chills.</p>
            <p>Other possible side effects include weakness, nausea, vomiting, diarrhea, headaches, difficulty breathing, and rashes. These side effects generally become less severe after the first treatment. Herceptin also may cause heart damage, heart failure, and serious breathing problems. Before and during treatment, your doctor will check your heart and lungs.</p>

            <p style={{marginTop:"40px"}}> <span>Lapatinib: blocking abnormal proteins that signal cancer cells to multiply</span></p>
            <p>This tablet, taken by mouth, helps stop or slow the spread of cancer cells. Lapatinib is given with chemotherapy or after other methods have not worked to slow the cancer.</p>
            <p>Side effects can include nausea, vomiting, diarrhea, tiredness, mouth sores, and rashes. It can also cause red, painful hands and feet. Before treatment, your doctor will check your heart and liver. During treatment, your doctor will watch for signs of heart, lung, or liver problems.</p>
            <p>As with all medical treatments, if you experience unusual changes in your health during targeted therapy, notify your doctor immediately.</p>
           

            <p style={{marginTop:"40px"}}> <span>Bevacizumab: Reducing the cancer cells’ blood supply</span></p>
            <p>Another targeted therapy, Bevacizumab, prevents tumors from making new blood vessels that could feed the tumor, essentially cutting off the cancer cells from all nutrients.</p>

      </div>
        
     
        </AccordionDetails>
      
      
      </Accordion>


      <Accordion
        expanded={expanded === "panel11"}
        onChange={handleChange("panel11")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >Radiation Theraphy</Typography>
        </AccordionSummary>

      
        <AccordionDetails>


        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>
          
            <p> <span>What happens when my cancer treatment is complete?</span></p>
            <p>You’ll need regular check-ups after treatment for breast cancer. Check-ups help ensure that any changes in your health are noted and treated if needed. If you have any new health problems between checkups, you should contact your doctor.</p>
            
            <p> <span>What happens at breast cancer follow-up appointments?</span></p>
            <p>Your doctor will check how you are feeling. Likely if you had surgery, chemotherapy, and radiation, your treatment team will rotate seeing you every few months at first and then your appointments become more spaced out as time goes by.</p>
            <p>In addition to checking for the return of breast cancer, check-ups help detect health problems that can result from cancer treatment, such as linger side effects or even new side effects.</p>
            <p>Check-ups usually include an exam of the neck, underarm, chest, and breast areas. Since a new breast cancer may develop, you should continue to have regular mammograms. You probably won’t need a mammogram of a reconstructed breast or if you had a mastectomy without reconstruction. Your doctor may order other imaging procedures or lab tests.</p>
            <p>During follow-up appointments, you should ask your doctors what the probability is of developing a local recurrence within the breast tissue or a distant recurrence in another organ, based on the stage of the breast cancer and the treatments you’ve had.</p>
            
            <p> <span>What kinds of problems need to be reported to my physician during the breast cancer follow-up phase?</span></p>
            <p>You should report any changes in the treated area or in your other breast to your doctor right away.</p>
            <p>Also, make your doctor aware of any new aches or pains that last more than 3 weeks that don’t have a reason to occur. For example, if you’ve been lifting something heavy you may have hurt your back. If you have a new ache or pain elsewhere, think about what activities you have done recently that might be the cause. If you can’t think of any reasons for these new symptoms, call your doctor.</p>
                

      </div>
        
     
        </AccordionDetails>
      
      
      </Accordion>


   





    </div>
  );
}

