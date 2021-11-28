import React from 'react'

import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button, Col, Row } from 'react-bootstrap';

import Login from '../Loginpage/DoctorLogin.png';



function DoctorLogin() {
    return (
        <div className="App">
        <center>
        <Card style={{ width: "30rem",marginTop:200 }}>

            <Card.Img variant="top" src={Login} />

            <Card.Body>

            <Card.Title style={{ textAlign: "center" }}>Doctor Login</Card.Title>
            <hr />
            <div>
                <Form.Floating className="mb-3">
                <Form.Control
                    id="floatingInputCustom"
                    type="email"
                    placeholder="name@example.com"
                />
                <label htmlFor="floatingInputCustom">Email address</label>
                </Form.Floating>
                <Form.Floating>
                <Form.Control
                    id="floatingPasswordCustom"
                    type="password"
                    placeholder="Password"
                />
                <label htmlFor="floatingPasswordCustom">Password</label>

                <p className="justify-content-md-center" style={{ textAlign: "center", marginTop: "1em", marginBottom:"2em" }}>Don't have an account? <a href="doctor-signup">Signup</a></p> 

                <Row className="justify-content-md-center" >
                    
                    <Button variant="primary" type="submit" style={{width:"8em",marginBottom:10}}>
                    Login
                    </Button>
                    
                </Row>

                </Form.Floating>
            </div>

            </Card.Body>

        </Card>
        </center>   

    </div>  
    )
}

export default DoctorLogin
