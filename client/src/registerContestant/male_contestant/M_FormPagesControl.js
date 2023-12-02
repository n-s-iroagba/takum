import React from "react";
import { useState } from "react";
import MFirstForm from "./M_FirstForm";
import MSecondForm from './M_SecondForm';
import MThirdForm from "./M_ThirdForm";
import { useContext } from "react";
import { useEffect } from "react";
import { MRegFormContext } from "./M_RegisterContext";
import { useNavigate } from "react-router-dom";
//multipage form is managed from this component
const MFormPagesControl = () => {
const {setState} = useContext( MRegFormContext)
const [page,setPage] = useState(1);
const [validated,setValidated]= useState(false)
const navigate = useNavigate()
useEffect(() => {
    
    const storedState = localStorage.getItem('maleState');
    const token = localStorage.getItem('takumToken')
    if(token===''||!token){
        navigate('/admin')
    }
    // Parse the JSON string back to an object
    if (storedState&&storedState!=='') {
      setState(JSON.parse(storedState));
    }
  }, []);

const addPage = (e) => { 
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
    setPage(page + 1);

}

const subtractPage = (e) => {
    e.preventDefault();
    setPage(page - 1);
}

const ConditionalRender = (props) => {
    switch (page){
        case 1 : return <MFirstForm validated={validated} addPage = {addPage}/>
        case 2 : return <MSecondForm validated={validated}subtractPage = {subtractPage}  addPage = {addPage}/>
        case 3 : return <MThirdForm  subtractPage = {subtractPage} />
        default : return <MFirstForm addPage = {addPage}/>
    }

}
return(<>
{ConditionalRender()}
</>);
}
export default MFormPagesControl;