import React, { useEffect, useState } from 'react'
import { ListGroup, Col, Row, Button, Card, Image, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
// import axios from 'axios'
// import products from '../products'
// import '../App.css';
// import DirectorLink from '../Components/DirectorLink';
import { listProductDetails } from '../Actions/productActions';
import Message from '../Components/Message';

function Productscreen() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const productDetails = useSelector((state) => state.productDetails)
    const {product} = productDetails
      useEffect(() => {
        dispatch(listProductDetails(id))
      }, [dispatch]);
// let product = []
  return (
    <div>
        <br/>
        <Row>
            <Col md={2}>
            </Col>
            <Col md={3}>
                <Image style={{
                    width:'100%',
                    height:'100%',
                    maxWidth:970,
                    maxHeight:720,
                }} src={product.image} className="rounded"/>
            </Col>
            <Col md={3}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        {product.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
            <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h3>Director</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        {/* <DirectorLink /> */}
                       {/* <Link to={`/directorproducts/${directors._id}`}>{product.director}</Link> */}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h3>Genre</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    {product.rating} Stars from {product.numReviews} reviews
                    </ListGroup.Item>
                </ListGroup>
            </Col>
         </Row>
     
    
    
    </div>
  )
} 

export default Productscreen