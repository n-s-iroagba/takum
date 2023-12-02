import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Col} from 'react-bootstrap'
import ViewFemaleDetails from './F_ViewFemaleDetails'
import '../contestant.css'

const ViewFemale = ({setPage}) => {

    const [contestants, setContestants] = useState([])
    const [loading,setLoading] = useState(true)
    
   
    useEffect(() => {

        const getContestants = async () => {
            const { data } = await axios.get('https://takum.fly.dev/femalecontestants')
            console.log(data)
            setContestants(data)
            setLoading(false)
        }
        getContestants()
    }, [])
     
    return (
        <>
               <h1 className='text-center'>Vote Your Favourite Miss Takum Contestant</h1>
               <hr />

               <div style={{display:'flex', flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
                    {loading? <p>TAKUM PAGEANTRY IS LOADING....PLEASE BE PATIENT</p> :    
                        contestants.map(contestant => {
                            return <ViewFemaleDetails key={contestant.id} setPage ={setPage} props={contestant} />
                           
                        })
                    }
               </div>
               

           

           
        </>
    )
}
export default ViewFemale;
