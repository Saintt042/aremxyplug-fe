import React from 'react'
import { Container } from './HomeStyle'
// import slant from "../../assets/slant.svg"

const Home = () => {
  return (
    <Container>
      <div className="container__wrapper">
      <section className="texts">
   <div>
      <h1 className='header'>The One-Stop Shop for individuals and Businesses for <span>Telecom, Payments and Digital Services.</span> </h1>

      <p>With AremxyPlug's robust APIs and software solutions intended to help you increase revenue, you can accept payments and transfer money internationally.</p>
    </div>

    <div className="btns">
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