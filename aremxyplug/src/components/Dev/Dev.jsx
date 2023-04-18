import React from 'react'
import { Container } from './DevStyles';
import CodeAnimation from './Code';

const Dev = () => {
  return (
    <Container>
       <div className="dev__wrapper">
     <div className="text__area">
     <h1 className="header">
        Are you a Developer?
      </h1>
      <p className="header__text">
      The AremxyPlug API offers robust and comprehensive functionality that developers can use to build high-quality applications with several features, such as data access, integration with third-party services, and custom workflows. Our API is well-documented and it provides clear instructions for integration and usage, with easy-to-use integration with your existing workflows. 

      </p>
      <p className='header__text'>
         
With our API service, we provide comprehensive support to developers and help build a thriving ecosystem around your product.
      </p>
    <h1 className="api__text">
    A Well Documented Easy-to-use API
    </h1>
     </div>
      <div className="image__file">
        <CodeAnimation />
      </div>
    </div>
    </Container>
  )
}

export default Dev