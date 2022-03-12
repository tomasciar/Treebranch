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

        <div style={taskOverviewStyle}> 
          <div style={weekStyle}></div>

          <div style={calendarStyle}>
            <h3>
              <span>◄</span>{" "}
              <span id="month">March</span>{" "}
              <span id="year">2022</span>{" "}
              <span>►</span>
            </h3>  
          </div>
        </div>
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
  margin: "0px 20px",
  backgroundColor: "rgb(90, 189, 99)",
  height: "10vh",
  width: "71vw"
};

const taskOverviewStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
};

const weekStyle = {
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  margin: "20px 10px",
  backgroundColor: "rgb(90, 189, 99)",
  height: "40vh",
  width: "20vw"
};

const calendarStyle = {
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  textAlign: "center",
  margin: "20px 10px",
  paddingTop: 20,
  color: '#fff',
  backgroundColor: "rgb(90, 189, 99)",
  height: "40vh",
  width: "50vw"
};
