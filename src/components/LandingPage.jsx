import { Button } from "react-bootstrap";

const LandingPage = () => {
  return (
    <div style={containerStyle}>
      <section>
        <h2>Welcome to Treebranch</h2>

        <break></break>

        <Button style={buttonStyle}>Login</Button>
        <Button style={buttonStyle}>Sign Up</Button>
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
