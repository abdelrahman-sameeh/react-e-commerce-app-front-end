import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../../Images/logo.png'
import login from '../../Images/login.png'
import cart from '../../Images/cart.png'
import '../../Style/Utility/navbar.css'

function NavbarLogin() {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <a href='/' > <img className='logo' src={logo} alt="" /></a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='d-flex flex1 gap-2'>
            <input className='form-control text-center' type="search" name="navbarSearch" placeholder='ابحث ...' />
            <a className='center text-light underline-none' href='/login' >
              <img className='w-20' src={login} alt="" />
              دخول
            </a>
            <a className='center text-light underline-none' href='/cart' >
              <img className='w-20' src={cart} alt="" />
              العربه
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarLogin