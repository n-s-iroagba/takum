import React from 'react'
import Card from './Card'
import ruth from './timage/ruth.jpeg'
const Cards = ()=>{
    const images = [ruth]
    const titles = ['Miss Takum']
    const years = ['2022/2023','2021/2022']
    return<><div style={{display:'flex',}}>{
        images.map((image,i)=>{
           return <Card image={image} title={titles[i]}  year={years[i]}/>
        })
    }</div>
    </>
}
export default Cards