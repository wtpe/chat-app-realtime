import { Alert, Button, Col, Form, Row, Stack } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { useContext, } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const {
    user,
    registerInfo,
    updateRegisterInfo,
    registerUser,
    registerError,
    isRegisterLoading,
  } = useContext(AuthContext);

    
  const navigate=useNavigate();
  const handle=()=>{
    if(user)
      return navigate('/');
  }
  return (
    <>
      <Form onSubmit={registerUser}>
        <Row
          style={{
            height: "100vh",
            justifyContent: "center",
            paddingTop: "10%",
          }}
        >
          <Col>
            <Stack gap={3}>
              <h2>Register</h2>

              <Form.Control
                type="text"
                placeholder="Name"
                onChange={(e) =>
                  updateRegisterInfo({ ...registerInfo, name: e.target.value })
                }
              />
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  updateRegisterInfo({
                    ...registerInfo,
                    email: e.target.value,
                  });
                }}
              />
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  updateRegisterInfo({
                    ...registerInfo,
                    password: e.target.value,
                  });
                }}
              />
              <Link to="/login">Return login</Link>
              <Button variant="primary" type="submit" onClick={handle}>
                {isRegisterLoading ? "Creating your account" : "Register"}
              </Button>
              {registerError?.error && (
                <Alert variant="danger">{registerError?.message}</Alert>
              )}
              {isRegisterLoading && (
                <Alert variant="success">Created account successful !</Alert>
              )}
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
};
export default Register;
