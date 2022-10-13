import gV from "../../gV";
import "./card6.css";

const Card6 = () => { 


  const handleChange = (e) => {
       gV.MailAddres = e.target.value;
     
   
    }

    return (
      <div className="card6">
        <div className="card6-main">
         
          <div className="card6-texts">
            <p>We are a team of 80+ US board-certified radiologists, and we recheck mammograms with artificial intelligence to make sure your diagnosis was accurate and nothing was missed.</p>
               <div className="card6-texts-child"> 
                  <p>To do this, we <span> will need an e-mail address to stay in contact with you. </span></p>
                  <p>We hate spam e-mails, too. You can drop me an e-mail anytime you want at jessica@vitamu.com</p>
               </div>
            
          </div>

          <input onChange={handleChange} className="nameİnput" placeholder="Type your e-mail here."/>

        </div>
      </div>
    );
}

export default Card6;