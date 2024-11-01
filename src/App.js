import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import TeamList from "./TeamList";
import { useSelector, useDispatch } from "react-redux";
import './App.css'

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="#">Team Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Team</Nav.Link>
            <Nav.Link href="#">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="container text-center mt-5">
        <h1>Counter Application with Redux</h1>
        <p className="display-4">{count}</p>
        <button
          className="btn btn-success mx-2"
          onClick={() => dispatch({ type: 'INCREMENT' })}
        >
            Increment
        </button>
        <button
          className="btn btn-danger mx-2"
          onClick={() => dispatch({ type: 'DECREMENT' })}
        >
            Decrement
        </button>
        <TeamList />
      </div>
    </>
  );
}

export default App;