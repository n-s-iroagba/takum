
import React, { useEffect, useState } from 'react'
import {Card, Button, Container, Row, Col} from 'react-bootstrap'

const MaleDetails = ({props,setPage}) => { 

    const [id, setId] = useState('')
    const [firstName, setFirstName] = useState(0)
    const [lastName, setLastName] = useState('')
    const [votes, setVotes] = useState(true)
    const [image, setImage] = useState('')


    useEffect(() => {
            setId(props.id)
            setFirstName(props.firstName)
            setLastName(props.lastName)
            setVotes(props.votes)
            setImage(props.image)

    },[props])


  const vote = () => {
    setPage();
  }
    return(<>
        <Row>
            <Col md={8} lg={8} sm={8}>
                <Card className='shadow-lg m-3 p-2 rounded'>
                        <Card.Img src={`http://localhost:8080/${image}`}/>
                        <Card.Body>
                            <Card.Title className='text-left text-dark'>Contestant:{id}</Card.Title>
                            <Card.Title className="text-success text-center">{firstName} {lastName}</Card.Title>
                            <Card.Text>
                                {votes} votes
                            </Card.Text>
                        <br />
                            <Button className="btn btn-primary m-2"onClick={setPage}>vote</Button> 
                        
                    </Card.Body>        
                </Card>
            </Col>
            </Row>
    

       



        </>
    )
}
export default MaleDetails