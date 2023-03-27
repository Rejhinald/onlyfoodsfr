import React, { useEffect, useState } from 'react'
import { Row, Col, Image, ListGroup} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../Actions/productActions';

function MenuScreen() {
  const { id } = useParams();
  // const { _id } = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails)
  const {product} = productDetails
    useEffect(() => {
      dispatch(listProductDetails(id))
    }, [dispatch]);

  return (
    <div style={{textAlign: "left", marginLeft: "18%", marginRight: "18%", marginBottom: "10%", marginTop: "20px", fontSize: "16px"}}>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
        <Image style={{ width: "500px", height: "500px" }} src={product.image} alt={product.name} fluid />
          
        </Col>

        <Col md={5}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>{product.description}</ListGroup.Item>
            <ListGroup.Item>
            {product.genre}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}

export default MenuScreen;
