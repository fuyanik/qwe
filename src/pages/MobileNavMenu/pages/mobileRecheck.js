import React from 'react'
import Navbar from '../../../homeComponents/1.Navbar/navbar'


const MobileRecheck = () => {
  return (

    

<>

<Navbar mobileMenuText={"Close"}  mobileMenuTo ={"/mobileNavMenu"} />

  
    <div style={{paddingBlock:"12vh", paddingInline:"5vw"}}>
        <div className='normal-text' style={{display:"flex", flexDirection:"column",gap:"15px", borderBottom:"5px solid #142b6f", width:"100%", paddingBottom:"5vh" }}>
          
        <p ><span>How It Works ➔  </span></p>
          <p>Learn what recheck is and how it works.</p>
         
          <p ><span>Technology ➔  </span></p>
          <p>Meet our artificial intelligence used by radiologists.</p>
         
          <p ><span> Journey of a Mammogram ➔ </span></p>
          <p>Discover how your mammogram is evaluated on a recheck.</p>
         
          <p ><span> Radiology Team ➔ </span></p>
          <p> Meet the ones who do the recheck.</p>
         
          <p ><span> What is Next? ➔  </span></p>
          <p>You got your recheck results, here is what comes next.</p>
         
          <p ><span> Recheck Report Samples ➔  </span></p>
          <p>Want to learn about scenarios, see recheck report samples.</p>
          
          
          </div>
    </div>
    
</>

  )
}

export default MobileRecheck