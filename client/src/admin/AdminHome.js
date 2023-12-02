import React from 'react';
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';
import './contestant.css'
const AdminHome = () => {
    let navigate = useNavigate()
    
    /*const deleteAllMale= () => {
        fetch("http://localhost:8080/malecontestants/",{
            method : 'DELETE',
            headers : {
                'Content-type': 'application/json'
            }
        })
        
        navigate('/malecontestants')
            
        
    }
    
    const deleteAllFemale= () => {
        fetch("http://localhost:8080/malecontestants/",{
            method : 'DELETE',
            headers : {
                'Content-type': 'application/json'
            }
        })
        .then((res) =>{
            if (res.ok){
                navigate('/femalecontestants')
            }
        }
        )
    }*/

    const viewMale = () => {
        navigate('/adminmalecontestants')
    }

    const viewFemale = () => {
        navigate('/adminfemalecontestants')
    }
    const goToMale = () => {
        navigate('/registermale')
    }
    const goToFemale = ()=>{
        navigate ('/registerfemale')
    }


    return(<>
    <div className='admin'>
    <div>
    <Button onClick ={viewMale} className='btn btn-primary'>view male contestants</Button>
    &nbsp;
    &nbsp;
    &nbsp;
    <Button onClick ={goToMale} className='btn btn-primary'>register male contestants</Button>
    </div>
    &nbsp;
    &nbsp;
    &nbsp;
    &nbsp;
    &nbsp;
    <br/>
    <div>
    <Button onClick ={viewFemale} className='btn btn-primary'>view female contestants</Button>
    &nbsp;
    &nbsp;
    &nbsp;
    <Button onClick ={goToFemale} className='btn btn-primary'>register female contestants</Button>
    </div>
    </div>
    </>

    )

    
}
export default AdminHome
