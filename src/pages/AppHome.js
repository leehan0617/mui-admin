import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import HomeTitle from "../component/home/HomeTitle";
import HomeIncome from "../component/home/HomeIncome";

const WrapperDiv = styled.div`
  margin-top: 40px;
`;

function AppHome() {
  return (
    <WrapperDiv>
      <HomeTitle />
      <HomeIncome />
    </WrapperDiv>
  );
}

export default AppHome;
