import React from "react";
import { useState } from "react";

import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";


const AdminLogin = () => {
    const key = '@vibrantmanagers19'
    const [loginDetails, setLoginDetails] = useState(' ');
    const navigate = useNavigate()

    const login = () => {

        if (loginDetails===key){
            navigate('/adminhome')
        }
        else {
            alert('wrong password')
        }
    }

    const handleOnChange = (e) => {
        setLoginDetails(e.target.value)
    }

    return (
        <Form>
            <Form.Group
                as={Col}
                md='10'
                controlId='validationCustom01'
            >
                <Form.Label className="text-light">Enter your login Key</Form.Label>
                <Form.Control
                    required
                    type="text"
                    value={loginDetails.login}
                    onChange={handleOnChange}
                    name='loginDetails'
                />
            </Form.Group>
            <Button onClick={login} className="btn btn-primary" type="submit">login</Button>
        </Form>
    )
}
export default AdminLogin;