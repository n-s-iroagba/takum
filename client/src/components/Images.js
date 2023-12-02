import React from 'react'
import vib from './vibrant.jpg'
import Image from './Image'
import './components.css'
import p1 from './takumImages/1.png'
import p2 from './takumImages/2.png'
import p3 from './takumImages/3.jpg'
import p4 from './takumImages/4.jpg'
import p5 from './takumImages/5.jpg'

import p6 from './takumImages/6.jpg'
import p7 from './takumImages/7.jpg'
import p8 from './takumImages/8.jpg'
import p9 from './takumImages/9.jpg'
import p10 from './takumImages/10.jpg'
import p11 from './takumImages/11.jpg'
import p12 from './takumImages/12.jpg'
import p13 from './takumImages/13.jpg'
import p14 from './takumImages/14.jpg'
import p15 from './takumImages/15.jpg'
import p17 from './takumImages/11.jpg'
import p18 from './takumImages/18.jpg'
import p19 from './takumImages/0.jpg'
import p20 from './takumImages/00.jpg'
import p21 from './takumImages/000.jpg'
import p22 from './takumImages/0000.jpg'
import p23 from './takumImages/00000.jpg'
import p24 from './takumImages/000000.jpg'
import p25 from './takumImages/0000000.jpg'

import p26 from './takumImages/19.jpg'
import p27 from './takumImages/20.jpg'
import p28 from './takumImages/21.jpg'
import p29 from './takumImages/22.jpg'
import p30  from './timage/mm22.jpeg'

const imgs = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30]
const Images = ()=>{
    return(
        <div className='gallery'> 
            <h1>Gallery</h1>
            <div className='gallery-images'>{
                imgs.map((img,index)=>{
                    return<Image key={index} image={img}/>
                })
            }</div>
        </div>
    )
}
export default Images
