import React from 'react'
import Card from './Card'
import njira from './timage/njira.jpeg'

const MCards = ()=>{
    const images = [njira]
    const titles = ['Mr Takum']
    const years = ['2022/2023']
    return<><div style={{display:'flex',}}>{
        images.map((image,i)=>{
           return <Card image={image} title={titles[i]}  year={years[i]}/>
        })
    }</div>
    </>
}
export default MCards