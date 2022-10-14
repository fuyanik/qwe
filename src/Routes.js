
import Home from "./pages/Home"
import Form from "./pages/Form"

import MobileNavMenu from './pages/MobileNavMenu/mobileNavMenu';


import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import {Routes} from 'react-router-dom';
import HumanError from "./pages/DropdownPages/HumanError/humanError";
import Login from "./formComponents/components/Auth/login";
import Register from "./formComponents/components/Auth/register";
import Panel from "./pages/Panel/panel";

import UserPanel from "./pages/UserPanel/userPanel";


import MissedDiagnosis from "./pages/DropdownPages/MissedDiagnosis/missedDiagnosis";

import PayScreen from "./pages/PayScreen/payScreen";
import EarlyDetection from "./pages/DropdownPages/EarlyDetection/earlyDetection";
import Statistics from "./pages/DropdownPages/Statistics/statistics";
import Resources from "./pages/DropdownPages/Resources/resources";
import HowWorks from "./pages/DropdownPages/HowWorks/howWorks";
import Technology from "./pages/DropdownPages/Technology/technology";
import JourneyMammogram from "./pages/DropdownPages/JourneyMammogram/journeyMammogram";
import WhatNext from "./pages/DropdownPages/WhatNext/whatNext";
import OurStory from "./pages/DropdownPages/OurStory/ourStory";
import ResearchFund from "./pages/DropdownPages/ResearchFund/researchFund";
import Contact from "./pages/DropdownPages/Contact/contact";
import Faq from "./pages/DropdownPages/Faq/faq";
import BiRads from "./pages/BiRads/biRads";
import BiRads2 from "./pages/BiRads/biRads2";
import BiRads3 from "./pages/BiRads/biRads3";
import BiRads4 from "./pages/BiRads/biRads4";
import MobileFacts from "./pages/MobileNavMenu/pages/mobileFacts";
import MobileRecheck from "./pages/MobileNavMenu/pages/mobileRecheck";
import MobilePeople from "./pages/MobileNavMenu/pages/mobilePeople";
import MobileHelp from "./pages/MobileNavMenu/pages/mobileHelp";



// <Route path="/" component={Home} />




export default function App() {
  
   
   /* useBeforeunload((event) => {
    event.preventDefault();
    console.log("beforeunload happened!");
  });  */



  
//MAİN BACKEND FUNCTIONALITY



 /* window.addEventListener('unload', (e) => {
 
  e.preventDefault();
  //  if(gV.userName !== ""){ }

 db.collection("VitamuUsersREAL").add({
   Name: gV.userName,
   UserAge : gV.age,
   WhichOfTheFollowingAppliesToYou: gV.appliestTo,
   BiRads: gV.biRads,
   DoYouHaveAnyOfThese: gV.doYouHave,
   MailAddress: gV.MailAddres,
   IsHaveDigitalCopy: gV.isHaveDigitalCopy,
   PreferTo: gV.preferTo,
   MedicalCenterName: gV.medicalCenterName,
   createdAt: Timestamp.now().toDate(),


 }) 

}); */



 /* db.collection("VitamuUsersTEST").add({
           
   Name: gV.userName,
   UserAge : gV.age,
   WhichOfTheFollowingAppliesToYou: gV.appliestTo,
   BiRads: gV.biRads,
   DoYouHaveAnyOfThese: gV.doYouHave,
   MailAddress: gV.MailAddres,
   IsHaveDigitalCopy: gV.isHaveDigitalCopy,
   PreferTo: gV.preferTo,
   MedicalCenterName: gV.medicalCenterName,
   createdAt: Timestamp.now().toDate(),
  
  }) */

  
   /* useBeforeunload((event) => {
    event.preventDefault();
    
   
   if(gV.userName !== ""){
   
    db.collection("VitamuUsersREAL").add({
      Name: gV.userName,
      UserAge : gV.age,
      WhichOfTheFollowingAppliesToYou: gV.appliestTo,
      BiRads: gV.biRads,
      DoYouHaveAnyOfThese: gV.doYouHave,
      MailAddress: gV.MailAddres,
      IsHaveDigitalCopy: gV.isHaveDigitalCopy,
      PreferTo: gV.preferTo,
      MedicalCenterName: gV.medicalCenterName,
      createdAt: Timestamp.now().toDate(),


    }) 
   }
     })   */
  
   
   { /* var isFirst = true;

     if(isFirst) {
       isFirst = false;

      db.collection("Test3").add({
        Name: gV.userName,
        UserAge : gV.age,
        WhichOfTheFollowingAppliesToYou: gV.appliestTo,
        BiRads: gV.biRads,
        DoYouHaveAnyOfThese: gV.doYouHave,
        MailAddress: gV.MailAddres,
        IsHaveDigitalCopy: gV.isHaveDigitalCopy,
        PreferTo: gV.preferTo,
        MedicalCenterName: gV.medicalCenterName,
        createdAt: Timestamp.now().toDate(),
  
  
      })      } */ } 

     
   


    return (

      <Router>
        <Routes> 
          <Route path="/" element={<Home/>}/>  
          <Route path="/form" element={<Form/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/panel" element={<Panel/>} />


          <Route path="/birads" element={<BiRads/>} />
          <Route path="/birads2" element={<BiRads2/>} />
          <Route path="/birads3" element={<BiRads3/>} />
          <Route path="/birads4" element={<BiRads4/>} />
          

          
          <Route path="/pay-screen" element={<PayScreen/>} />
          


          <Route path="/user-panel" element={<UserPanel/>} />

          <Route path="/mobileNavMenu" element={<MobileNavMenu/>} />

          <Route path="/mobile-facts" element={<MobileFacts/>} />
          <Route path="/mobile-recheck" element={<MobileRecheck/>} />
          <Route path="/mobile-people" element={<MobilePeople/>} />
          <Route path="/mobile-help" element={<MobileHelp/>} />






           {/*Facts */}
          <Route path="/human-error" element={<HumanError/>} />
          <Route path="/missed-diagnosis" element={<MissedDiagnosis/>} />
          <Route path="/early-detection" element={<EarlyDetection/>} />
          <Route path="/statistics" element={<Statistics/>} />
          <Route path="/resources" element={<Resources/>} />

          {/*Recheck */}
          <Route path="/how-works" element={<HowWorks/>} />
          <Route path="/technology" element={<Technology/>}/>
          <Route path="/journey-mammogram" element={<JourneyMammogram/>}/>
          <Route path="/what-next" element={<WhatNext/>}/>

          {/*People */}
         <Route path="/our-story" element={<OurStory/>}/>
         <Route path="/research-fund" element={<ResearchFund/>}/>
       { /*  
          <Route path="/stories" element={<Stories/>}/>
          <Route path="/numbers" element={<Numbers/>}/>
          <Route path="/donate" element={<Donate/>}/>
          
        

          
          
          <Route path="/stage-4-support" element={<StageSupport/>}/>
          <Route path="/get-copy-mammogram" element={<GetCopyMammogram/>}/>
          <Route path="/breast-exam-reminder" element={<BreastExamReminder/>}/> */}
         
         {/*Help */}
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/faq" element={<Faq/>}/>



       </Routes>
    </Router>
   
    );
  }
  
  