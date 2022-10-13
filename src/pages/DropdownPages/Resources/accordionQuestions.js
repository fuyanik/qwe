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

export default function AccordionQuestions() {
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
          }} >Can physical activity reduce the risk of breast cancer? </Typography>
        </AccordionSummary>


        <AccordionDetails>

          
          
            
             
        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>
         <p>Exercise boosts the immune system and helps you to keep your weight in check. With as little as three hours of exercise per week, or about 30 minutes a day, a woman can begin to lower her risk of breast cancer. This doesn’t require going to a gym either. Power walking is more than sufficient</p>
         </div>

        
        
        </AccordionDetails>
    
    
    
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} > Can a healthy diet help to prevent breast cancer?</Typography>
        </AccordionSummary>


        <AccordionDetails>
       
        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>
         <p>A nutritious, low-fat diet (30 grams or less) with plenty of fruits and green and orange vegetables can help reduce the risk of developing breast cancer. A high-fat diet increases the risk because fat triggers estrogen production that can fuel tumor growth</p>
         </div>
        
        
        </AccordionDetails>
    
    
    
      </Accordion>


      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >Does smoking cause breast cancer?</Typography>
        </AccordionSummary>


        <AccordionDetails>

        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>
           <p>Smoking is a confirmed risk factor for many types of cancer. Recent research in the last year (2012) has confirmed that smoking is a contributing risk factor for developing breast cancer. Additionally, second hand smoke is also a risk factor for cancer. So if you are a smoker, help yourself in a significant way and join a smoking cessation program to help you stop. The day you stop smoking the healing can begin and each week in which you are smoke-free, you give yourself increasing advantages for a healthier life. Smoking also directly contributes to heart and other lung diseases, too.</p>
         </div>
        
        
        </AccordionDetails>
    
    
    
      </Accordion>



      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }}>Can drinking alcohol increase the risk of breast cancer?</Typography>
        </AccordionSummary>

      
        <AccordionDetails>


        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>
           <p>Moderation is key. One drink per day has been shown to slightly increase the risk of breast cancer. Having more than one drink per day has shown to be a more significant risk factor, and the alcohol content doesn’t matter: wine, beer or a mixed drink. Alcohol also increases estrogen in your bloodstream.</p>         
           <p>Although we know that more than one drink per day increases risks, to date there are no studies that demonstrate directly that the more a person drinks, the greater their risk for cancer. And in some cases, drinking one glass of wine a day can offer heart-health benefit. If you drink alcohol, this is an important topic to discuss with your doctor so that you will know what limits are best for you to observe.</p>
         
         </div>
        
     
        </AccordionDetails>
      
      
      </Accordion>

      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >Is there a link between oral contraceptives and breast cancer?</Typography>
        </AccordionSummary>

      
        <AccordionDetails>


        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>
             <p>There is an increased risk of breast cancer for women who have been using birth control pills for more than five years. However due to the low amount of hormones in birth control pills today, the risk is relatively small. But if a young woman has a significant family history of breast cancer, her gynecologist may recommend taking a break for a year from the pill at the 5-year time frame then resuming again for another 5 years. Although evidence-based research data does not offer strong support for this standard of care, it has nevertheless become an increasingly common practice</p>           
         </div>
        
     
        </AccordionDetails>
      
      
      </Accordion>

      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >Is there a link between hormone replacement therapy (HRT) and breast cancer?</Typography>
        </AccordionSummary>

      
        <AccordionDetails>


        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>
            <p>Yes, there is. HRT was added to the carcinogenic list by the American Cancer Society in the early 2000s. It is recommended that women with known risks not be placed on HRT to control of menopausal symptoms. They should instead seek other safer alternatives.</p>           
         </div>
        
     
        </AccordionDetails>
      
      
      </Accordion>


      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >How often should I do a breast self exam (BSE)</Typography>
        </AccordionSummary>

      
        <AccordionDetails>


        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>
       <p>Give yourself a breast self-exam once a month. Look for any changes in breast tissue, such as changes in size, feeling a palpable lump, dimpling or puckering of the breast, inversion of the nipple, redness or scaliness of the breast skin, redness or scaliness of the nipple/areola area, or discharge of secretions from the nipple.</p>
       <p>If you discover a persistent lump in your breast or any changes, it is very important that you see a physician immediately. Though 8 out of 10 lumps are benign, all require evaluation to confirm that they are not cancerous.</p>
       <p>Women should perform their breast self exam 7-10 days after their menstrual period starts which is also when their breasts are the least tender and lumpy. If they are no longer menstruating, then she should select the same day of the month (first of the month for example) and mark it on the calendar to remind herself when to perform this self exam. What to look for is a change from last month’s exam to this month’s exam. It is not unusual to have lumpy or bumpy breasts.</p>
       <p>All women should know the geography of their own breasts. If having trouble remembering, draw a diagram of where the lumps, bumps, grooves, and other findings are felt so that this can be used as a reminder from month to month. There is no added value in doing breast self exams more often than monthly. Also the findings may be different as well, in relationship to where a woman is in her menstrual cycle.</p>

         </div>
        
     
        </AccordionDetails>
      
      
      </Accordion>


      <Accordion
        
        onChange={handleChange("panel8")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} > Doest a family history of breast cancer put someone at a higher risk? </Typography>
        </AccordionSummary>


        <AccordionDetails>

          
          
            
             
        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>
