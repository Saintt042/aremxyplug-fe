import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 156.16px;
  margin-bottom: 220px;
//   padding: 5% 50px;

  .container__wrapper .texts {
    margin-left: 120px;
    // width: 40%;
  }
  .header {
    font-weight: 700;
    font-size: 45px;
    line-height: 62.78px;
    width: 663px;
  }
  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 25.92px;
    margin-bottom: 55px;
    margin-top: 41px;
    width: 515px;
  }
  .btn__sec {
    margin-bottom: 220px;
  }
  .btns {
    // background: red;
    display: flex;
    justify-content: space-between;
  }

  #sign__in {
    margin-left: 30px;
  }

  #create__acctBtn,
  #sign__in {
    border-radius: 8px;
    padding: 15px 37px 15px 37px;
    gap: 10px;
    font-size: 14px;
    font-weight: 700;
    background: var(--primary-color);
    color: #fff;
    border: none;
  }
`;
