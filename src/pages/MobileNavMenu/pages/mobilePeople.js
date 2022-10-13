import React from 'react'
import Navbar from '../../../homeComponents/1.Navbar/navbar'


const MobilePeople = () => {
  return (

    

<>

<Navbar mobileMenuText={"Close"}  mobileMenuTo ={"/mobileNavMenu"} />

  
    <div style={{paddingBlock:"12vh", paddingInline:"5vw"}}>
        <div className='normal-text' style={{display:"flex", flexDirection:"column",gap:"15px", borderBottom:"5px solid #142b6f", width:"100%", paddingBottom:"4vh" }}>
          
          <p ><span> Our Story ➔ </span></p>
          <p>This is how we started our journey.</p>
       
          <p ><span> Stories ➔ </span></p>
          <p>Meet the women whose breast cancer was missed.</p>
       
          <p ><span> Numbers ➔ </span></p>
          <p>We recheck 200+ mammograms per day. Live stats here.</p>
       
          <p ><span> Donate ➔ </span></p>
          <p>Your small donations keep people alive. Here is a list of charities you can make donations</p>
       
          <p ><span> Research Fund ➔ </span></p>
          <p>We support entrepreneurs, researchers, and physicians who are dedicated to breast cancer diagnosis and treatment.</p>
       
         
       
          
          
          </div>
    </div>
    
</>

  )
}

export default MobilePeople