<p>Although women who have a family history of breast cancer are in a higher risk group, most women who have breast cancer have no family history. Statistically only 5-10% of individuals diagnosed with breast cancer have a family history of this disease.</p>
         </div>

        
        
        </AccordionDetails>
    
    
    
      </Accordion>



      <Accordion
        expanded={expanded === "panel9"}
        onChange={handleChange("panel9")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} > Are mammograms paintful?</Typography>
        </AccordionSummary>


        <AccordionDetails>
       
        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>
          <p>Mammography does compress the breasts and can sometimes cause slight discomfort for a very brief period of time. Patients who are sensitive should schedule their mammograms a week after their menstrual cycle so that the breasts are less tender. Your doctor may say it is fine to take acetaminophen an hour before the x-ray is performed to prevent discomfort too.</p>
         </div>
        
        
        </AccordionDetails>
    
    
    
      </Accordion>


      <Accordion
        expanded={expanded === "panel10"}
        onChange={handleChange("panel10")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >How does menstrual and reproductive history affect breast cancer risks?</Typography>
        </AccordionSummary>


        <AccordionDetails>

        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>
           <p>Women who began their menstrual cycles before age 12, or have no biological children, or had their first child at 30 or older, or began menopause after 55 are at a higher risk. This means that research has proven that the number of menstrual cycles a woman has over time influences risk.</p>
           <p>For women with several of these factors, their risk is higher than for those with just one of these risk factors.</p>
         </div>
        
        
        </AccordionDetails>
    
    
    
      </Accordion>

      <Accordion
        expanded={expanded === "panel11"}
        onChange={handleChange("panel11")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }}>How often should I go to my doctor for a check-up</Typography>
        </AccordionSummary>

      
        <AccordionDetails>


        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>
          <p>You should have a physical every year which should include a clinical breast exam and pelvic exam. If any unusual symptoms or changes in your breasts occur before your scheduled visit, do not hesitate to contact your doctor. Your doctor might advise that you watch to see if the abnormality persists through your next menstrual period or they might recommend a diagnostic mammogram or ultrasound be done now. </p>         
         </div>
        
     
        </AccordionDetails>
      
      
      </Accordion>

      <Accordion
        expanded={expanded === "panel12"}
        onChange={handleChange("panel12")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >What kind of impact does stress have on breast-cancer</Typography>
        </AccordionSummary>

      
        <AccordionDetails>


        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>
             <p>In 2012, some research studies have shown that factors such as traumatic events and losses can alter immune system functions, and when immune functions are altered cancer cells may have an opportunity to get themselves established within one’s body. What has been shown is that it is not the fact that a major life crisis has occurred but instead how the individual reacted to this event and coped (or didn’t cope). Therefore, identifying ways to keep your stress level in check is wise.</p>           
         </div>
        
     
        </AccordionDetails>
      
      
      </Accordion>

      <Accordion
        expanded={expanded === "panel13"}
        onChange={handleChange("panel13")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >What celebrities have or have had breast cancer?</Typography>
        </AccordionSummary>

      
        <AccordionDetails>


        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>
           <p>One in eight women will develop breast cancer at some point in her life. This statistic affects all women equally. You may have a one in eight chance of developing breast cancer, but so does your doctor…and your hairdresser…and the big-name actress in your favorite movie. Rich or poor, famous or unknown, the disease treats everyone the same.</p>
         </div>
        
     
        </AccordionDetails>
      
      
      </Accordion>


      <Accordion
        expanded={expanded === "panel14"}
        onChange={handleChange("panel14")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography style={{  fontFamily : "Avenir Roman", fontSize: "18.6px",      fontWeight: "300"
          }} >Myth: Antiperspirants and deodorants cause breast cancer</Typography>
        </AccordionSummary>

      
        <AccordionDetails>


        <div className="accordions-text" style={{display: "flex", flexDirection: "column", gap:"16px" }}>
            <p>Having the support of others is an important part of breast cancer survivorship. Research actually shows that taking part in support groups, where you both give and receive help, is an effective way to reduce the stress and anxiety that can come with a breast cancer diagnosis. It’s OK to ask for support, and there are many groups out there willing to provide it to you at no cost.</p>
            <p>Below are some free resources you can use to connect with a breast cancer support group. They include both online and in-person communities, where you can talk with a group or one-on-one. Some focus on certain life stages, while others help you recover from specific experiences. All of them are designed to get you the help you need so you can move forward with your life.</p>
            <p style={{marginLeft:"28px"}}>• NBCF hosts monthly in-person support groups. If you’re local to the DFW area and would like to learn more, click here.</p>
            <p style={{marginLeft:"28px"}}>• The Cancer Support Community offers free support groups in a number of cities around the country. If you don’t live near a participating city, CSC also has online support groups led by licensed professionals. You can learn more about breast cancer-related support groups at cancersupportcommunity.org.</p>
            <p style={{marginLeft:"28px"}}>• Since cancer is less common among young adults, younger cancer patients can feel even more isolated. The mobile app Instapeer seeks to help by creating connections between young adult cancer patients, survivors and caregivers. The free app can be downloaded at instapeer.org.</p>
            <p style={{marginLeft:"28px"}}>• The American Cancer Society offers one-on-one support through the Reach To Recovery program. Newly diagnosed breast cancer patients are paired with breast cancer survivor volunteers. Learn more at the Reach To Recovery page on cancer.org.</p>
            <p style={{marginLeft:"28px"}}>• The American Cancer Society also offers the Cancer Survivors Network, which has discussion boards and a chat room where you can talk with other cancer survivors. To access the network, register online at csn.cancer.org.</p>
            <p style={{marginLeft:"28px"}}>• GriefShare is a support group for people who have experienced the loss of a loved one. There are thousands of local groups worldwide; find one near you at griefshare.org.</p>
         </div>
        
     
        </AccordionDetails>
      
      
      </Accordion>





   





    </div>
  );
}

