import { Navbar } from "react-bootstrap";

const Nav = () => {
  return (
    <Navbar style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>Add New Personal To-Do</li>
        <li style={liStyle}>Join New Group</li>
        <li style={liStyle}>Profile</li>
      </ul>
    </Navbar>
  );
};

export default Nav;

const navStyle = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  backgroundColor: "rgb(90, 189, 99)",
  color: "white"
};

const ulStyle = {
  display: "inline-flex",
  listStyle: "none"
};

const liStyle = {
  margin: "10px 40px 0 0",
  cursor: "pointer"
};
