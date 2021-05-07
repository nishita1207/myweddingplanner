
import React, { useState, useRef } from 'react';
import { Modal, Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
//import 'bootstrap/dist/css/bootstrap-reboot.css'
import { Link, useHistory } from 'react-router-dom';
import Header from './Header'





const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {login} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()


        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/dashboard")
        } catch {
            setError('Failed to sign in')
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
                            <h2 > Log In</h2>
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
            
                                <Button style={{ flexDirection:"row" }}  disabled={loading} className="w-500" type="submit">
                                    Log In
                                </Button>
                            
                            </Form>

                        </Card.Body>
                    </Card>
                    

                
                
                    

                <div className = "w-100 text-center mt-2">
                        Need an account? <Link to= "/signup" style ={{color: 'blue'}} > Sign Up</Link>
                    </div>
                  
                
        
        </>
    )
}

export default Login;

