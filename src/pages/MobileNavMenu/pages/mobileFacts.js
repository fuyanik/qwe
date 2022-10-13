import React from 'react'
import Navbar from '../../../homeComponents/1.Navbar/navbar'


const MobileFacts = () => {
  return (

    

<>

<Navbar mobileMenuText={"Close"}  mobileMenuTo ={"/mobileNavMenu"} />

  
    <div style={{paddingBlock:"13vh", paddingInline:"5vw"}}>
        <div className='normal-text' style={{display:"flex", flexDirection:"column",gap:"12px", borderBottom:"5px solid #142b6f", width:"100%" }}>
          
          <p ><span> Human Error ➔  </span></p>
          <p>Learn what human error is and why it happens.</p>
          <p><span>Missed Diagnosis ➔</span></p>
          <p>%10 of breast cancer cases are missed on mammogram screening. Learn how it affects lives.</p>
          <p><span>Early Detection ➔</span></p>
          <p>It saves lives. More than you think.</p>
         
          <p><span>Statistics ➔</span></p>
          <p>U.S. breast cancer statistics are here.</p>
          <p><span>Resources ➔</span></p>
          <p>Breast cancer, A to Z.</p>
          <p><span></span></p>
          <p></p>
         
          
          
          </div>
    </div>
    
</>

  )
}

export default MobileFacts