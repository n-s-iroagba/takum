import React from 'react'
import { useState } from 'react';
import { Form,Col,Button } from 'react-bootstrap';
import './components.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const LoginForm= ()=>{

          const navigate = useNavigate()
          const [validated, setValidated] = useState(false)
          const [request,setRequest] = useState({username:"",password:""})
         
    
          const login = async (event) => {
            if(request.username!=='vibrantmanager'||request.password!=='@vibrantmanagers19xx'){
              alert('wrong username or password')
              return
            }
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            setValidated(true);
            localStorage.setItem('takumToken',JSON.stringify(request))
            navigate('/adminhome')
            // try {
            //   // Send login data to the backend
            //   const response = await axios.post('http://localhost:8080/adminlogin', {
            //     request
            //   });
            //   if (response.data && response.status===200){
            //     localStorage.setItem('takumToken',response.data)

            //   }
        
            //   // Save the token or perform any other actions as needed
            // } catch (error) {
            //   console.error('Login failed:', error.response.data);
            // }
           
          };

          const handleChangeUsername =  (e) => {
            let tempRequest= { ...request}
            tempRequest.username = e.target.value
            setRequest(tempRequest)
          }
          const handleChangePassword = async (e) => {
            let tempRequest= { ...request}
            tempRequest.password = e.target.value
            setRequest(tempRequest)
          }
        
          
            return (
              <div className='login-wrapper' style={{ backgroundColor: 'brown' }}>
                <Form style={{width:'80vw'}} validated={validated} onSubmit={login}>
                   <h4 className="text-light"style={{margin:'1cm',textAlign:'center'}}>Welcome Dear Admin, Kindly Login To Have Access</h4>
                  <Form.Group
                   as={Col}>
                    <Form.Label className="text-light">Username</Form.Label>
                    <Form.Control
 
                      required
                      type="text"
                      value={request.username}
                      onChange={(e) => handleChangeUsername(e)}
                      style={{background:'transparent',borderRadius:0}}
                    />
                  </Form.Group>

                  <br />
                  <Form.Group
                  as={Col}>
                    <Form.Label className="text-light">Password</Form.Label>
                    <Form.Control
                    
                      required
                      type="password"
                      value={request.password}
                      onChange={(e) => handleChangePassword(e)}
                      style={{background:'transparent',borderRadius:0}}
                      
                    />
                  </Form.Group>
                  <br />
                  <div className="text-center"> {/* Center the contents */}
                    <Button variant='light' style={{ backgroundColor: 'transparent', color: 'white' }} type="submit">
                      Login
                    </Button>
                  </div>
                </Form>
              </div>
            );
          };
          
          export default LoginForm;
          