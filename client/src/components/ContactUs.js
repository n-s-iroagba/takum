import React from 'react'
import Contact from './Contact'
import './components.css'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faPhone,faEnvelope, } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const icons = [faPhone,faWhatsapp,faEnvelope,faMapMarkerAlt]
const links = ['07062952223','09021465282','vibranteventmgt@gmail.com','No_53 Danjuma Road Takum Taraba state']
const ContactUs = ()=>{
    return(
        <div className="contact-wrapper">
        <h1>We'll Be Happy To Hear From You.</h1>
        <div className='contact-us'>{
            links.map((link,index)=>{
                    return <Contact icon ={icons[index]} link={link} key={index}/>
            })

        }</div>
            </div>
    )
}
export default ContactUs