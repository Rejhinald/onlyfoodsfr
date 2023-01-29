import React, { useEffect, useState} from 'react'
import { Container, Row, Col, Carousel} from 'react-bootstrap';
import Product from '../Components/Product';
import Slider from '../Components/Carousel';
// import axios from 'axios';
// import products from '../products'
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../Actions/productActions';
import Loader from '../Components/Loader';
import Message from '../Components/Message';

function HomeScreen() {
  // const [products, setProducts] = useState([])
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const { error, loading, products } = productList
  useEffect(() =>{
    dispatch(listProducts())
  }, [])
  // const products = []
  return (
    <div>
    <Slider />
    <br/>
    <Container>
    <div class='text-center' variant='light'>
    <h1>Latest Movies</h1>
    </div>
    {loading ? (
      <Loader />
    ) : error ? (
      <Message variant='danger'>{error}</Message>
    ) : (
      <Row>
    {products.map(product => (
        <Col className='row g-1' key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
        </Col>
    ))}
      </Row>
    )}
    </Container>
    
    </div>
    
  );
} 

export default HomeScreen;