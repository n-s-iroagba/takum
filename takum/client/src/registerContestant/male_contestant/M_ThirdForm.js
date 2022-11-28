import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import {MRegFormContext} from "./M_RegisterContext"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import '../register.css'



const MThirdForm= ({subtractPage}) => {
  const navigate = useNavigate()
  const {validated,state,handleFile,handleOnChange,submit} = useContext(MRegFormContext)
  const goToPayment = () => navigate('/maleregistrationpayment')
  return (
    <div className='background'>
    <Form className="form col-sm-xx" noValidate validated = {validated} onSubmit = {goToPayment}>
    <Row>
    <Form.Group 
       as = {Col} 
       md = "5" 
       controlId = "highestEducationalQualification"
      >
      <Form.Label>Highest Educational Qualification </Form.Label>
        <Form.Control
          required
          type = "text"
          as = 'select'
          value = {state.highestEducationalQualification}
          onChange = {handleOnChange}
          name = "highestEducationalQualification"
        > 
        <option>Please Select</option>
        <option>Primary School Leaving Certificate</option>
        <option>Secondary School Leaving Certificate</option>
        <option>Tertiary Institution Certificate</option>
        </Form.Control>
      </Form.Group>

      <Form.Group 
       as = {Col} 
       md = "5" 
       controlId = "isHealthChallenge"
      >
      <Form.Label>Do you have any health Challenge</Form.Label>
      <Form.Control
        required
        as ="select"
        name ="isHealthChallenge"
        value = {state.isHealthChallenge}
        onChange = {handleOnChange}
       >
        <option>Please select</option>
        <option>Yes</option>
        <option>No</option>
      </Form.Control>
      </Form.Group>
     </Row>
      &nbsp;

      <Form.Group 
       as = {Col} 
       md = "10" 
       controlId = "healthChallenge"
      >
      <Form.Label>Please State Your Health Challenge(if you have any)</Form.Label>
      <Form.Control
        type = "text-area"
        placeholder = "Please type in your health challenge if your have any"
        name ="healthChallenge"
        value = {null}
        onChange = {handleOnChange}   
      />
      </Form.Group>
      &nbsp;

      <Form.Group 
       as = {Col} 
       md = "10" 
       controlId = "managerName"
      >
      <Form.Label>Manager's Name</Form.Label>
        <Form.Control
          required
          type = "text"
          placeholder = "Manager's Name"
          value = {state.managerName}
          onChange = {handleOnChange}
          name = "managerName"
        />
      </Form.Group>
      &nbsp;

      <Form.Group 
       as = {Col} 
       md = "10" 
       controlId = "contestReason"
      >
      <Form.Label>Why do you wish to contest in this pageantry?</Form.Label>
      <Form.Control 
       className= "text-area"
       type = 'text-area' 
       placeholder = "Tell us your reason for contesting" 
       required
       name ="contestReason"
       value = {state.contestReason}
       onChange = {handleOnChange}   
       />
      </Form.Group>
      &nbsp;

       <Row>
      <Form.Group 
       as = {Col} 
       md = "5" 
       controlId = "validationCu"
      >
      <Form.Label>Role Model</Form.Label>
      <Form.Control 
       type = "text" 
       placeholder = "Your Role Model" 
       name ="roleModel"
       value = {state.roleModel}
       onChange = {handleOnChange}   
       required />
      </Form.Group>

      <Form.Group 
       as = {Col} 
       md = "5" 
       controlId = "hobbies"
      >
      <Form.Label>Favourite Show</Form.Label>
      <Form.Control 
        type = "text" 
        placeholder = "Your favourite show"
        name ="favouriteShow"
        value = {state.favouriteShow}
        onChange = {handleOnChange}   
        required /> 
      </Form.Group>
      </Row>
      &nbsp;

      <Form.Group 
       as = {Col} 
       md = "10" 
       controlId = "hobbies"
      >
      <Form.Label>Hobbies</Form.Label>
      <Form.Control 
        type = "text-area" 
        placeholder = "Your hobbies"
        name ="hobbies"
        value = {state.hobbies}
        onChange = {handleOnChange}   
        required /> 
      </Form.Group>
      &nbsp;
      
     <Row>
     &nbsp;
      <Form.Group 
      controlId="formFiled" 
      className="mb-3"
      as = {Col}
      md = '5'
      >
        <Form.Label>Please Upload Your Passport</Form.Label>
        <Form.Control 
        type="file"
        onChange = {handleFile}
         />
      </Form.Group>
     
      <Form.Group
      as = {Col}
      md = '5'
      >
      <Form.Label>Have You been Permitted by Your Parent Or Guardian</Form.Label>
      <Form.Control
        name = "permission"
        required
        as = "select"
        type = 'text'
        placeholder = 'please select an option'
        value = {state.permission}
        onChange = {handleOnChange}
      >
        <option >select</option>
        <option >Yes</option>
        <option >No</option>
        </Form.Control>
      </Form.Group>
      &nbsp;
      </Row>
      </Form> 

      <div className = "btn">
      <Button onClick = {subtractPage} type="button">back</Button>
      &nbsp;
      &nbsp;
      &nbsp;
      <Button onClick={submit} type = "submit">Submit form</Button>
    </div>
    
    </div>
  );
}

export default MThirdForm;
