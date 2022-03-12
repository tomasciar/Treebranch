import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const LandingPage = () => {
  return (
    <div style={containerStyle}>
      <section>
        <h2>Welcome to Treebranch</h2>

        <break></break>

        <Link to="/login"><Button style={buttonStyle}>Login</Button></Link>
        <Link to="/signup"><Button style={buttonStyle}>Sign Up</Button></Link>
      </section>
    </div>
  );
};

export default LandingPage;

const containerStyle = {
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center"
};

const buttonStyle = {
  width: "100px",
  backgroundColor: "rgb(90, 189, 99)",
  border: "none",
  margin: "10px"
};
