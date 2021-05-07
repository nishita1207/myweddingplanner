
import React, { useState, useRef } from 'react';
import { Modal, Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap-reboot.css'
import { Link, useHistory } from 'react-router-dom';




const Signup = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {signup} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    
    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match')
        } 

         try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/dashboard")
         } catch {
            setError('Failed to create an account')
        }
        setLoading(false)  
    }

    
    

    return (
        <>
            <center>
                <h1> Welcome to Wed-tastic</h1>
                <h7 >A convenient task Manager and more!</h7>
                </center>
                    <Card>
                       
                        <Card.Body>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <center>
                            <h2 > Sign Up</h2>
                            </center>

                            {error && <Alert variant= "danger">{error}</Alert>}
                            <Form onSubmit = {handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label className = "">Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required></Form.Control>
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required></Form.Control>
                                </Form.Group>
                                <Form.Group id="password-confirm">
                                    <Form.Label>Password Confirmation</Form.Label>
                                    <Form.Control type="password" ref={passwordConfirmRef} required></Form.Control>
                                </Form.Group>
                                <Button variant= "secondary" disabled={loading} className="w-100" type="submit">
                                    Sign Up
                                </Button>
                            </Form>
                           
                            
                           
                        </Card.Body>
                    </Card>

                
                
                    
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;
                <div className = "w-100 text-center mt-2">
                       Already have an account? <Link to= "/"  style ={{color: 'blue'}}> Log In</Link>
                    </div>
                  
                
        
        </>
    )
    }

export default Signup;