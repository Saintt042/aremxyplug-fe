import React from 'react'
import { Container } from './HomeStyle'
// import slant from "../../assets/slant.svg"

const Home = () => {
  return (
    <Container>
      <div className="container__wrapper">
      <section className="texts">
   <div>
      <h1 className='header'>The One-Stop Shop <br /> for individuals and <br />Businesses for <br />Telecom, Payments <br />and Digital Services. </h1>

      <p className='para'>With AremxyPlug's robust APIs and software solutions intended<br /> to help you increase revenue, you can accept payments and <br />transfer money internationally.</p>
      <button id="create__acctBtn">
        Create Account
      </button>
      <button id="sign__in">
        Sign in
      </button>
    </div>

   
   </section>

   {/* <section className="photos">
    <img src={slant} alt="slant" />
   </section> */}
      </div>
    </Container>
  )
}

export default Home