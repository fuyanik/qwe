import gV from "../../gV";
import "./payScreen.css"
import { setGlobalState } from "../../hookState";
import { Timestamp} from 'firebase/firestore';
import { db } from "../../firebase";

import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./checkoutForm";
import { collection, doc, setDoc, getDoc, query, where,getDocs,onSnapshot   } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";


//const keys = require("../../config/keys");



// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
       
const stripePromise = loadStripe("pk_test_51LOrQYKGr3XuaAt4k9NHq0fW5AMPq71nMA6c9SIPVvRXadetwvACfgR4Fk5gk6zs6hnHrH0VdqevAoMHa8f9s2PB00txc9mDlI");

// const stripePromise = loadStripe(keys.stripePublishableKey);


const PayScreen = () => { 


const PaymentTestClick = async (e) => {

  const auth = getAuth();
  const user = auth.currentUser;

  e.preventDefault();
 // handleSignup();

 await setDoc(doc(db, "VitamuUsersREAL", `${user.email}`), {
  Name: gV.userName,
  UserAge : gV.age,
  WhichOfTheFollowingAppliesToYou: gV.appliestTo,
  BiRads: gV.biRads,
  DoYouHaveAnyOfThese: gV.doYouHave,
  MailAddress: gV.MailAddres,
  Password: gV.password,
  IsHaveDigitalCopy: gV.isHaveDigitalCopy,
  PreferTo: gV.preferTo,
  MedicalCenterName: gV.medicalCenterName,
  createdAt: Timestamp.now().toDate(),

  activeStep: gV.activeStep,
  imagesUrl: gV.imagesUrl,
});

window.location.href = "/";
 
 }

const handleClick = () => { 
    setGlobalState("isPayScreen", false);
}

const [clientSecret, setClientSecret] = useState("");

useEffect(() => {

  // Create PaymentIntent as soon as the page loads
  fetch("/create-payment-intent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items: [{ id: "vitamu" }] }),
  })
    .then((res) => res.json())
    .then((data) => setClientSecret(data.clientSecret));
}, []);


const appearance = {
  theme: 'flat',
};
const options = {
  clientSecret,
  appearance,
}; 


    return (
    
        <div style={{}} className="pay-screen">
               
              <div className="pay-screen-button" onClick={handleClick}>Cancel</div>
                 <div className="pay-screen-main"> 

              
           {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
           ) } 

       { /* <h1 onClick={PaymentTestClick} className="payment-testoq">PAY</h1> */}



          
          </div>
          </div>   
   
    );
}
 
export default PayScreen;