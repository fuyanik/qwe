import "./allinoneservice.css"
import Serviceİtems from "./serviceİtems";
const AllinOneService = ( ) => {

return (

<div className="all-in-one"> 


    <div className="all-in-one-header"> 
   
       <p data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="00" className="all-in-one-header-p"> A hassle-free experience </p>
   
        <h2 data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="00" className="all-in-one-header-h2"> An all in one service. </h2>
  

    </div>


    <div className="all-in-one-items">
   
   
    <Serviceİtems
    Background={"https://images.squarespace-cdn.com/content/v1/5ffcb5ab91eb492f96d336f9/1b9c498a-5df1-414e-90d7-229eb400c822/Recheck.jpg?format=1500w"}
    textShort={"Mammogram Recheck"}
    textLong={"Already got your mammogram results? That’s great, but you should have them rechecked. We recheck your mammograms to ensure that you are breast cancer free."}
    displayElement= {true}
   />

     
  <Serviceİtems
    Background={"https://images.squarespace-cdn.com/content/v1/5ffcb5ab91eb492f96d336f9/77f7f30e-2ebc-4b8e-a6dc-683640003a19/Reminder.jpg?format=1500w"}
    textShort={"Self-Exam Reminder"}
    textLong={"The best way to detect abnormalities in your breasts is to conduct a monthly breast self-exam. We can show you how to carry out a self-exam effectively and will send you a free reminder so that you won’t forget."}
    displayElement= {false}
    textFooter={"Start today ➔"}
   /> 
     
     <Serviceİtems
    Background={"https://images.squarespace-cdn.com/content/v1/5ffcb5ab91eb492f96d336f9/b10240d6-38db-42e3-9186-cedf496dbee5/Schedule.jpg?format=1500w"}
    textShort={"Mammogram Scheduler"}
    textLong={"Haven’t had a mammogram? If you are over 40, you should have one every year. We can find you an imaging centre where you can have your annual mammogram screening."}
    displayElement= {false}
    textFooter={"Schedule yours today ➔"}
 
    />
     
     <Serviceİtems
    Background={"https://images.squarespace-cdn.com/content/v1/5ffcb5ab91eb492f96d336f9/897e8ce5-271b-4c26-914d-11db4e57179f/Store.jpg?format=1500w"}
    textShort={"Mammogram Storage"}
    textLong={"Keeping track of your mammograms is an important part of dealing with any potential serious medical problems. We provide a place for you to store all of your mammograms for free. "}
    displayElement= {false}
    textFooter={"Learn more ➔"}
   />
    
    

    </div>



</div>

)

    
}

export default AllinOneService;