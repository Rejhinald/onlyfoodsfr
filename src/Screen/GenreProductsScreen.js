import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Carousel, Form } from "react-bootstrap";
import { listGenreMovies } from "../Actions/genreActions";

function GenreProductsScreen() {
  const [search, setSearch] = useState("");
  const { id } = useParams();
  const [genreproduct, setGenreProducts] = useState([]);
  const userLogin = useSelector((state) => state.userLogin);
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const { userInfo } = userLogin;
  const genreMovies = useSelector((state) => state.genreMovies);
  const { genreproducts1 } = genreMovies;

  if (!userInfo) {
    navigate("/login");
  } else {
    if (!userInfo.isSubscriber) {
      navigate("/plans");
    }
  }
  useEffect(() => {
    async function fetchGenreProducts() {
      const { data } = await axios.get(`/api/genreproducts/${id}`);
      setGenreProducts(data);
    }
    fetchGenreProducts();
  }, []);

  return (
    <div style={{ margin: "2% 15%" }}>
      <br />
      <div class="text-center" variant="light">
        <h1>Category's Products</h1>
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
      </div>
      <br />
      <Container fluid>
        <Row>
          {genreproduct
            .filter((product) => {
              return search.toLowerCase() === ""
                ? product
                : product.name.toLowerCase().includes(search) ||
                    product.description.toLowerCase().includes(search) ||
                    product.genre.toLowerCase().includes(search);
            })
            .map((product) => (
              <Col md={3} key={product._id}>
                <Link to={`/products/${product._id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="img-fluid"
                  />
                  <h4>{product.name}</h4>
                </Link>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}

export default GenreProductsScreen;
