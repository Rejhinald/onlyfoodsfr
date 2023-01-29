import React from 'react'
import { Card, Button, Row, Carousel, Container, CardGroup, Col } from 'react-bootstrap'
import { Link, Navigate } from 'react-router-dom';


function DirectorProducts({ product }) {
  return (
    <div>
    <Container>
    <Card className="rounded">
        <Link to={`/products/${product._id}`}>
            <Card.Img style={{
                 width:'100%',
                 height:'10vw',
                 objectFit:'cover'
            }} className="rounded" src={product.image} />
        </Link>
    <Card.Body>
        <Card.Title>
            <h3>{product.name}</h3>
        </Card.Title>
        <Card.Subtitle><small className="text-muted">Genre: {product.category}</small></Card.Subtitle>
    <br/>
    <Link to={`products/${product._id}`}>
        <Row><Button><i class="fa fa-play" aria-hidden="true"></i> Watch</Button></Row>
    </Link>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">Last updated in (Time in seconds).</small>
    </Card.Footer>
    </Card>
    </Container>
    </div>
  )
}

export default DirectorProducts