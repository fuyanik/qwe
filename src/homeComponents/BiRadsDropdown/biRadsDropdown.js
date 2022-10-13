import gV from "../../gV"
import {Link} from 'react-router-dom';
import "./biRadsDropdown.css"


const BiRadsDropdown = ({ onMouseLeave, top, left }) => { 


    return(
        <div
        style={{
            top: top,
            left: left,
        }}
        onMouseLeave={onMouseLeave}
        className="bi-rads-dropdown"
      > 
      
      <h2 className="bi-rads-dropdown-header">Choose your Bi-rads score:</h2>
      <Link style={{  textDecoration: "none",}} to="/form">  <t className="bi-rads-dropdown-item" onClick={()=>{gV.biRads = "1"; gV.p = 0}}>Bi-rads 1 ➔</t> </Link> 
      <Link style={{  textDecoration: "none",}} to="/form">  <t  className="bi-rads-dropdown-item" onClick={()=>{gV.biRads = "2"; gV.p = 0}} >Bi-rads 2 ➔</t> </Link> 
      <Link style={{  textDecoration: "none",}} to="/form">  <t className="bi-rads-dropdown-item"  onClick={()=>{gV.biRads = "3"; gV.p = 0}}  >Bi-rads 3 ➔</t> </Link> 
      <Link style={{  textDecoration: "none",}} to="/form">  <t className="bi-rads-dropdown-item"  onClick={()=>{gV.isShowBiRads123 = false; gV.p = -1}} >Bi-rads 4 ➔</t> </Link> 
      <Link style={{  textDecoration: "none",}} to="/form">  <t className="bi-rads-dropdown-item bi-rads-dropdown-item-last-child" onClick={()=>{ gV.p = -1}}   >I don't know my Bi-rads score. ➔ </t> </Link> 
      
      
      
      </div>
    )
}

export default BiRadsDropdown;