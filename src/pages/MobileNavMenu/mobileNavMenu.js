import Navbar from '../../homeComponents/1.Navbar/navbar';
import './mobileNavMenu.css'
import {Link} from 'react-router-dom';
import mobileNavImage from './mobileNavImage.png';
import { getAuth } from "firebase/auth";

const MobileNavMenu  = () => {
    
    window.scrollTo(0, 0);
    const auth = getAuth();
    const user = auth.currentUser; 

    return (
<>

 <Navbar mobileMenuText={"Close"}  mobileMenuTo ={"/"} />
       
        <div className='mobile-nav-menu'> 
        
      
          <div className='mobile-nav-menu-main'>
          <img  className='mobile-nav-image' src={mobileNavImage}/>

               <Link className='style-none' to="/mobile-facts"> <h2>Facts</h2> </Link>
               <Link className='style-none' to="/mobile-recheck">  <h2>Recheck</h2> </Link>
               <Link className='style-none' to="/mobile-people">  <h2>People</h2> </Link>
               <Link className='style-none' to="/mobile-help">  <h2>Help</h2> </Link>

               <Link style={{  textDecoration: "none",}}  to="/form"> 
    
                     <div style={{marginTop:"80px"}} className="button-2">
                       <span className="buttonText-2"> Get Started</span>
                       <span className="line-2">|</span>
                       <span className="arrow-2">➔</span>
                     </div> 
                     
               </Link>

            {
            
    user ?   <Link
    style={{  textDecoration: "none",}}
    to="/user-panel">    <div style={{marginTop:"80px"}} className="button-2">

                <span className="buttonText-2"> User Panel</span>
              

            </div> </Link> 

            : 

            <Link
            style={{  textDecoration: "none",}}
            to="/Login">    <a className="button-2">
        
                        <span className="buttonText-2"> Sign In</span>
                      
        
                    </a> </Link> 

            

            
        }


     
        </div>
        
      
        
        
    </div> 
        </>
    )
}

export default MobileNavMenu;