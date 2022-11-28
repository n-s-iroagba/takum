import React from 'react'
import { useNavigate } from 'react-router-dom'


const FemaleContestants = () => {
    
    let navFemale = useNavigate()

    const femaleQisqualify = () => {
        fetch("http://localhost:8080/femalecontestants/" + id,{
            method : 'DELETE',
            headers : {
                'Content-type': 'application/json'
            }
        })
        .then((res) =>{
            if (res.ok){
                navFemale('/adminhome')
            }
        })
    }

    const approveFemale = () => {

        fetch("http://localhost:8080/femalecontestants/" + id,{
            method : 'DELETE',
            headers : {
                'Content-type': 'application/json'
            }
        })
        .then((res) =>{
            if (res.ok){
                navFemale('/femalecontestants')
            }
        }
        )
    }

    const deleteAllFemale = () => {
        fetch("http://localhost:8080/femalecontestants/",{
            method : 'DELETE',
            headers : {
                'Content-type': 'application/json'
            }
        })
        .then((res) =>{
            if (res.ok){
                navFemale('/femalecontestants')
            }
        }
        )
    }

    const setMaleWinner = () => {
        const maleQisqualify = () => {
            fetch("http://localhost:8080/malecontestants/" + id,{
                method : 'PATCH',
                headers : {
                    'Content-type': 'application/json'
                }
            })
            .then((res) =>{
                if (res.ok){
                    navFemale('/adminhome')
                }
            })
        }
        
    }

}