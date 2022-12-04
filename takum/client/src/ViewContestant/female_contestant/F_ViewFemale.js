import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Row, Col} from 'react-bootstrap'
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

               <Row>
                    {loading? <p>TAKUM PAGEANTRY IS LOADING</p> :    
                        contestants.map(contestant => {
                            return <Col md={6} lg={4} sm={12} key={contestant.id}>
                                <ViewFemaleDetails setPage ={setPage} props={contestant} />
                            </Col>
                        })
                    }
               </Row>
               

           

           
        </>
    )
}
export default ViewFemale;
