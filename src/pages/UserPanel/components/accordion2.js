import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import waiting from "../images/waiting.png";
import completed from "../images/completed.png";
import download from "../images/download.png";
import "../userPanel.css"
import { getAuth } from "firebase/auth";
import { MdExpandMore } from "react-icons/md";
import { getStorage } from "firebase/storage";
import { db } from "../../../firebase";
import { saveAs } from 'file-saver'
import { doc } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import { useState,useEffect } from "react";
import { collection, setDoc} from "firebase/firestore";
import { query } from "firebase/firestore";
import { orderBy } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import { storage } from "../../../firebase";
import { ref, deleteObject } from "firebase/storage";
import { updateDoc, deleteField } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card9 from "../../../formComponents/Card9/card9";




//açılan pencerenin içi ve bottom çizgiler
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: "white",
  
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
      
     <MdExpandMore className="panel-accordion-icon"
    
     
     />
    }

    {...props}
  />

  //İÇ GENEL
))(({ theme }) => ({
  paddingRight: "0px",
  backgroundColor: "",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)"
  },
  "& .MuiAccordionSummary-content": {
   
    marginLeft: theme.spacing(3),
  
  }
}));

//iç METİN
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  paddingLeft: "1px",

  
}));


export default function CustomizedAccordions() {

     const auth = getAuth();
     const user = auth.currentUser;




  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };



   //WHEN USER CLİCK DOWNLOAD BUTTONS, DOWNLOADS imagesUrl arrays thats includes to Url
   var imagesUrl = [];

     //get users data from firebase and save it to array 
     // that functions help download to images URL when user click on download button
     useEffect(  () => {

      async function fetchData() {
       
      const docRef = doc(db, "VitamuUsersREAL", `${user.email}`);
      const docSnap = await getDoc(docRef);
     
      

      if (docSnap.exists()) {
       

        imagesUrl = docSnap.data().imagesUrl;

        
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }

  



       fetchData();
        
             
             
      },[]);
 
                

     // download image from firebase storage
    const pullImages = () => { 
   

    
    imagesUrl.map((image) => {
      
      

       saveAs(image, "mammogram.jpg");

      /* axios.get(image, {
        responseType: 'blob',
      })
      .then((res) => {
        fileDownload(res.data, "image.png");
      }) */

    })
   
    
    
    }
 

    //delete image from firebase storage
    const deleteImages = async () => {


      const cityRef = doc(db, "VitamuUsersREAL",  `${user.email}`);

            
        // Remove the 'capital' field from the document
        await updateDoc(cityRef, {
        imagesUrl: deleteField()
       }).then((e) => {
        
        
        toast.success('Delete All Images successfully.', {
          position: "bottom-right",
          autoClose: 6000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
       }).catch(error => {
        console.log(error);
       })


      
     
    }




  return (

    <div>

   {/* ACCORDİON 1 */}
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")} >


        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
         
          <Typography style={{
              color: "#000000",
              fontFamily : "'Sofia Pro'",
              fontSize: "15.4px",
              fontWeight: "500"

          }} >May12, 2021  </Typography>
         
         <div
         style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          left: "17.7%",
          fontWeight: "800",
          width:"68%",
          justifyContent:"space-between",
          
         }}
         > 
         
          <Typography style={{
              color: "#000000",
              fontFamily : "'Sofia Pro'",
              fontSize: "15.4px",
              fontWeight: "600",
              position: "relative",
              letterSpacing: "-0.8px",
              width :"70%",
              

          }} >Mammogram and Ultrasound
          </Typography>

          <img className="accordion-waiting2" src={download} />
          </div>
       
        </AccordionSummary>

       
       
        <AccordionDetails>
         
       <div className="accordion-upload-image">
        
         <Card9 
         displayText={"none"} 
         buttonText={"Upload Image"}
         userMailAddress={user.email}
         
         />
         
          </div> 
         
         
     <div className="accordion-details2">
      
   
        <div  onClick={pullImages} >Download All</div>
        
        <div onClick={deleteImages} >Delete</div>

    
     </div>


        </AccordionDetails>
     
     
      </Accordion>

     
     
     
     
     


       {/* ACCORDİON 2 */}
      



       {/* ACCORDİON 3 */}
       <ToastContainer />
    </div>
  );
}

