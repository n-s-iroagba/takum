import React from "react";
import { useState } from "react";
import MFirstForm from "./M_FirstForm";
import MSecondForm from './M_SecondForm';
import MThirdForm from "./M_ThirdForm";

//multipage form is managed from this component
const MFormPagesControl = () => {

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