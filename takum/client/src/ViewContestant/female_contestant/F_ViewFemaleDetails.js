
import React, { useContext, useEffect, useState } from 'react'
import {Card, Button} from 'react-bootstrap'
import { FVoteDetailsContext } from './F_VoteDetailsContext'
import '../contestant.css'
import { ListGroup } from 'react-bootstrap'

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
       
        
            
                <Card className='card shadow-sm m-3 p-2 rounded'>
                        <Card.Img className='img' src={`https://takum.fly.dev/${image}`}/>
                        <Card.Body>
                            <Card.Title className='text-dark'>Contestant:{id}</Card.Title>
                            <Card.Text className="text-success">{firstName.toUpperCase()} {lastName.toUpperCase()}</Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                        <ListGroup.Item>{votes} votes</ListGroup.Item>
                        </ListGroup>
                            <Button className="btn btn-primary m-2"onClick={vote}>vote</Button>    
                        </Card>
        
            
           
    

       



        </>
    )
}
export default FemaleDetails