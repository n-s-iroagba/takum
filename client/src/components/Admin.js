import React from 'react'
import './components.css'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


const Admin =()=>{
    const navigate = useNavigate()
    useEffect(()=>{
        const token = localStorage.getItem('takumToken')
        if(token===''||!token){
            navigate('/admin')
        }
        },[])
    return(
        <div className='vote-wrapper'>
            <h4 className='vote-comment'>Welcome Dear Admin</h4>
            <div className='admin-btns'>
                <button onClick={()=>navigate('/registermale')}>Register Mr.Takum</button>
                <button onClick={()=>navigate('/registerfemale')}>Register Miss Takum</button>
               <button onClick={()=>{
                localStorage.setItem('takumToken','')
                navigate('/')}}>Logout</button>
               
            </div>
        </div>
    )
}
export default Admin