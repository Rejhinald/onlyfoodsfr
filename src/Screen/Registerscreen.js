import React from 'react'
import {Form, Button} from 'react-bootstrap';

function Registerscreen() {
  return (
    <div>
        <br/>
        <div class='text-center'>
            <h1>Sign Up</h1> 
        </div>
              

    <div class="container">
        <div class="row" >
            <div class="row justify-content-center mt-5">
                <div class="col-sm-6 col-12">
                <Form>
                        <Form.Group className="mb-3" controlId="Name">
                            <Form.Label className="text-center">First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Name">
                            <Form.Label className="text-center">Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <div class="text-center">
                            <Button variant="primary" type="submit">
                                Sign Up
                            </Button> 
                        </div>
                        <br/>
                        </Form>
                </div>
            </div>
        </div>
    </div>

    </div>

  )
}

export default Registerscreen