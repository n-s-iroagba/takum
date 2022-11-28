import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import {MRegFormContext} from "./M_RegisterContext"
import { useContext } from "react";
import Row from "react-bootstrap/esm/Row";
import "../register.css";

//using the context defined in ./context to manage form state

const   MFirstForm = ({addPage,validated}) => {

  const {state,handleOnChange} = useContext(MRegFormContext)
  

  return (
    <div className='background'>
    <h2 className="text-center text-light">Become the Next Mr.Takum, The Crown Awaits You...</h2>
    &nbsp;
    <Form className="form col-sm-xx" noValidate validated={validated} onSubmit={addPage}>
      <Form.Group
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
      
      <Row>
      <Form.Group       
      className = ""
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
        className = ""
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
      </Row>
      &nbsp;

      <Form.Group 
        className="" 
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
      <div className="btn btn-pimary">
      <Button type="submit">next</Button>
      </div>
      </Form> 
      </div>
  );
};
export default MFirstForm;
