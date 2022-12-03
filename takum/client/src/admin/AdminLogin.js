import React from "react";
import { useState } from "react";

import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import axios from 'axios'


const AdminLogin = () => {

    const [loginDetails, setLoginDetails] = useState(' ');
    const navigate = useNavigate()

    const login = async () => {

        const res = await axios.patch('https://takum.fly.dev/adminlogin', {
            login: loginDetails
        },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        if (res) {
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