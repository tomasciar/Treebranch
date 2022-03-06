const HomePage = () => {
  return (
    <div style={containerStyle}>
      <section>
        <h2>Welcome, Name!</h2>

        <break></break>

        <h3>Today</h3>

        <break></break>

        <div style={taskStyle}>Text</div>

        <break></break>

        <div style={weekStyle}></div>
      </section>
    </div>
  );
};

export default HomePage;

const containerStyle = {
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center"
};

const taskStyle = {
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  margin: "20px",
  backgroundColor: "rgb(90, 189, 99)",
  height: "10vh",
  width: "70vw"
};

const weekStyle = {
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  margin: "20px",
  backgroundColor: "rgb(90, 189, 99)",
  height: "40vh",
  width: "20vw"
};
