import React, { useEffect, useState } from "react";
import { Table, Button, Form, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { listProducts, deleteProduct } from "../Actions/productActions";
import Loader from "../Components/Loader";
import Message from "../Components/Message";
import { useDispatch, useSelector } from "react-redux";
import DeletedProductScreen from "./DeletedProductScreen";

const ProductListScreen = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const [setProducts] = useState([]);
  const { error, loading, products } = productList;
  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;
  useEffect(() => {
    dispatch(listProducts());
  }, []);
  const userLogin = useSelector((state) => state.userLogin);
  let navigate = useNavigate();
  const { userInfo } = userLogin;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteProduct(id)).then((response) => {
        navigate("/deleted");
      });
    }
  };
  if (!userInfo) {
    navigate("/login");
  } else {
    if (!userInfo.isAdmin) {
      navigate("/");
    }
  }
  return (
    <div style={{ margin: "2% 15%" }}>
      <div className="text-center">
        <br />
        <br></br>
        <h3>Product Lists</h3>
        <br></br>
        <Form>
          <Row>
            <Col md={3} />
            <Col md={6}>
              <Form.Control
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="Search"
                className="me-1"
                aria-label="Search"
              />
            </Col>
          </Row>
        </Form>
        <br />
        <div class="container">
          <div class="row">
            <div class="row justify-content-center mt-10">
              <Link to="/addproduct" className="btn btn-primary">
                Add Product
              </Link>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div class="container">
        <div class="row">
          <div class="row justify-content-center mt-10">
            <Link to="/addcategory" className="btn btn-primary">
              Add Category
            </Link>
          </div>
        </div>
      </div>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Description</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <tbody>
            {products
              .filter((product) => {
                return (
                  search === "" ||
                  product.name.toLowerCase().includes(search.toLowerCase()) ||
                  product.description
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  product.genre.toLowerCase().includes(search.toLowerCase())
                );
              })
              .map((product) => {
                return (
                  <tr key="">
                    <td>{product.name}</td>
                    <td>
                      <img
                        className="rounded"
                        src={product.image}
                        width="400"
                        height="250"
                      />
                    </td>
                    <td>{product.description}</td>
                    <td>{product.genre}</td>
                    <td>
                      <div class="d-grid gap-1">
                        <Button
                          variant="danger"
                          className="btn-md"
                          onClick={() => deleteHandler(product._id)}
                        >
                          <i className="fas fa-trash"></i>
                        </Button>
                        {/* <Button variant='primary' className='btn-md'>
                        <i className='fas fa-edit'></i>
                      </Button> */}
                        <LinkContainer to={`/editproduct/${product._id}`}>
                          <Button variant="light" className="btn-sm">
                            <i className="fas fa-edit"></i>
                          </Button>
                        </LinkContainer>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        )}
      </Table>
    </div>
  );
};

export default ProductListScreen;
