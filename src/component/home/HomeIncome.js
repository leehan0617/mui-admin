import styled from "styled-components";

const IncomeDiv = styled.div`
  margin-top: 32px;
  background: #DEF26A;
  border-radius: 10px;
`;

function HomeIncome() {
  return (
    <IncomeDiv>
      <p>총 수입</p>
      <p>오늘 픽업 수수료 수입</p>
      <p>80,000원</p>
    </IncomeDiv>
  );
}

export default HomeIncome;
