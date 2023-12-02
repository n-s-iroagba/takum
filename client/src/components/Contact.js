import React from "react";
import './components.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Contact = ({icon,link}) =>{
    return<div style={{height:'7.5cm'} }className="contact">
       < div ><FontAwesomeIcon icon={icon} style={{width:'0.8cm',height:'0.8cm',marginBottom:'0.2cm'}}/></div>
        <p>{link}</p>
        <p>Monday - Fridays</p>
        <p>8am - 5pm</p>
    </div>
}
export default Contact