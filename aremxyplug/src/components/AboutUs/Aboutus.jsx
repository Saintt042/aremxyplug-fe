import React from 'react';
import { Container } from './AboutusStyle';
import xxx from "../../assets/aboutusPic.svg";

const Aboutus = () => {
  return (
    <Container>
    <div className="about__wrapper">
     <div className="text__area">
     <h1 className="header">
        About Us
      </h1>
      <p className="header__text">
        AremxyPlug is a business enterprise and telecommunication service provider that offers individuals and businesses full access to quick, secure and dependable solutions for their digital and telecommunication service needs.
      </p>
      <p className='header__text'>
        At AremxyPlug, we provide seamless and limitless digital living needs to our users. Our objectives are to operate transparent and secure transactions, provide quick and dependable services and to ensure that our services take our customers to the pinnacle of their aspirations in order to be the best service provider.
      </p>
      <button className="learn__more">
        Learn More
      </button>
     </div>
      <div className="image__file">
        <img src={xxx} alt="logo" />
      </div>
    </div>
    </Container>
  )
}

export default Aboutus