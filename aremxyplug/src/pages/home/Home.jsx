import React from 'react'
import { Container } from './HomeStyle'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import Aboutus from '../../components/AboutUs/Aboutus'
import Dev from '../../components/Dev/Dev'
// import slant from "../../assets/slant.svg"

const Home = () => {
  return (
    <Container>
      <div className="container__wrapper">
      <section className="texts">
   <div>
      <h1 className='header'>The One-Stop Shop for individuals and Businesses for Telecom, Payments and Digital Services. </h1>

      <p className='para'>With AremxyPlug's robust APIs and software solutions intended to help you increase revenue, you can accept payments and transfer money internationally.</p>
      <div className="btn__sec">
      <button id="create__acctBtn">
        Create Account
      </button>
      <button id="sign__in">
        Sign up
      </button>
      </div>
    </div>

   
   </section>

   {/* <section className="photos">
    <img src={slant} alt="slant" />
   </section> */}
   <WhyChooseUs />
   <Aboutus />
   <Dev />
      </div>

      
    </Container>
  )
}

export default Home