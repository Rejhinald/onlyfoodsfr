// import axios from 'axios'
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addProduct, editProduct, listProductDetails } from "../Actions/productActions";
import { Link, useParams } from "react-router-dom";
import { listGenres } from "../Actions/genreActions";

function EditProductScreen() {
    const { id } = useParams();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const AddProductInfo = async () => {
        let formField = new FormData();

        formField.append("name", name);
        formField.append("description", description);
        formField.append("genre", genre);

        if (image !== null) {
            formField.append("image", image);
        }

        dispatch(editProduct(id, formField)).then((response) => {
            navigate("/menulist");
        });
    };

    const genreList = useSelector((state) => state.genreList);
    const { genres } = genreList;
    useEffect(() => {
        dispatch(listGenres());
        setGenre(genres)
    }, []);

    const productDetails = useSelector((state) => state.productDetails);
    const { product } = productDetails;
    useEffect(() => {
        dispatch(listProductDetails(id));
    }, [dispatch]);

    const [name, setName] = useState("");
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState("");
    const [genre, setGenre] = useState("");

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
                <h1>Edit Movie Info</h1>
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
                    <Form.Group className="mb-3">
                        <Form.Label>Genre #1</Form.Label>
                        <Form.Control
                            as="select"
                            className="form-control"
                            placeholder="Please Select"
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                        >
                            <option value="">-- Please select --</option>
                            {genres.map((item) => (
                                <option key={item._id} value={item._id}>
                                    {item.name}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Button className="btn btn-primary" onClick={AddProductInfo}>
                        Add Product
                    </Button>
                </Form>
            </Container>
        </div>
    );
}

export default EditProductScreen;
