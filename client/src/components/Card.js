import React from 'react'
import './components.css'

const Card= ({image,title,year})=>{
    return<>
      <div className='card-wrapper' >
            <img src={image} style={{width:'3.5cm'}} alt='miss takum' />
            <div>
            <div style={{textAlign:'center'}} className='title'>{title}</div>
            <div style={{textAlign:'center'}} className="title">{year}</div>
            </div>
           
        </div>
    </>
}
export default Card