import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addTheme } from "../Actions/themeActions";
import { Link } from "react-router-dom";



function AddThemeScreen() {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");


  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const AddThemeInfo = async () => {
    let formField = new FormData();

    formField.append("name", name);
    formField.append("description", description);


    if (image !== null) {
      formField.append("image", image);
    }

    dispatch(addTheme(formField)).then((response) => {
      navigate("/");
    });
  };

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  if (!userInfo) {
    navigate("/login");
  } else {
    if (!userInfo.isAdmin) {
      navigate("/");
    }
  }
  return (
    <div>
      <br />
      <div class="text-center" variant="light">
        <h1>Add Theme</h1>
      </div>
      <Container>
        <Link className="btn btn-light my-3" to="/menulist">
          Go Back
        </Link>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              id="image"
              name="image"
              className="form-control"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              id="description"
              name="description"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Button className="btn btn-primary" onClick={AddThemeInfo}>
            Add Theme
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default AddThemeScreen;
