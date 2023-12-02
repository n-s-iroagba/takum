import React from 'react'
import './components.css'
import { useNavigate } from 'react-router-dom'


const Vote=()=>{
    const navigate = useNavigate()
    return(
        <div className='vote-wrapper'>
            <h4 className='vote-comment'>Welcome to the Voting Poll</h4>
            <div className='vote-btns'>
                <button onClick={()=>navigate('/malecontestants')}>Mr.Takum</button>
                <button onClick={()=>navigate('/femalecontestants')}>Miss Takum</button>
            </div>
        </div>
    )
}
export default Vote