import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Home from './Home';
import TeamList from './TeamList';
import Counter from './Counter';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="#">Team Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/team">Team</Nav.Link>
            <Nav.Link as={Link} to="/counter">Counter</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className='app-constainer'>
        <div className="container text-center mt-5">
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<TeamList />} />
          <Route path="/counter" element={<Counter />} />
         </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
