import React from 'react'
import './components.css'

const Image = ({image})=>{
    return(
        <div className='image-wrap'>
        <img className='gallery-image' src={image} alt='pageantrypicture'/>
        </div>
    )
}
export default Image