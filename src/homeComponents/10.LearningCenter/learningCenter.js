import "./learningCenter.css";
import LearningCenterCards from "./learningCenterCards";

const LearningCenter = () => { 

return (
<> 
<div className="learning-center">



   <h2 data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="00" >Learning Center </h2>
   
   <div className="learning-center-main">
        <LearningCenterCards
        Background={'https://images.squarespace-cdn.com/content/v1/5ffcb5ab91eb492f96d336f9/1643976273800-H1P0ZWZQOKLLGPIGH0DO/Screenshot%25252B2022-01'}
        LongText={"Wondering why you should have your mammogram rechecked? The reality is that, due to human error, radiologists can fail to diagnose breast cancer when your mammogram is reviewed for the first time."}
        ShortText= {"Learn more ➔"}
      />
        <LearningCenterCards
        Background={'https://images.squarespace-cdn.com/content/v1/5ffcb5ab91eb492f96d336f9/1643976463046-54VGRIQD2CP1LJOFY2P4/Screenshot%252B2022-01'}
        LongText={"The more information you have, the better protection you will have against breast cancer. You can find everything you need to know about breast cancer here."}
        ShortText= {"Visit resources ➔"}
       />
        <LearningCenterCards
         Background={'https://images.squarespace-cdn.com/content/v1/5ffcb5ab91eb492f96d336f9/1643976560326-A6MVBSGDQHGMP8IZNK3V/Screenshot%252B2022-01'}
         Display={'none'}
         LongText={"Our artificial intelligence catches breast cancer cases which have been missed, ensuring that they will not go undiagnosed. Put simply, our technology can save lives."}
         ShortText= {"Discover our technology ➔"}
    />
        <LearningCenterCards
         Display={'none'}
         Background={'https://images.squarespace-cdn.com/content/v1/5ffcb5ab91eb492f96d336f9/1643976660702-BTG26IW45X6DQNTI99UP/Screenshot%252B2022-01-28%252Bat%252B23.59.37.jpg?format=300w'}
         LongText={"Any donations you make will help to keep women healthy and alive. Make a donation today, and help us to provide free rechecks for the ones who cannot afford today."}
         ShortText= {"Donate today ➔"}
       
       />
        
        



   </div>
    
    


</div>

<div className="mobile-section">

  <div className="mobile-section-header"> 
     <h2 data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="00" >Learning Center </h2>
      <p data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="00" className="mobile-section-text"> Swipe right to see more</p>
 </div>

<div className="section">



  <div className="section__item ">     
  
   <LearningCenterCards
        Background={'https://images.squarespace-cdn.com/content/v1/5ffcb5ab91eb492f96d336f9/1643976273800-H1P0ZWZQOKLLGPIGH0DO/Screenshot%25252B2022-01'}
        LongText={"Wondering why you should have your mammogram rechecked? The reality is that, due to human error, radiologists can fail to diagnose breast cancer when your mammogram is reviewed for the first time."}
        ShortText= {"Learn more ➔"}
      />
      
  </div>



  <div className="section__item ">     
  
  <LearningCenterCards
        Background={'https://images.squarespace-cdn.com/content/v1/5ffcb5ab91eb492f96d336f9/1643976463046-54VGRIQD2CP1LJOFY2P4/Screenshot%252B2022-01'}
        LongText={"The more information you have, the better protection you will have against breast cancer. You can find everything you need to know about breast cancer here."}
        ShortText= {"Visit resources ➔"}
       />
     
 </div>
 



 <div className="section__item ">     
  
 <LearningCenterCards
         Background={'https://images.squarespace-cdn.com/content/v1/5ffcb5ab91eb492f96d336f9/1643976560326-A6MVBSGDQHGMP8IZNK3V/Screenshot%252B2022-01'}
         Display={'none'}
         LongText={"Our artificial intelligence catches breast cancer cases which have been missed, ensuring that they will not go undiagnosed. Put simply, our technology can save lives."}
         ShortText= {"Discover our technology ➔"}
    />
     
 </div> 
 
 


 <div className="section__item ">     
  
 <LearningCenterCards
         Display={'none'}
         Background={'https://images.squarespace-cdn.com/content/v1/5ffcb5ab91eb492f96d336f9/1643976660702-BTG26IW45X6DQNTI99UP/Screenshot%252B2022-01-28%252Bat%252B23.59.37.jpg?format=300w'}
         LongText={"Any donations you make will help to keep women healthy and alive. Make a donation today, and help us to provide free rechecks for the ones who cannot afford today."}
         ShortText= {"Donate today ➔"}
       
       />
      
  </div>
 
 
  
</div>
</div>
</>
)

}

export default LearningCenter;