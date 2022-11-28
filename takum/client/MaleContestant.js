import React from 'react'
import { useNavigate } from 'react-router-dom'


const maleContestants = () => {
    
    let  navMale = useNavigate()

    const maleQisqualify = () => {
        fetch("http://localhost:8080/malecontestants/" + id,{
            method : 'DELETE',
            headers : {
                'Content-type': 'application/json'
            }
        })
        .then((res) =>{
            if (res.ok){
                navMale('/adminhome')
            }
        })
    }

    const approvemale = () => {
        fetch("http://localhost:8080/malecontestants/" + id,{
            method : 'DELETE',
            headers : {
                'Content-type': 'application/json'
            }
        })
        .then((res) =>{
            if (res.ok){
                navMale('/malecontestants')
            }
        }
        )
    }

    const deleteAllmale = () => {
        fetch("http://localhost:8080/malecontestants/",{
            method : 'DELETE',
            headers : {
                'Content-type': 'application/json'
            }
        })
        .then((res) =>{
            if (res.ok){
                navMale('/malecontestants')
            }
        }
        )
    }

    const setMaleWinner = () => {
        fetch("http://localhost:8080/malecontestants/" + id,{
                method : 'PATCH',
                headers : {
                    'Content-type': 'application/json'
                }
            })
            .then((res) =>{
                if (res.ok){
                    navMale('/adminhome')
                }
            })
        }
        
   

}