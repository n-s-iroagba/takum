import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Col} from 'react-bootstrap'
import ViewMaleDetails from './M_ViewMaleDetails'
import '../contestant.css'

const ViewMale = ({setPage}) => {

    const [contestants, setContestants] = useState([])
    const [loading,setLoading] = useState(true)
    
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
                        contestants.map(contestant => {
                            return <ViewMaleDetails key={contestant.id} setPage ={setPage} props={contestant} />
                           
                        })
                    }
               </div>
               


           

           
        </>
    )
}
export default ViewMale;
