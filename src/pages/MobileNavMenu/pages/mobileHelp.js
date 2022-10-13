import React from 'react'
import Navbar from '../../../homeComponents/1.Navbar/navbar'


const MobileHelp = () => {
  return (

    

<>

<Navbar mobileMenuText={"Close"}  mobileMenuTo ={"/mobileNavMenu"} />

  
    <div style={{paddingBlock:"12vh", paddingInline:"5vw"}}>
        <div className='normal-text' style={{display:"flex", flexDirection:"column",gap:"15px", borderBottom:"5px solid #142b6f", width:"100%", paddingBottom:"5vh" }}>
            
          <p ><span> Contact ➔  </span></p>
          <p>Any questions? We are here to help.</p>
        
          <p ><span> FAQ ➔ </span></p>
          <p> Here are the answers for frequently asked questions. </p>
        
          <p ><span> Stage 4 Support ➔ </span></p>
          <p>Are you diagnosed with stage 4 breast cancer? We can help you.</p>
        
          <p ><span> Get a Copy of Mammogram ➔  </span></p>
          <p> Learn how to get a copy of your mammogram, for both recheck and future mammogram screenings.</p>
        
          <p ><span> Breast Self-Exam Reminder ➔ </span></p>
          <p> Early detection saves lives. With our reminder, you will never skip a single breast self-exam.</p>
        
         
        
         
          
          </div>
    </div>
    
</>

  )
}

export default MobileHelp