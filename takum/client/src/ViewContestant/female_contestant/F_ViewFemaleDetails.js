
import React, { useContext, useEffect, useState } from 'react'
import {Card, Button, Row, Col} from 'react-bootstrap'
import { FVoteDetailsContext } from './F_VoteDetailsContext'
import '../contestant.css'

const FemaleDetails = ({props,setPage}) => { 
    const {setVoteId,setVoteFirstName,setVoteLastName} = useContext(FVoteDetailsContext)
    const [id, setId] = useState(0);
    const [firstName, setFirstName] = useState(' ')
    const [lastName, setLastName] = useState(' ')
    const [votes, setVotes] = useState(0)
    const [image, setImage] = useState(' ')


    useEffect(() => {
            setId(props.id)
            setFirstName(props.firstName)
            setLastName(props.lastName)
            setVotes(props.votes)
            setImage(props.image)
    },[props])


  const vote = () => {
    setVoteId(props.id)
    setVoteLastName(props.lastName)
    setVoteFirstName(props.firstName)
    setPage();
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
                            <Button className="btn btn-primary m-2"onClick={vote}>vote</Button> 
                        
                    </Card.Body>        
                </Card>
            </Col>
            </Row>
           
    

       



        </>
    )
}
export default FemaleDetails