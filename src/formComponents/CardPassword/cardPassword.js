import gV from "../../gV";
import "./cardPassword.css";

const CardPassword = () => { 


  const handleChange = (e) => {
       gV.password = e.target.value;
     
   
    }

    return (
      <div className="card6">
        <div className="card6-main">
         
          <div className="card6-texts">
            <p>Password</p>
               <div className="card6-texts-child"> 
                  <p>To do this, we <span> will need an Password to stay in contact with you. </span></p>
                  <p>We hate spam e-mails, too. You can drop me an Password </p>
               </div>
            
          </div>

          <input type="password" onChange={handleChange} className="nameİnput" placeholder="Type your password here."/>

        </div>
      </div>
    );
}

export default CardPassword;