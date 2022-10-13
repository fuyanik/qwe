import Navbar from "../../homeComponents/1.Navbar/navbar";

import "./userPanelMobile.css";
import { useState,useEffect } from "react";
import CustomizedAccordions from "./components/accordion";
import CustomizedAccordions2 from "./components/accordion2";
import SelectLabels from "./components/select";
import SelectLabels2 from "./components/select2";

import SelectLabels3 from "./components/select3";
import SelectLabels4 from "./components/select4";
import SelectLabels5 from "./components/select5";
import { ToastContainer, toast } from 'react-toastify';
//FİRE BASE İMPORTS
import {doc, setDoc,onSnapshot,  } from "firebase/firestore"; 
import {db} from "../../firebase";
import { getAuth,updateEmail,reauthenticateWithCredential, EmailAuthProvider, updatePassword} from "firebase/auth";
import 'react-toastify/dist/ReactToastify.css';



const UserPanelMobile = () => { 

    const [isSlect1, setIsSelect1] = useState(true);
    const [isSlect2, setIsSelect2] = useState(false);
    const [isSlect3, setIsSelect3] = useState(false);
    const [isSlect4, setIsSelect4] = useState(false);
    const [isSlect5, setIsSelect5] = useState(false);




    const auth = getAuth();
    const user = auth.currentUser;

    

   const [userBiRads, setUserBiRads] = useState("");
   const [userAge, setUserAge] = useState(1);
   const [userPassword, setUserPassword] = useState("");
   
  // get birad and userage data and re authenticate user
   useEffect(() => {
    
    
   { user && onSnapshot(doc(db, "VitamuUsersREAL", `${user.email}`), (doc) => {
      
       setUserBiRads(doc.data().BiRads);
       setUserAge(doc.data().UserAge);
       setUserPassword(doc.data().Password);
    
      });


      const credential = EmailAuthProvider.credential(
       auth.currentUser.email,
       userPassword,
         )
        
         reauthenticateWithCredential(user, credential).then(() => {
         // User re-authenticated.
         }).catch((error) => {
           // An error ocurred
          // ...
         });}

   } , []);


   //get email when user changes email
   const onChangeEmail = (e) => {
     setChangedEmail(e.target.value);
   }

   //update email when user clicks update email button
   const  ChangeEmail = async () => {
     updateEmail(user, changedEmail).then(() => {
        
       toast.success("Email updated successfully", {
         position: "bottom-right",
         autoClose: 6000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
       });
       setVal(() => "")
       setChangedEmail("");

     }).catch((error) => {

       toast.error("This e-mail address is used by another user.", {
         position: "bottom-right",
         autoClose: 6000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
       });
     });
     
     
   }


   //update password when user clicks update password button
   const updateUserPassword =  () => {
        
     updatePassword(user, "313131").then(() => {
       
       toast.success("Password updated successfully", {
         position: "bottom-right",
         autoClose: 6000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
       });

     }).catch((error) => {

       toast.error("Error has an occured.", {
         position: "bottom-right",
         autoClose: 6000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
       });
     });

    }

    const [changedEmail, setChangedEmail] = useState("");
   
    // it helps in reset input field after update email
    const [val, setVal] = useState();
    

    const SelfExamEnrollButton = () =>{
      console.log("ı am click mobile enroll")
      const cityRef = doc(db, "VitamuUsersREAL", `${user.email}`);

    setDoc(cityRef,
      { remindMe: true }, 
      { merge: true }
      ).then((e) => {
        console.log("deleted"); 
        
        toast.success('Enroll Successed', {
          position: "bottom",
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

        
        <>
        <Navbar  mobileMenuText={"Close"}  mobileMenuTo ={"/"} />
          
          

            <div className="userPanel-mobile">
               
               
    
               <div className="userPanel-mobile-header">
    
                   <p> {user.displayName} </p>
                   <p> This is your Vitamu Account. You can track your rechecks, enroll breast self-exam reminder, and upload/download medical images here.</p>
    
               </div>
    
    
    
               <div className="userPanel-mobile-nav">
    
                   <div 
                    onClick={() => {setIsSelect1(true); setIsSelect2(false); setIsSelect3(false); setIsSelect4(false); setIsSelect5(false);}}
                    style={{backgroundColor: isSlect1 && '#FFD000' }}
                   className="userPanel-mobile-nav-button">My Rechecks</div>
                   <div
                    onClick={() => {setIsSelect1(false); setIsSelect2(true); setIsSelect3(false); setIsSelect4(false); setIsSelect5(false);}}
                    style={{backgroundColor: isSlect2 && '#FFD000' }}
                   className="userPanel-mobile-nav-button">My Images</div>
                   <div
                    onClick={() => {setIsSelect1(false); setIsSelect2(false); setIsSelect3(true); setIsSelect4(false); setIsSelect5(false);}}
                    style={{backgroundColor: isSlect3 && '#FFD000' }}
                   className="userPanel-mobile-nav-button">Self-Exam </div>
                   <div
                    onClick={() => {setIsSelect1(false); setIsSelect2(false); setIsSelect3(false); setIsSelect4(true); setIsSelect5(false);}}
                    style={{backgroundColor: isSlect4 && '#FFD000' }}
                   className="userPanel-mobile-nav-button">   Form</div>
                   <div
                    onClick={() => {setIsSelect1(false); setIsSelect2(false); setIsSelect3(false); setIsSelect4(false); setIsSelect5(true);}}
                    style={{backgroundColor: isSlect5 && '#FFD000' }}
                   className="userPanel-mobile-nav-button"> Information</div>
    
               </div>
    
    
               <div className="userPanel-mobile-hero">
    
                    {isSlect1 && 
                    <CustomizedAccordions/> }

                    {isSlect2 && 
                    <CustomizedAccordions2/>}

                    {isSlect3 && 
                    <div className="self-exam"> 
                      
                      <div className="self-exam-header">
                          <p>According to the John Hopkins University, 40% of breast cancer is diagnosed by women who feel a lump. This explains why breast-self exams are so important. The National Breast Cancer Foundation recommends conducting a breast self-exam once a month. </p>
                          <p>However, a recent survey has indicated only 12% of women conduct a self-breast exam regularly, which is extremely low considering the cost of a late diagnosis and treatment in advance. </p>
                          <p>Here is a new reminder for you. Once you enroll, we will remind your self-exam every month via phone, e-mail, or both.</p>             
       
                      </div>
                            
                      <div className="self-exam-body">
                          <div className="self-exam-body-child">
                            <p>  Remid me day </p> <SelectLabels/> <p> of every month. </p>
                          </div>
                        
                          <div className="self-exam-body-child">
                            <p>  I want to be reminded by </p> <SelectLabels2/>
                          </div>
        
                          <div onClick={SelfExamEnrollButton} className="self-exam-body-button">Enroll today</div>
                       
                        </div>
        
                        <div className="self-exam-footer"> 
                          <p>We also have a visual guide that will help you learn how to conduct breast-self exam.</p>
        
                          <div className="self-exam-footer-child">
        
                            <div className="self-exam-footer-child-button">Download PDF</div>  <p>or</p>  <div className="self-exam-footer-child-button">Watch on Youtube</div>
                            
        
                          </div>
        
        
                        </div>
                    
        
        
        
                  
                    </div> }

                    {isSlect4 && 
                    <div className="userPanel-main-body-right-MyRechecks">  
                        
  
                        <div className="health-records">
                          
                          <p>We can acquire your medical copies anywhere in the world, with your written permission.</p> 
                          <p>Choose where your medical records are, download, fill and sign the form, and upload the picture of it here. That’s it.</p>
                          
                          <SelectLabels3/>
                          <SelectLabels4/>
                          <SelectLabels5/>
            
                          <div className="health-records-button">Download the Form</div>
            
                          <p>When filled and signed.</p>
                          <p>Take a picture or screenshot.</p>
            
                          <div className="health-records-button2">Upload the Image</div>
                           
                        </div>
            
                    
                    
                    </div> }
                   
                    
                 
                    {isSlect5 && 
          <div className="userPanel-main-body-info"> 
             <div className="userPanel-main-body-info-left">
  
                  <div className="userPanel-main-body-info-left-card">
                    <span>Your Info Card</span>
                   
                    <div> 
                      <p>Name</p>
                      <p>{user.displayName}</p> 
                    </div>
  
                    <div> 
                      <p>Date of the Birth</p>
                      <p> { 2022 -  userAge }</p> 
                    </div>
  
                    <div> 
                      <p>E-mail address</p>
                      <p>{user.email}</p> 
                    </div>
  
                    <div> 
                      <p>Phone Number</p>
                      <p>7042232211</p> 
                    </div>
  
                    <div> 
                      <p>Last Bi-rads Score</p>
                      <p>{userBiRads}</p> 
                    </div>
  
                    <div className="userPanel-main-body-info-left-card-button" >Delete My Account</div>
  
  
                  </div>
  
  
             </div>
             <div className="userPanel-main-body-info-right">
  
              <div className="userPanel-main-body-info-right-child">
                <p> Change your e-mail address</p>
                <input value={val} onChange={onChangeEmail} className="nameİnput"/>
                <div onClick={ChangeEmail} > Update E-mail</div>
              </div>
  
              <div className="userPanel-main-body-info-right-child">
                <p> Change your phone number</p>
                <input className="nameİnput"/>
                <div> Update Phone Number</div>
              </div>
  
              <div className="userPanel-main-body-info-right-child">
                <p> Change your password</p>
                <input  type="password" className="nameİnput"/>
                <div onClick={updateUserPassword} > Update Password</div>
              </div>
  
                
             
  
              <ToastContainer/>
  
             </div>
          
         
          </div>
          
          
          }
    
    
    
               </div>
             
            
          
               
        
           
            </div>
        </>
    )
}

export default UserPanelMobile;