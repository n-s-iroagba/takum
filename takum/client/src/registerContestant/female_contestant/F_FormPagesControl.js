import React from "react";
import { useState } from "react";
import FFirstForm from "./F_FirstForm";
import FSecondForm from './F_SecondForm';
import FThirdForm from "./F_ThirdForm";

//multipage form is managed from this component
const FFormPagesControl = () => {

const [page,setPage] = useState(1);
const [validated,setValidated]= useState(false)


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