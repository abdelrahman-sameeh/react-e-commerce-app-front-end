import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import logo from '../../Images/logo.png'
import login from '../../Images/login.png'
import cart from '../../Images/cart.png'
import '../../Style/Utility/navbar.css'
import NavbarSearchHook from '../../custom hook/search/navbar-search-hook'
import { useState } from 'react'
import { useEffect } from 'react'

function NavbarApp() {
  const [word, handleSearchByWord] = NavbarSearchHook()

  const [user, setUser] = useState('')


  useEffect(() => {
    if (localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user')))
    }
  }, [])


  const logout = () => {
    setUser('')
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <a href='/' > <img className='logo' src={logo} alt="" /></a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {
            (user) ?
              (<Nav className='d-flex flex1 gap-2'>
                <input value={word} onChange={handleSearchByWord} className='form-control text-center' type="search" name="navbarSearch" placeholder='ابحث ...' />
                <NavDropdown title={user.name} id="basic-nav-dropdown">
                  {
                    (user.role === 'admin')
                      ? (<NavDropdown.Item href="/admin/allProducts"> لوحة التحكم </NavDropdown.Item>)
                      : (<NavDropdown.Item href="/user/profile"> الصفحه الشخصيه </NavDropdown.Item>)
                  }

                  <NavDropdown.Item onClick={logout} href="/">
                    تسجيل الخروج
                  </NavDropdown.Item>
                </NavDropdown>
                {
                  (user.role === 'user') &&
                  <a href='/cart' style={{ textDecoration: 'none' }} className='center text-light underline-none'>
                    <img className='w-20' src={cart} alt="" />
                    العربه
                  </a>
                }
              </Nav>) : (<Nav className='d-flex flex1 gap-2'>
                <input value={word} onChange={handleSearchByWord} className='form-control text-center' type="search" name="navbarSearch" placeholder='ابحث ...' />
                <a href='/login' style={{ textDecoration: 'none' }} className='center text-light underline-none' >
                  <img className='w-20' src={login} alt="" />
                  دخول
                </a>
              </Nav>)
          }


        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarApp