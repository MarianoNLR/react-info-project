import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
       <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React
          </Navbar.Brand>
      </Navbar>
    </>
  )
}

export default Header