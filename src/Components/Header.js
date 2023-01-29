import React, {useState} from 'react'
import {Container, Nav, Navbar, NavDropdown, Offcanvas, Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'


function Header() {
    const [show, setShow] = useState(false);
    // const down = () => {window.scrollTo(800,670);}
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <header>
    <Navbar bg='black' variant='dark' expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to="/"><img
              alt=""
              src="../images/pflixlogo.png"
              width="80"
              height="35"
              className="d-inline-block align-top"
            />{' '}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ml-auto">
          <Link to="/" type="button" class="btn btn-black" style={{color:'#FFF'}}><i class="fa fa-home" aria-hidden="true"></i> Home</Link>
          <Link to="/" type="button" class="btn btn-black" style={{color:'#FFF'}}><i class="fa fa-video-camera" aria-hidden="true"></i> Movies</Link>
          <Link to='/' type="button" class="btn btn-black" style={{color:'#FFF'}}><i class="fa fa-list-ul" aria-hidden="true"></i> Mylist</Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ml-auto">
            <Link to="/" className="btn btn-success" variant='light'>Plans</Link>
            <Link to='/signup' className='btn btn-warning'>Sign up</Link>
            <button type="button" class="btn btn-info" onClick={handleShow}>Log in</button>


            <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Log in</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Stay log in" />
      </Form.Group>
      <Button variant="primary" type="submit">Log in</Button>
    </Form>
        </Offcanvas.Body>
      </Offcanvas>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header


