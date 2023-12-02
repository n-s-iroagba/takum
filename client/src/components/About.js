import React from 'react'
import vibrant from './vibrant.jpg'
import './components.css'
const About = ()=>{
    return(
    <div className='about-wrapper'>
        <div>
            <img  className = 'about-img' src={vibrant} alt='vibrant event picture'/>
        </div>
        <div className='about-text'>
            <h1>About Us</h1>
            <h6>We are officially registered as a portfolio and government parastatal under the Nigerian Corporate Affairs Commission of 1990, operating under the Companies and Allied Matters Act No. 1990, as amended and now under Act Cap C20 of the Laws of the Federation of Nigeria. As a prominent organization, we specialize in pageantry, lifestyle, and talent services, and are recognized as one of Nigeria's premier modeling and event agencies. Our expertise extends to talent development and empowering youth.</h6>
        </div>
    </div>
    
        )
}
export default About