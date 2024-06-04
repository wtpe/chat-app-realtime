import { useContext } from "react";
import { Alert, Button, Col, Form, Row, Stack } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const {
    user,
    loginUser,
    loginError,
    loginInfo,
    isLoginLoading,
    updateLoginInfo,
  } = useContext(AuthContext);
  console.log('loginIn4',loginInfo)

  const navigate=useNavigate();
  const handle=()=>{
    if(user)
      return navigate('/');
  }
  return (
    <>
      <Form onSubmit={loginUser}>
        <Row
          style={{
            height: "100vh",
            justifyContent: "center",
            paddingTop: "10%",
          }}
        >
          <Col>
            <Stack gap={3}>
              <h2>Login</h2>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) =>
                  updateLoginInfo({ ...loginInfo, email: e.target.value })
                }
              />
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  updateLoginInfo({ ...loginInfo, password: e.target.value })
                }
              />
              
                <Button onClick={handle} variant="primary" type="submit"  >
                  
                  {isLoginLoading ? "Getting you in ..." : "Login"}
                </Button>
              
              {loginError?.error && (
                <Alert variant="danger">{loginError?.message}</Alert>
              )}
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
};
export default Login;
