import styled from "styled-components";

export const Container = styled.div`
  background: var(--primary-color);
  margin: 0 auto;
  padding: 5% 50px;
  color: #ffffff;

  // .footer__wrapper {
  // }

  .aremxyplug,
  .product,
  .solutions,
  .resources,
  .developer,
  img {
    margin: 25px;
    line-height: 30px;
  }

  .product,
  .solutions,
  .resources,
  .developer {
    margin-right: 5.5rem;
  }

  

  h3 {
    font-size: 25px;
  }

  .socials, 
  .download { 
    font-size: 32px;
    font-weight: 500;
  }

  .social__links,
  .links {
    width: 50%;
    // display: flex;
  }
  .social__links {
    margin-right: 12rem;
  }

  .contact__wrapper {
    display: flex;
    // border: 2px solid red;
  }

  .contact__wrapper .links span {
    // border: 1px solid red;
    font-size: 31.25px;
    color: #CDD1E5;
    margin-right: 50px;
  }

  .footer__wrapper .text__wrapper {
    display: flex;
    flex-direction: row;
  }

  #copyright {
    text-align: center;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #ded8d7;
  }
`;
