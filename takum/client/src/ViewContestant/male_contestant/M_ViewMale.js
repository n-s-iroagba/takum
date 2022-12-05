import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Col} from 'react-bootstrap'
import ViewMaleDetails from './M_ViewMaleDetails'
import '../contestant.css'

const ViewMale = ({setPage}) => {

    const [contestants, setContestants] = useState([])
    const [loading,setLoading] = useState(true)
    
    useEffect(() => {

        const getProductsData = async () => {
            const { data } = await axios.get('https://takum.fly.dev/malecontestants')
            console.log(data)
            setContestants(data)
            setLoading(false)
        }
        getProductsData()
    }, [])

    return (
        <>
               <h1 className='text-center'>Vote Your Favourite Mr.Takum Contestant</h1>
               <hr />

               <Col>
                    {loading? <p>TAKUM PAGEANTRY IS LOADING</p> :    
                        contestants.map(contestant => {
                            return <Col md={6} lg={4} sm={12} key={contestant.id}>
                                <ViewMaleDetails setPage ={setPage} props={contestant} />
                            </Col>
                        })
                    }
               </Col>
               


           

           
        </>
    )
}
export default ViewMale;
