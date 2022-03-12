import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div style={containerStyle}>
      <Container>
        <Row>
          <Col><h2>Welcome to Treebranch</h2></Col>
          <Col xs={6}>
          <Form className="">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button style={buttonStyle} type="submit">
              Sign Up
            </Button>
          </Form>
          <p style={centerAlign}>Already have an account?<br/><Link to="/login">Login</Link></p>
          
          </Col>
        </Row>
      </Container>
    
    </div>
  );
};

export default SignUp;

const containerStyle = {
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
};

const buttonStyle = {
  width: "100%",
  backgroundColor: "rgb(90, 189, 99)",
  border: "none",
  margin: "20px 0"
  
};

const centerAlign = {
  textAlign: "center"
}



