import React from 'react'
import { Card, Button, Row, Carousel, Container, CardGroup, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';


function Genres({ genre }) {
  return (
    <Container>
    <Card className="rounded">
        <Link to={`/categoryproducts/${genre._id}`}>
            <Card.Img style={{
                 width:'100%',
                 height:'200px',
                 objectFit:'cover'
            }} className="rounded" src={genre.image} />
        </Link>
    <Card.Body>
        <Card.Title>
            <h3>{genre.name}</h3>
        </Card.Title>
    <br/>
    <Link to={`/categoryproducts/${genre._id}`}>
        <Row><Button> Products </Button></Row>
    </Link>
    </Card.Body>
    </Card>
    </Container>
  );
}

export default Genres