import React, { useEffect, useState} from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import { Container, Row, Col, Carousel} from 'react-bootstrap';
import DirectorProducts from '../Components/DirectorProducts';

function DirectorProductsScreen() {
  const {id} = useParams()
  const [directorproduct, setDirectorProducts] = useState([])

  useEffect(() =>{
    async function fetchDirectorProducts(){
      const {data} = await axios.get(`/api/directorproducts/${id}`)
      setDirectorProducts(data);
    }
    fetchDirectorProducts()
  }, [])
  return (
    <div><br/>
    <div class='text-center' variant='light'>
    <h1>Director's Movies</h1>
    </div>
    <br/>
    <Container>
    <Row>
    {directorproduct.map(product => (
        <Col className='row g-1' key={product._id} sm={12} md={6} lg={4} xl={3}>
            <DirectorProducts product={product} />
        </Col>
    ))}
    </Row>
    </Container>
    </div>
  )
}

export default DirectorProductsScreen