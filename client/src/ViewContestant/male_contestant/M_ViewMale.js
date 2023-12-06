import React, {useEffect, useState} from 'react'
import axios from 'axios';
import ViewMaleDetails from './M_ViewMaleDetails'
import '../contestant.css'
import first from '../contestimage/m1.jpg'
import second from '../contestimage/m2.jpg'
import third from '../contestimage/m3.jpg'
import last from '../contestimage/m4.jpg'

const ViewMale = ({setPage}) => {

    const [contestants, setContestants] = useState([])
    const [loading,setLoading] = useState(true)
    const images = [first,second,third,last]
    
    useEffect(() => {

        const getData = async () => {
            const { data } = await axios.get('https://takum.fly.dev/malecontestants')
            console.log(data)
            setContestants(data)
            setLoading(false)
        }
        getData()
    }, [])

    return (
        <>
               <h1 className='text-center'>Vote Your Favourite Mr.Takum Contestant</h1>
               <hr />

               <div style={{display:'flex', flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
                    {loading? <p>TAKUM PAGEANTRY IS LOADING....PLEASE BE PATIENT</p> :    
                        contestants.map((contestant,index )=> {
                            return <ViewMaleDetails key={contestant.id} setPage ={setPage} props={contestant} thepic={images[index]} />
                           
                        })
                    }
               </div>
               


           

           
        </>
    )
}
export default ViewMale;
