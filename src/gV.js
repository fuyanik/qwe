const gV = 
 {
    //help page translate Y with scrool
    i : 0,
   
    //help payment sccreen navigate
    p:0,

   //User information from the form, it is used to send the data to the server with backedn
  
    //CARD1
    userName: "qwe",
   
    //CARD2
    age: 0,
    
    //CARD3
    appliestTo: [""],

    //CARD4
    biRads: "none",
    isShowBiRads123: true,

    //CARD5
    doYouHave: ["none"],
    isUserClickOtherAnswer: false,
    otherAnswer: "none",
  
    //CARD6
    MailAddres:"none",    

    //CARD PASSWORD
    password: "",

    //CARD7
    isHaveDigitalCopy: "none",

    //CARD8
    preferTo: "none",


    //CARD11
    medicalCenterName: "none",
   
   
    //USER PANEL
    activeStep: 1,

    imagesUrl: [],


    image:"none",



    mq : window.matchMedia( "(max-width: 768px)" ),

    
}
export default gV;
