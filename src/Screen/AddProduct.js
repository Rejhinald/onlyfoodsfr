import axios from 'axios'
import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

function AddProduct() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const AddProductInfo = async () => {
        let formField = new FormData()
        formField.append('name', name)
        formField.append('description', description)
        await axios({
            method: 'post',
            url: '/api/products/create',
            data: formField
            })
    }
  return (
    <div><br/>
    <div class='text-center' variant='light'>
    <h1>Add Movie</h1>
    </div>
        <Container>
        <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
        type="text"
        placeholder="Enter Name"
        name="name"
        value={name} 
        onChange={(e) => setName(e.target.value)}  />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control 
        type="text"
        placeholder="Enter Description"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={AddProductInfo}>
        Submit
      </Button>
    </Form>


        </Container>



        
    </div>
  )
}





export default AddProduct



