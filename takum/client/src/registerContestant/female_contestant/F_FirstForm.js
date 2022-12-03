import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import {FRegFormContext} from "./F_RegisterContext"
import { useContext } from "react";
import "../register.css";
import { useNavigate } from "react-router-dom";

//using the context defined in ./context to manage form state

const   FFirstForm = ({addPage,validated}) => {

  const {state,handleOnChange} = useContext(FRegFormContext)
  const navigate = useNavigate()
  

  return (
    <div className='background'>
    <h2 className="text-center text-light">Admin Registeration, Miss Takum</h2>
    &nbsp;
    <Form className="form col-sm-xx" noValidate validated={validated} onSubmit={addPage}>
      <Form.Group
        as = {Col}
        md = '10'
        controlId = 'validationCustom01'
      >
        <Form.Label className="text-light">First name</Form.Label>
        <Form.Control
          required
          type = "text"
          placeholder = "First name"
          value = {state.firstName}
          onChange = {handleOnChange}
          name = "firstName"
        />
      </Form.Group>
      &nbsp;

      <Form.Group  
        className = "" 
        as = {Col}
        md = '10'
        controlId = 'validCustom01'
        >
        <Form.Label className="text-light">Last name</Form.Label>
        <Form.Control
          required
          type = "text"
          placeholder = "Last name"
          value = {state.lastName}
          onChange = {handleOnChange}
          name = "lastName"
        />
      </Form.Group>
      &nbsp;

      <Form.Group
        className = ""
        as = {Col}
        md = '10'
        controlId = 'validCustom01'
      >
        <Form.Label className="text-light">Middle name</Form.Label>
        <Form.Control
          type = "text"
          placeholder = "Middle name"
          value = {null}
          onChange = {handleOnChange}
          name = "middleName"
        />
      </Form.Group>
      &nbsp;
      
      
      <Form.Group       
      className = ""
      as = {Col}
      md = '10'  
      controlId = 'validCustom01'
      >
        <Form.Label className="text-light">Date Of Birth</Form.Label>
        <Form.Control
          type = "date"
          name = "dateOfBirth"
          placeholder = "Date Of birth"
          value = {state.dateOfBirth}
          onChange = {handleOnChange}
        />
      </Form.Group>
      &nbsp;
      <Form.Group
        as ={ Col}
        md = "5"
        controlId = 'validCustom01'
      >
        <Form.Label className="text-light">phone Number</Form.Label>
      <Form.Control 
      
      value = {state.phoneNumber}
      onChange = {handleOnChange}
      name= 'phoneNumber'
      required
      type ='tel'
      />  
     </Form.Group>
    
      &nbsp;

      <Form.Group 
        className="" 
        as = {Col}
        md = '10'
        controlId = 'validCustom01' 
       >   
        <Form.Label className="text-light">Email</Form.Label>
        <Form.Control 
         required 
         name = "email"
         type="email" 
         placeholder="your email"
         value = {state.email}
         onChange = {handleOnChange} 
        />
      </Form.Group>
      &nbsp;
      &nbsp;
      <Form.Group>
    <div className="btn1">
    <Button className="btn btn-primary" onClick={()=>navigate('/adminhome')}>Admin Home</Button>
      &nbsp;
      &nbsp;
      <Button className="btn btn-primary" type="submit">next</Button>
     </div>
     </Form.Group>
      </Form> 
      </div>
  );
};
export default FFirstForm;
