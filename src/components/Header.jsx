import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar className="position-fluid top-0 w-100" style={{background:'#67f0d4', zIndex:1}}>
        <Container>
            <Link to={'/'} style={{textDecoration:'none'}}>
          <Navbar.Brand>
            
          <i className="fa-solid fa-prescription fa-bounce"></i>
            {' '}
            Project Fair
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
  )
}

export default Header