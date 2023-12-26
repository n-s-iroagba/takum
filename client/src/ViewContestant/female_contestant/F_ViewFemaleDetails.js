
import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { FVoteDetailsContext } from './F_VoteDetailsContext'
import '../contestant.css'


const FemaleDetails = ({ props, setPage,thepic }) => {
    const { setVoteId, setVoteFirstName, setVoteLastName } = useContext(FVoteDetailsContext)
    const [id, setId] = useState(0);
    const [firstName, setFirstName] = useState(' ')
    const [lastName, setLastName] = useState(' ')
    const [votes, setVotes] = useState(0)
 
    const navigate= useNavigate()

    useEffect(() => {
        setId(props.id)
        setFirstName(props.firstName)
        setLastName(props.lastName)
        setVotes(props.votes)
     
        console.log(props)
    }, [props])


    const vote = () => {
        alert('voting has ended')
        navigate('/')
        setVoteId(props.id)
        setVoteLastName(props.lastName)
        setVoteFirstName(props.firstName)
        setPage();
    }
    return (<>
        <div style={{ width: '5cm', height: '10cm',border:'1px solid black',textAlign:'center' }} className='div shadow-sm m-3 p-2 rounded'>
            <img style={{ height: '5cm', width: '5cm', objectFit: 'scale-down', marginTop: '0%' }} src={thepic} alt='contestants' />
        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                <div className='text-dark'>Contestant:{id}</div>
                <div className="text-success"style={{wordBreak:'break-all'}}>{firstName.toUpperCase()} {lastName.toUpperCase()}</div>
            
                <div>{votes} votes</div>
                <button className="btn btn-primary m-2" onClick={vote}>vote</button>
                </div>
        </div>

    </>
    )
}
export default FemaleDetails
