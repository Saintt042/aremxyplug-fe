import styled from "styled-components";

export const Container = styled.nav`
  max-width: 1453px;
  // margin: 0 auto;
  padding: 0 90px;
  height: 8rem;
  line-height: 90px;

  .nav__wrapper {
    margin-top: 66.93px;
  }
  .nav__wrapper .navigation {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .menu {
    display: flex;
    align-items: center;
    column-gap: 2.7rem;
    margin-bottom: 0;
  }

  .nav__item a {
    color: var(--navbar-color);
    font-size: 19.53px;
    font-weight: 700;
    cursor: pointer;
  }

  #contact__btn {
    font-size: 12.66px;
    font-weight: 700;
    cursor: pointer;
    padding: 14px 33px 14px 33px;
    border-radius: 7.23px;
    border: none;
    background: var(--primary-color);
    color: #fff;
  }

  @media only screen and (max-width: 768px) {
    .active__menu {
      display: block;
    }
  }
`;
