import React from 'react'
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import {FRegFormContext} from "./F_RegisterContext"
import { useContext } from "react";
import "../register.css";

const FSecondForm = ({subtractPage,addPage,validated}) => {
  const {state,handleOnChange} = useContext(FRegFormContext)
  return (
    <div className='background'>
    <Form className="form col-sm-xx" validated={validated} onSubmit={addPage}>
      <Form.Group 
       as = {Col}
       md = '10'
       controlId = 'validationCustom01'
      >
      <Form.Label className='text-light'>Country</Form.Label>
      <Form.Control
      style={{background:'transparent',borderRadius:0,color:'white'}}
       value = {state.country}
       onChange = {handleOnChange}
       name = "country" 
       type = " text"
      />
      </Form.Group>
      &nbsp;

      <Form.Group 
       as = {Col}
       md = "10" 
       controlId = 'validationCustom01'
       >
      <Form.Label className='text-light'>State Of Origin</Form.Label>
      <Form.Control
      
       type = "text"
       value = {state.stateOfOrigin}
       onChange = {handleOnChange}
       name = "stateOfOrigin" 
       placeholder = 'State of origin'
       required 
       style={{background:'transparent',borderRadius:0,color:'white'}}
      />
      </Form.Group>
      &nbsp;

      <Form.Group 
       as = {Col}
       md = "10" 
       controlId = "localGovernmentArea"
      >
      <Form.Label className='text-light'>Local Government Of Origin</Form.Label>
       <Form.Control
       style={{background:'transparent',borderRadius:0,color:'white'}}
         type = "text"         
         placeholder = "Local Government Of Origin"
         required
         value = {state.lgaOfOrigin}
         onChange = {handleOnChange}
         name = "lgaOfOrigin" 
        />
      </Form.Group>
      &nbsp;

      <Form.Group 
       as = {Col}
       md = "10" 
       controlId = "validationCustom"
      >
      <Form.Label className='text-light'>Ward</Form.Label>
      <Form.Control
      style={{background:'transparent',borderRadius:0,color:'white'}}
       value = {state.ward}
       onChange = {handleOnChange}
       name = "ward" 
       type = "text" 
       placeholder = "Ward" 
       required
      />
      </Form.Group>
      &nbsp;

     
     <Form.Group 
      as = {Col}
      md = "10" 
      controlId = "stateOfResidence"
      >
      <Form.Label className='text-light'>State Of Residence</Form.Label>
      <Form.Control
      style={{background:'transparent',borderRadius:0,color:'white'}}
       value = {state.stateOfResidence}
       onChange = {handleOnChange}
       name = "stateOfResidence" 
       type = "text" 
       placeholder = "State Of Residence" required />
      </Form.Group>
      &nbsp;      

      <Form.Group 
        as = {Col}
        md = "10" 
        controlId = "localGovernmentArea"
         >
        <Form.Label className='text-light'>Local Government Of Residence</Form.Label>
        <Form.Control
        style={{background:'transparent',borderRadius:0,color:'white'}}
        type = "text"
        placeholder = "Local Government Of Residence"
        required
        value = {state.lgaOfResidence}
        onChange = {handleOnChange}
        name = "lgaOfResidence" 
        />
        </Form.Group>
        &nbsp;
    
      <Form.Group 
       as = {Col}
       md = "10" 
       controlId = "validationCustom"
       >
      <Form.Label className='text-light'>Address</Form.Label>
      <Form.Control
      style={{background:'transparent',borderRadius:0,color:'white'}}
       value = {state.address}
       onChange = {handleOnChange}
       name = "address" 
       type = "text" 
       placeholder = "Address" required />

      </Form.Group>
      &nbsp;
      <Form.Group 
      as = {Col}
       md = "10" 
       controlId = "localGovernmentArea"
       >
      <Form.Label className='text-light'>Next of kin Name</Form.Label>
      <Form.Control
      style={{background:'transparent',borderRadius:0,color:'white'}}
       required
       type = "text"
       placeholder = "Next of kin"
       name = "nextOfKinName"
       value = {state.nextOfKinName}
       onChange = {handleOnChange}
        />
      </Form.Group>
      &nbsp;

     <Form.Group 
      as = {Col}
       md = "5" 
       controlId = "localGovernmentArea"
       >
      <Form.Label className='text-light'>Next of kin phone number</Form.Label>
      <Form.Control
      style={{background:'transparent',borderRadius:0,color:'white'}}
       required
       type = "tel"
       name = "nextOfKinPhoneNumber"
       placeholder = "Next of kin phone number "
       value = {state.nextOfKinPhoneNumber}
       onChange = {handleOnChange}
       />
      </Form.Group>
      &nbsp;

      <Form.Group>
      <div className = "btn1">
      
      <Button className = "btn" onClick = {subtractPage}>back</Button>{' '}{' '}
      <Button className = "btn" type="submit">next</Button>
    
      </div>
      </Form.Group>
      &nbsp;
    </Form>
    </div>
      
      )
      }
     export default FSecondForm;