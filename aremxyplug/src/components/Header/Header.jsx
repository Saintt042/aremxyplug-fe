import React from 'react';
import { Container } from './HeaderStyle';
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
   <Container>
    <div> <Navbar /> </div>
   </Container>
  )
}

export default Header