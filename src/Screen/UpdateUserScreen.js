import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { updateUserInfo } from "../Actions/accountActions";

function UpdateUserScreen() {

  const { id } = useParams();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [postalCode, setPostalCode] = useState("");

  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { users } = userList;

  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      if (!userInfo.isAdmin) {
        navigate("/");
      }
    }
  }, [navigate, userInfo]);

  const UpdateUserInfo = async () => {
    let formField = new FormData();
    formField.append("email", email);
    formField.append("password", password);
    formField.append("first_name", first_name);
    formField.append("last_name", last_name);
    formField.append("address", address);
    formField.append("city", city);
    formField.append("region", region);
    formField.append("postal_code", postalCode);

    dispatch(updateUserInfo(id, formField)).then((response) => {
      navigate("/userlist");
    });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      UpdateUserInfo();
    }
  };
  
  return (
    <div>
      <br />
      <div class="text-center">
        <h1>Update Profile</h1>
      </div>
      <div class="container">
        <div class="row">
          <div class="row justify-content-center mt-5">
            <div class="col-sm-6 col-12">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group onSubmit={handleSubmit} className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <br />
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                  <br />
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>First Name</Form.Label>
                  <br />
                  <Form.Control
                    type="text"
                    value={first_name}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={last_name}
                    value={last_name}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Address</Form.Label>
                  <br />
                  <Form.Control
                    type="text"
                    placeholder={address}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={city}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Region</Form.Label>
                  <br />
                  <Form.Control
                    type="text"
                    placeholder={region}
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Postal Code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={postalCode}
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </Form.Group>
              </Form.Group>
                <div class="text-center">
                  <Button
                    type="submit"
                    onClick={handleSubmit}
                    variant="primary"
                  >
                    Submit
                  </Button>
                  <br />
                  <br />
                  <h4>{error && <div>{error}</div>}</h4>
                </div>
                <br />
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateUserScreen;
