


import React, { useEffect, useState } from "react";
import gV from "../../gV.js";

import { db } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../../firebase"
import { Timestamp} from 'firebase/firestore';
import { collection, doc, setDoc, getDoc, query, where,getDocs,onSnapshot   } from "firebase/firestore"; 

import {
  PaymentElement,
  useStripe,
  useElements,
  CardElement
} from "@stripe/react-stripe-js";
import "./payScreen.css";

import stripeImg from "./stripe.png";

export default function CheckoutForm() {

  
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);


  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, gV.MailAddres, gV.password);
      updateProfile(auth.currentUser, { displayName: gV.userName });

     
    
    } catch (error) {
     console.log(error)
    }
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
   // handleSignup();

    await setDoc(doc(db, "VitamuUsersREAL", `${gV.MailAddres}`), {
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



    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "https://www.viomu.com",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
    

  };


  const CARD_OPTİONS = { 

    style: {
        base: {
            fontSize: "17px",
            lineHeight: "34px",
        }
     }
  }
  return (

    <form id="payment-form" onSubmit={handleSubmit}>
      
      <p className="payment-form-head-text">Name on Card</p>
      <input className="nameİnput"/>

      <p className="payment-form-head-text">Credit Card</p>
      <PaymentElement  id="payment-element" />

      <div className="price-exp">
        <div> <p>Recheck </p> <p>$120.00</p></div>
        <div> <p>Tax </p> <p>$10.65</p></div>
        <div> <p>Total </p> <p>$130.65</p></div>
      </div>
     
     

      <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Continue"}
        </span>
      </button>
     

      <img  className="stripe-img" src={stripeImg} />

      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
//ben bir davarım


