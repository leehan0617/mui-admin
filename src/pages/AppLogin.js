import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import { ReactComponent as Logo } from "../image/login_logo.svg";
import { Stack } from "@mui/material";
import { TextField } from "@mui/material";

const WrapperDiv = styled.div`
  margin-top: 76px;
`;

const HelloText = styled.p`
  margin-top: 21px;
  font-size: 25px;
  line-height: 36px;
  font-weight: 500;
  color: #333333;
`;

const SubText = styled.p`
  margin-top: 19px;
  margin-bottom: 47px;
  letter-spacing: -0.02em;
  font-weight: 500;
  font-size: 12px;
  color: #ABABAB;
`;

const CssTextField = muiStyled(TextField)({
  '& label.Mui-focused': {
    color: "#7ECD19",
  },
  '& .MuiInput-root': {
    paddingBottom: "5px"
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: "#ECECEC",
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: "#7ECD19",
  }
});

function AppLogin() {
  return (
    <WrapperDiv>
      <Stack>
        <Logo></Logo>
        <HelloText>
          안녕하세요.<br />
          렛츠와인입니다.
        </HelloText>
        <SubText>
          페어링 파트너 관리 서비스 이용을 위해 로그인 해주세요.
        </SubText>
        <CssTextField placeholder="아이디" type="search" variant="standard" />
        <CssTextField placeholder="비밀번호" type="password" variant="standard" />
      </Stack>
    </WrapperDiv>
  );
}

export default AppLogin;
