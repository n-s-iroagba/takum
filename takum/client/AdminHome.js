import React from 'react';
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';

const AdminHome = () => {
    let nav = useNavigate()
    const disQualify = () => {
        fetch("http://localhost:8080/contestants/" + id,{
            method : 'DELETE',
            headers : {
                'Content-type': 'application/json'
            }
        })
        .then((res) =>{
            if (res.ok){
                nav('/adminhome')
            }
        })
    }

    const approveMale = () => {
        fetch("http://localhost:8080/contestants/" + id,{
            method : 'DELETE',
            headers : {
                'Content-type': 'application/json'
            }
        })
        .then((res) =>{
            if (res.ok){
                nav('/malecontestants')
            }
        }
        )
    }

    return(

    )

    
}
export default AdminHome
