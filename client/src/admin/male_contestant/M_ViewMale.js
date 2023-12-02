import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Row, Col} from 'react-bootstrap'
import AdminViewMaleDetails from './M_ViewMaleDetails'
import '../contestant.css'

const AdminViewMale = ({setPage}) => {

    const [contestants, setContestants] = useState([])
    const [loading,setLoading] = useState(true)
   
   
    useEffect(() => {

        const getContestants = async () => {
            const { data } = await axios.get('https://takum.fly.dev/malecontestants')
            console.log(data)
            setContestants(data)
            setLoading(false)
        }
        getContestants()
    }, [])

     

    return (
        <>
               <h1 className='text-center'>Vote Your Favourite Mr.Takum Contestant</h1>
               <hr />

               <Row>
                    {loading? <p>TAKUM PAGEANTRY IS LOADING</p> :    
                        contestants.map(contestant => {
                            return <Col md={6} lg={4} sm={12} key={contestant.id}>
                                <AdminViewMaleDetails setPage ={setPage} props={contestant} />
                            </Col>
                        })
                    }
               </Row>
               <br/>
               

           

           
        </>
    )
}
export default AdminViewMale;
