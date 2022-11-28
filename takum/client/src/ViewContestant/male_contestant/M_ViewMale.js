import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Row, Col} from 'react-bootstrap'
import ViewMaleDetails from './M_ViewMaleDetails'


const ViewMale = ({setPage}) => {

    const [contestants, setContestants] = useState([])
    const [loading,setLoading] = useState(true)
    
   
    useEffect(() => {
        
   
        const getProductsData = async () => {
            const { data } = await axios.get('http://localhost:8080/malecontestants')
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

               <Row>
                    {loading? <p>TAKUM PAGEANTRY IS LOADING</p> :    
                        contestants.map(contestant => {
                            return <Col md={6} lg={4} sm={12} key={contestant.id}>
                                <ViewMaleDetails setPage ={setPage} props={contestant} />
                            </Col>
                        })
                    }
               </Row>


           

           
        </>
    )
}
export default ViewMale;
