import React, { useEffect, useState } from "react";
import { Table, Button, Form, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { listThemes, deleteTheme } from "../Actions/themeActions";
import Loader from "../Components/Loader";
import Message from "../Components/Message";
import { useDispatch, useSelector } from "react-redux";
import DeletedThemeScreen from "./DeletedThemeScreen";

const ThemeListScreen = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const themeList = useSelector((state) => state.themeList);
  const [setTheme] = useState([]);
  const { error, loading, themes } = themeList;
  const themeDelete = useSelector((state) => state.themeDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = themeDelete;
  useEffect(() => {
    dispatch(listThemes());
  }, []);
  const userLogin = useSelector((state) => state.userLogin);
  let navigate = useNavigate();
  const { userInfo } = userLogin;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this theme?")) {
      dispatch(deleteTheme(id)).then((response) => {
        navigate("/deleted2");
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
        <h3>Theme Lists</h3>
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
              <Link to="/addtheme" className="btn btn-primary">
                Add Theme
              </Link>
            </div>
          </div>
        </div>
      </div>
      <br></br>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <tbody>
            {themes
              .filter((theme) => {
                return (
                  search === "" ||
                  theme.name.toLowerCase().includes(search.toLowerCase()) ||
                  theme.description
                    .toLowerCase()
                    .includes(search.toLowerCase())
                );
              })
              .map((theme) => {
                return (
                  <tr key="">
                    <td>{theme.name}</td>
                    <td>
                      <img
                        className="rounded"
                        src={theme.image}
                        width="400"
                        height="250"
                      />
                    </td>
                    <td>{theme.description}</td>
                    <td>{theme.genre}</td>
                    <td>
                      <div class="d-grid gap-1">
                        <Button
                          variant="danger"
                          className="btn-md"
                          onClick={() => deleteHandler(theme._id)}
                        >
                          <i className="fas fa-trash"></i>
                        </Button>
                        {/* <Button variant='primary' className='btn-md'>
                        <i className='fas fa-edit'></i>
                      </Button> */}
                        <LinkContainer to={`/edittheme/${theme._id}`}>
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

export default ThemeListScreen;
