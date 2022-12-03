
import React, { useEffect, useState } from 'react'
import {Card, Button, Row, Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import '../contestant.css'

const AdminFemaleDetails = ({props,setPage}) => { 
    
    const [id, setId] = useState(0)
    const [firstName, setFirstName] = useState(' ')
    const [lastName, setLastName] = useState(' ')
    const [email, setEmail] = useState(' ')
    const [phoneNumber, setPhoneNumber] = useState(0)
    const [votes, setVotes] = useState(0)
    const [image, setImage] = useState(' ')


    useEffect(() => {
            setId(props.id)
            setFirstName(props.firstName)
            setLastName(props.lastName)
            setVotes(props.votes)
            setImage(props.image)
            setPhoneNumber(props.phoneNumber)
            setEmail(props.email)
    },[props])


    
        let  navFemale = useNavigate()
    
        const femaleDisqualify = () => {
            fetch("https://takum.fly.dev/femalecontestants/" + id,{
                method : 'DELETE',
                headers : {
                    'Content-type': 'application/json'
                }
            })
            
                    navFemale('/adminhome')
                
            
        }
    
    return(<>
       
        <Row>
            <Col>
                <Card className='shadow-lg m-3 p-2 rounded'>
                        <Card.Img className='img' src={`https://takum.fly.dev/${image}`}/>
                        <Card.Body>
                            <Card.Title className='text-dark'>Contestant:{id}</Card.Title>
                            <Card.Title className="text-success">{firstName.toUpperCase()} {lastName.toUpperCase()}</Card.Title>
                            <Card.Title>
                                {votes} votes
                            </Card.Title>
                            <Card.Title>
                                email : {email} 
                            </Card.Title>
                            <Card.Title>
                                phoneNumber: {phoneNumber}
                            </Card.Title>
                            <Button className="btn btn-danger" onClick={femaleDisqualify}>disqualify</Button> 
                        
                    </Card.Body>        
                </Card>
            </Col>
            </Row>
           
    

       



        </>
    )
}
export default AdminFemaleDetails;