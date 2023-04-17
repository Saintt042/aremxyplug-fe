import React, { useRef } from 'react';
import { Container } from './NavbarStyle';
import navLogo from "../../assets/navbarLogo.svg"
import { NavLink } from 'react-router-dom';


const nav__links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "services",
    display: "Services",
  },
  {
    path: "About-us",
    display: "About Us",
  },
  {
    path: "pricing",
    display: "Pricing",
  },
  {
    path: "solutions",
    display: "Solutions",
  },
  {
    path: "faq",
    display: "FAQ",
  },
];


const Navbar = () => {

  const menuRef = useRef(null);

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");


  return (
    <Container>
        <div className="nav__wrapper">
        <div className='navigation' ref={menuRef} onClick={menuToggle}>
          <NavLink to="/">
            <h1><img src={navLogo} alt="logo" /></h1></NavLink>
          <ul className='menu'>
            {
              nav__links.map((item, index) => (
                <li className='nav__item' key={index}>
                  <NavLink to={item.path}
                  className={(navClass) =>
                  navClass.isActive ? "nav__active" : ""}>
                    {item.display}
                  </NavLink>
                </li>
              ))
            }
          
          </ul>

          <button id='contact__btn'>Contact Us</button>
        </div>
        </div>
    </Container>
  )
}

export default Navbar