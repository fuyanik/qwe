import "./navbar.css"
import React from 'react';
import {useState} from 'react';
import { Link} from 'react-router-dom';
import NavbarDropdown from "./navbarDropdown";
import dropdown1 from "./images/dropdown1.jpg"
import dropdown2 from "./images/dropdown2.jpg"
import dropdown3 from "./images/dropdown3.jpg"
import vitamuLogo from "./images/vitamuLogo.png"
 
import { getAuth } from "firebase/auth";
import BiRadsDropdown from "../BiRadsDropdown/biRadsDropdown";


const Navbar = ({mobileMenuText,mobileMenuTo}) => { 

 


   const  firebaseTest = async () => {

      
 { /*const docRef = doc(db, "cities", "SF");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data() );
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
} */}

    
         // QUERY SORUGUSU YAPIP İSTEDİĞİMİZ ŞARTLARI SAĞLAYANLARI GÖSTERME
         
 /*     
  //WHERE TO MAKE A QUERY
   const citiesRef = collection(db, "cities");
  
      
  //SPECİFYİNG QUERY SİNGLE CONDİTİON
   const q1 = query(citiesRef, where("state", "==", "Anotolian"))
  
   //SPECİFYİNG QUERY MULTİPLE CONDİTİON
   const q2 = query(citiesRef, where("country", "in", ["USA","Japan"]),   )
  
   //SPECİFYİNG QUERY MULTİPLE VALUE , MULTİPLE CONDİTİON AND SİNGLE CONDİTİON
   const q3 = query(citiesRef, where("country", "in", ["USA","Japan"]),   )

   
   
    //RECEIVING DATA WITH UPDATED CONDITIONS
   onSnapshot(q2, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
     
     ...doc.data(),
       }));

          articles.map((article) => {
            console.log(article.name)
          })
         })  */
    





  
                    //SET DOC
   
   /*  
      const citiesRef = collection(db, "cities");

       await setDoc(doc(citiesRef, "SV"), {
         name: "Sivas Furukosu", state: "Anotolian", country: "TR",
         capital: false, population: 220000,
         regions: ["Western Turkey", "Turkie"] });
          
         await setDoc(doc(citiesRef, "SF"), {
            name: "San Francisco", state: "CA", country: "USA",
            capital: false, population: 860000,
            regions: ["west_coast", "norcal"] });
        await setDoc(doc(citiesRef, "LA"), {
            name: "Los Angeles", state: "CA", country: "USA",
            capital: false, population: 3900000,
            regions: ["west_coast", "socal"] });
        await setDoc(doc(citiesRef, "DC"), {
            name: "Washington, D.C.", state: null, country: "USA",
            capital: true, population: 680000,
            regions: ["east_coast"] });
        await setDoc(doc(citiesRef, "TOK"), {
            name: "Tokyo", state: null, country: "Japan",
            capital: true, population: 9000000,
            regions: ["kanto", "honshu"] });
        await setDoc(doc(citiesRef, "BJ"), {
            name: "Beijing", state: null, country: "China",
            capital: true, population: 21500000,
            regions: ["jingjinji", "hebei"] });
*/


     
   }





   //media query function movile and web
   var mq = window.matchMedia( "(max-width: 768px)" );
   
   //navbar change opacitiy and color when user hover in
   const [isWhite, setIsWhite] = useState(false);

   const [isHover, setIsHover] = useState(false);

  
  
 
  //navbar change opacitiy and color when user scroll in
   const [scrollNumber, setScrollNumber] = useState(0);

   //set open dropdown menu
   const [showDropdown, setShowDropdown] = useState(0);

  
   const auth = getAuth();
   const user = auth.currentUser;

 
 
  window.addEventListener('scroll', function() {
   
    setScrollNumber(window.pageYOffset);

    scrollNumber  < 3 ? setIsWhite(false) : setIsWhite(true);
   
   });

   const l1h1 = () => { 
    return(
      <>
      {<Link to="/human-error" style={{textDecoration:'none'}} >  <h2>  Human Error ➔   </h2> </Link>}
      </>
    )
   }

   const l2h1 = () => { 
    return(
      <>
      {<Link to="/how-works" style={{textDecoration:'none'}} >  <h2>  How It Works ➔   </h2> </Link>}
      </>
    )
   }


return (
  

   

<div className="Navbar" style={{  backgroundColor: isWhite && "white",}}

onMouseMove={() => {
setIsWhite(true);
}}
 >
    

  { showDropdown == 1 && <NavbarDropdown
      
      image={dropdown1}
    
      line1head1= {l1h1()}
      line1text1="Learn what human error is and why it happens   "
    
      line1head2="Missed Diagnosis ➔ "
      line1text2="%10 of breast cancer cases are missed on mammogram screening. Learn how it affects lives."
    
      line2head1="Early Detection ➔"
      line2text1="It saves lives. More than you think."
     
      line2head2="Statistics ➔ "
      line2text2="U.S. breast cancer statistics are here."
     
      line2head3="Resources ➔ "
      line2text3="Breast cancer, A to Z."
      
     onMouseLeave={() =>  setShowDropdown(0) }
     /> }  
     
    
    
     { showDropdown == 2 && <NavbarDropdown
      image={dropdown2}

      line1head1={l2h1()}
      line1text1="Learn what recheck is and how it works."
    
      line1head2="Technology ➔ "
      line1text2="Meet our artificial intelligence used by radiologists."
    
      line1head3="Journey of a Mammogram ➔"
      line1text3="Discover how your mammogram is evaluated on a recheck."
    
      line2head1="Radiology Team ➔"
      line2text1="Meet the ones who do the recheck."
     
      line2head2="What is Next? ➔ "
      line2text2="You got your recheck results, here is what comes next."
     
      line2head3="Recheck Report Samples ➔"
      line2text3="Want to learn about scenarios, see recheck report samples."

     onMouseLeave={() =>  setShowDropdown(0) }
     /> }  
    
    
    
       { showDropdown == 3 && <NavbarDropdown
      image={dropdown3}
     
      line1head1="Our Story ➔ "
      line1text1="This is how we started our journey."
    
      line1head2="Stories ➔ "
      line1text2="Meet the women whose breast cancer was missed. "
    
      line1head3="Numbers ➔"
      line1text3="We recheck 200+ mammograms per day. Live stats here."
    
      line2head1="Donate ➔"
      line2text1="Your small donations keep people alive. Here is a list of charities you can make donations."
     
      line2head2="Research Fund ➔ "
      line2text2="We support entrepreneurs, researchers, and physicians who are dedicated to breast cancer diagnosis and treatment."
     
 
     onMouseLeave={() =>  setShowDropdown(0) }
     /> }  
       { showDropdown == 4 && <NavbarDropdown
   
     
      line1head1="Contact ➔  "
      line1text1="Any questions? We are here to help."
    
      line1head2="FAQ ➔ "
      line1text2="Here are the answers for frequently asked questions. "
    
      line1head3="Stage 4 Support ➔"
      line1text3="Are you diagnosed with stage 4 breast cancer? We can help you."
    
      line2head1="Get a Copy of Mammogram ➔"
      line2text1="Learn how to get a copy of your mammogram, for both recheck and future mammogram screenings."
     
      line2head2="Breast Self-Exam Reminder ➔"
      line2text2="Early detection saves lives. With our reminder, you will never skip a single breast self-exam."
     onMouseLeave={() =>  setShowDropdown(0) }
     /> }  
  
 
 

  <Link
    style={{  textDecoration: "none", display: "flex", }}
    to="/">   <img className="vitamu-logo" src={vitamuLogo} alt="vitamu"/> </Link>

   <Link
    style={{  textDecoration: "none", display: "inline", }}
    to={mobileMenuTo}>   <div className="mobile-dropdown-menu"> {mobileMenuText}</div>  </Link>
 
 
  <div className="nav-items-and-button"> 
   <ul className="nav-items">
      <li className="nav-item"  onMouseMove={() => setShowDropdown(1)  }  >Facts</li>  
      <li className="nav-item"  onMouseMove={() => setShowDropdown(2)  }  >Recheck</li>  
      <li className="nav-item"  onMouseMove={() => setShowDropdown(3)  } >People</li>  
      <li className="nav-item"  onMouseMove={() => setShowDropdown(4)  }  >Help</li>  
   </ul>
  
  

  {isHover && <BiRadsDropdown
  onMouseLeave={()=>{
   setIsHover(false);
   }}
  top={"20%"}
  left={"67.5vw"}
  
  />}


  <Link  style={{  textDecoration: "none",}} to="/form"> 
      
     <a className="button" 
      onMouseMove={() => {
       
         setIsHover(true);
       }}
     
     >
      <span className="buttonText"> Get Started</span>
      <span className="line">|</span>
     
      <span className="arrow">➔</span>
   </a>  
   
   </Link>

 
   { /* İf user is logged in, show USER PANEL button, If user not logged in Show SIGN IN button */ }
  
  { user ?
   <Link
    style={{  textDecoration: "none",}}
    to="/user-panel"> 

     <a className="button"
     style={{width: "140px", cursor: "pointer",}}
     onClick={firebaseTest}
     >
      <span style={{letterSpacing: "1px"}} className="buttonText">  User Panel  </span>
     
     </a>  

     </Link>  : 

<Link
style={{  textDecoration: "none",}}
to="/login"> 
 
 <a className="button"
 style={{width: "90px",}}
 >
  <span style={{letterSpacing: "1px"}} className="buttonText"> Sign In</span>
 
</a>  

</Link>
     
     
     }
   
   

   </div>

  { /* <Link
    style={{  textDecoration: "none",}}
    to="/login"> 
     
     <a className="button" >
      <span className="buttonText"> Login</span>
     
     
     
   </a>  
   
       </Link> */ } 

    </div>


 

        
)

}

export default Navbar;

   
   
  
   
   

   

