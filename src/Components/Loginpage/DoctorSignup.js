import React from 'react'

import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button, Col, Row } from 'react-bootstrap';

import Signup from '../Loginpage/doctor-signup.png';


function DoctorSignup() {
    return (
        <div>
            
        <div className="App">
        <center>
        <Card style={{ width: "30rem",marginTop:10 }}>

            <Card.Img variant="top" src={Signup} />

            <Card.Body>

            <Card.Title style={{ textAlign: "center" }}>Doctor Signup</Card.Title>
            <hr />
            <div>
                <Form.Floating className="mb-3">
                <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="Name"
                />
                <label htmlFor="floatingInputCustom">Name</label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="Degree"
                />
                <label htmlFor="floatingInputCustom">Degree</label>
                </Form.Floating>


                <Form.Floating className="mb-3">
                <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="Specialization"
                />
                <label htmlFor="floatingInputCustom">Specialization</label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="reg no"
                />
                <label htmlFor="floatingInputCustom">Registration number </label>
                </Form.Floating>


                <Form.Floating className="mb-3">
                <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="years of experience"
                />
                <label htmlFor="floatingInputCustom">Years of experience</label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                <Form.Control
                    id="floatingInputCustom"
                    type="email"
                    placeholder="xys@gmail.com"
                />
                <label htmlFor="floatingInputCustom">Email</label>
                </Form.Floating>

                <Form.Floating>
                <Form.Control
                    id="floatingPasswordCustom"
                    type="password"
                    placeholder="Password"
                />
                <label htmlFor="floatingPasswordCustom">Password</label>

                <p className="justify-content-md-center" style={{ textAlign: "center", marginTop: "1em", marginBottom:"2em" }}>Already having account? <a href="doctor-login">Login</a></p> 

                <Row className="justify-content-md-center" >
                    
                    <Button variant="primary" type="submit" style={{width:"8em",marginBottom:10}}>
                    Signup
                    </Button>
                    
                </Row>

                </Form.Floating>
            </div>

            </Card.Body>

        </Card>
        </center>   

    </div>  

        </div>
    )
}

export default DoctorSignup;