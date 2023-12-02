import React, { useContext,useEffect} from "react";
import { useState } from "react";
import FFirstForm from "./F_FirstForm";
import FSecondForm from './F_SecondForm';
import FThirdForm from "./F_ThirdForm";
import { FRegFormContext } from "./F_RegisterContext";
import { useNavigate } from "react-router-dom";

//multipage form is managed from this component
const FFormPagesControl = () => {
const {setState} = useContext( FRegFormContext)
const navigate = useNavigate()
const [page,setPage] = useState(1);
const [validated,setValidated]= useState(false)
useEffect(() => {
    
    const storedState = localStorage.getItem('femaleState');
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
        case 1 : return <FFirstForm validated={validated} addPage = {addPage}/>
        case 2 : return <FSecondForm validated={validated}subtractPage = {subtractPage}  addPage = {addPage}/>
        case 3 : return <FThirdForm  subtractPage = {subtractPage} />
        default : return <FFirstForm addPage = {addPage}/>
    }

}
return(<>
{ConditionalRender()}
</>);
}
export default FFormPagesControl;