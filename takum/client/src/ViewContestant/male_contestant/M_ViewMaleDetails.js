
import React, { useEffect, useState } from 'react'
import {Card, Button} from 'react-bootstrap'
//import { MVoteDetailsContext } from './M_VoteDetailsContext'
import '../contestant.css'

const MaleDetails = ({props,setPage}) => { 
    //const {setVoteId,setVoteFirstName,setVoteLastName} = useContext(MVoteDetailsContext)
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
    alert('voting has ended')
   /* setVoteId(props.id)
    setVoteLastName(props.lastName)
    setVoteFirstName(props.firstName)
    setPage();*/
  }
    return(<>
       
        <Card style={{ width: '80vw', height: '80vh' }} variant="top" className='card shadow-sm m-3 p-2 rounded'>
            <Card.Img style={{ height: '40vh', width: '70vw', objectFit: 'scale-down', marginTop: '0%' }} className='img' src={`https://takum.fly.dev/${image}`} />
            <Card.Body>
                <Card.Title className='text-dark'>Contestant:{id}</Card.Title>
                <Card.Title className="text-success">{firstName.toUpperCase()} {lastName.toUpperCase()}</Card.Title>
            </Card.Body>
            <Card.Body>
                <Card.Title>{votes} votes</Card.Title>
                <Button className="btn btn-primary m-2" onClick={vote}>vote</Button>
            </Card.Body>
        </Card>
        </>
    )
}
export default MaleDetails