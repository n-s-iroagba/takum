
import React, { useEffect, useState,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { MVoteDetailsContext } from './M_VoteDetailsContext'
import '../contestant.css'

const MaleDetails = ({props,setPage,thepic}) => { 
        const {setVoteId,setVoteFirstName,setVoteLastName} = useContext(MVoteDetailsContext)
    const [id, setId] = useState(0);
    const [firstName, setFirstName] = useState(' ')
    const [lastName, setLastName] = useState(' ')
    const [votes, setVotes] = useState(0)
    const nav = useNavigate()


    useEffect(() => {
            setId(props.id)
            setFirstName(props.firstName)
            setLastName(props.lastName)
            setVotes(props.votes)
    },[props])


  const vote = () => {
    alert('voting has ended')
    nav('/')
   setVoteId(props.id)
    setVoteLastName(props.lastName)
    setVoteFirstName(props.firstName)
    setPage();
  }
    return(<>
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
export default MaleDetails