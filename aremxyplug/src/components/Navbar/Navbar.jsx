import React from 'react';
import { Container } from './NavbarStyle';
import navLogo from "../../assets/navbarLogo.svg"


const Navbar = () => {
  return (
    <Container>
        <div>
          <h1><img src={navLogo} alt="logo" /></h1>
        </div>
    </Container>
  )
}

export default Navbar