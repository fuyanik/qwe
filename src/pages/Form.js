import {useEffect, useState, useRef} from 'react';
import BackButton from '../formComponents/components/BackButton/backButton';
import ForwardButton from '../formComponents/components/ForwardButton/forwardButton';
import '../index.css'
import gV from "../gV.js"
import Card1 from '../formComponents/Card1/card1.js';
import Card2 from '../formComponents/Card2/card2.js';
import { setGlobalState, useGlobalState } from "../hookState";
import React from 'react';
import Card3 from '../formComponents/Card3/card3';
import Card4 from '../formComponents/Card4/card4';
import Card5 from '../formComponents/Card5/card5';
import Card6 from '../formComponents/Card6/card6';
import Card7 from '../formComponents/Card7/card7';
import Card8 from '../formComponents/Card8/card8';
import Card9 from '../formComponents/Card9/card9';
import Card10 from '../formComponents/Card10/card10';
import Card11 from '../formComponents/Card11/card11';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import CardPassword from '../formComponents/CardPassword/cardPassword';
import { auth } from '../firebase';








function Form () {



  //ALL VARİABLE AND FUNCTİON HERE******************************

  const [defaultType] = useGlobalState("myButtonType");
  const [buttonWidth] = useGlobalState("myButtonWidth");
  const [buttonleft] = useGlobalState("myButtonleft");
  const [backButtonleft] = useGlobalState("myBackButtonleft");

  //form destiniy
  const [formDestiny] = useGlobalState("formDestiny");

  //help payment sccreen open
  const [isPayScreen] = useGlobalState("isPayScreen");
  

 
  
  

  const [divHeight, setDivHeight] = useState(0);
  const [slidePage, setSlidePage] = useState("");
 
  // const [buttonWidth, setButtonWidth] = useState("100px")
  //const [buttonleft, setButtonleft] = useState("48%")
  //const [backButtonleft, setBackButtonleft] = useState("44.7%")
  var [isFade, setİsFade]= useState(false);


  
  const ref = useRef(null);

  useEffect(() => {
    //GET CLİENT HEİGHT
    setDivHeight(ref.current.clientHeight);

    //FORWARD BUTTON DESTİNY
    
   });


     
   
    
  console.log(gV);
 
  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, gV.MailAddres, gV.password);
      updateProfile(auth.currentUser, { displayName: gV.userName });

     
    
    } catch (error) {
     console.log(error)
    }
  };
  

  function forwardButtonClick () {
    if (gV.i === 1 || gV.i > 1) {
      //gV.paymentFee == 1 ?  setGlobalState("myButtonType", "Continue with £45") : setGlobalState("myButtonType", "Continue");
      // gV.paymentFee == 2 ? setGlobalState("myButtonType", "Continue with £64") : setGlobalState("myButtonType", "Continue");

      setGlobalState("myButtonWidth", "500px");
      setGlobalState("myButtonleft", "35%");
      setGlobalState("myBackButtonleft", "32%");
    }

    if(gV.isUserClickOtherAnswer){
      gV.doYouHave.push(gV.otherAnswer);
     
    }

    console.log(gV.i);
    console.log(gV.p);

    if(gV.p == 5) {
       handleSignup();
    }

   

    setİsFade(!isFade);

    if(gV.p !== 8){

    gV.i = gV.i + 1;
    gV.p = gV.p + 1;
   
 
    setSlidePage(`translateY(${-gV.i * divHeight}px)`); }
    
    else {
      console.log(isPayScreen);
      setGlobalState("isPayScreen", true);
 
    }

    window.scrollTo(0, 0);

    
    
  }



  function backButtonClick () {
   
    
    if( gV.i> 0) { 
      gV.i = gV.i - 1
      gV.p = gV.p - 1
     setSlidePage(`translateY(${ (-gV.i) * divHeight }px)`);
    }
  }




  //ALL COMPONENTS START HERE**************************************
  return (
    <div className="App" ref={ref}>
      {/* <Navbar
       mobileMenuTo={"/mobileNavMenu"}
       mobileMen uText={"Menu"}
         /> */}

      <div className="slide-background"></div>
      <div className="slide-background2"></div>

      <div className="left-slide" style={{ transform: slidePage }}>
      
      
        <Card1 animation={isFade && "fade-in"} />
        <Card2/>
        <Card3/>
        <Card4
         display={ (gV.biRads == "1" || gV.biRads == "2"  ||gV.biRads == "3")  && "none"}
        />
        <Card5/>
        <Card6/>
        <CardPassword/>
        <Card7/>
        
        <Card8
         display={formDestiny === 1 || formDestiny === 4  || formDestiny === 3 ? "flex" : "none"}
        />

        <Card10
        display={formDestiny === 1 || formDestiny === 4   ? "flex" : "none"}
        text1={"Alright, we will send you an address to which you should mail your medical images right after the payment authorization."}
        text2={"This is what you will pay for your recheck: "}
        />

        
        <Card9
         display={formDestiny === 1 || formDestiny === 3  ? "flex" : "none"}
         buttonText={"Choose File"}
        />
        <Card10
         display={formDestiny === 1 || formDestiny === 3  ? "flex" : "none"}
         text1={"Superb, we received all of your files"}
         text2={"This is what you will pay for your recheck:"}
        />
        
        <Card11
          display={formDestiny === 2   ? "flex" : "none"}
        
        />
        <Card10
          display={formDestiny === 2   ? "flex" : "none"}
         text1={"You are all set. You will be called by your imaging center for the release of your medical images. We will acquire a copy of your medical images on your behalf. "}
         text2={"This is what you will pay for your recheck:"}
    />

        

        {/*

        
         
         <Card4 
          display={gV.formDestiny >= 200 &&  "none"}
         />
         <Card5
           display={gV.formDestiny >= 200 &&  "none"}
         />
    
         <Card6
           display={gV.formDestiny >= 200 &&  "none"}
        
        />
       
         <Card7
           display={(gV.formDestiny >= 200 || gV.formDestiny <= 80) &&  "none"}
         />
         <Card8 
           display={(gV.formDestiny >= 200 || gV.formDestiny  <= 85) &&  "none"}
         />
         
          <Card85
           
           display={(gV.formDestiny >= 200 || gV.formDestiny  > 84) &&  "none"}
          
          />


     <Card9 
          display={gV.formDestiny >= 200 &&  "none"}
         />
         <Card10
          display={(gV.formDestiny >= 200 || gV.formDestiny >= 40) &&  "none"}
         />
         <Card11 
          display={(gV.formDestiny >= 200 || gV.formDestiny >= 40)  &&  "none"}
         />
         
         <Card12 
          display={gV.formDestiny >= 200 &&  "none"}
         />
       
       
         <Card13 
          display={gV.formDestiny < 200 &&  "none"}
         />
         <Card14 
           display={(gV.formDestiny < 200 || gV.formDestiny == 240) &&  "none"}
         />
         <Card15
            display={(gV.formDestiny < 200 || gV.formDestiny == 220)  &&  "none"}
         />
         <Card16 
            display={gV.formDestiny < 200 &&  "none"}
         />
              */}
      </div>

 {!isPayScreen &&  <ForwardButton
        forwardButtonClick={forwardButtonClick}
        width={buttonWidth}
        left={buttonleft}
        buttonText={defaultType}
      />   }

{ !isPayScreen &&  <BackButton backButtonClick={backButtonClick} left={backButtonleft} /> }
    </div>
  );
 }
 
 
 
 export default Form;







    
   
   

   
 
