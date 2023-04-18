import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 5% 50px;

  .container__wrapper .texts {
    margin-left: 60px;
    width: 40%;
  }
  .header {
    font-weight: 700;
    font-size: 35px;
    line-height: 44.28px;
  }
  p {
    font-weight: 500;
    font-size: 12px;
    line-height: 14.4px;
    margin-bottom: 20px;
    margin-top: 20px;
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
