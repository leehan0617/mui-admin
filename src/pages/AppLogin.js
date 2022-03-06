import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import { ReactComponent as Logo } from "../image/login_logo.svg";
import { Stack, TextField, Checkbox, FormGroup, FormControlLabel, Button } from "@mui/material";

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
    paddingBottom: "5px",
    letterSpacing: 0
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: "#ECECEC",
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: "#7ECD19",
  }
});

const CssFormControlLabel = muiStyled(FormControlLabel)({
  "& .MuiFormControlLabel-label": {
    fontSize: "13px",
    marginLeft: "-5px"
  }
});

const loginBtnSx = {
  mt: 5,
  mb: 3,
  pt: 2,
  pb: 2,
  borderRadius: "8px",
  fontSize: "15px",
  fontWeight: 700,
  color: "#333333",
  backgroundColor: "#DDEF75",
  borderColor: "#DDEF75",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "#DDEF75",
    borderColor: "#DDEF75",
    boxShadow: "none"
  }
}

const FooterText = styled.span`
  color: #ABABAB;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.02em;
`;

const FooterLinkText = styled.a`
  color: #95AE13;
  font-size: 13px;
  font-weight: 700;
`;

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
        <FormGroup sx={{ mt: 2 }}>
          <CssFormControlLabel control={<Checkbox sx={{ color: "#DCDCDC", "&.Mui-checked": { color: "#DDEF75" } }} 
            size="small" />} 
            label="아이디 저장"
          />
        </FormGroup>
        <Button sx={loginBtnSx} variant="contained" size="large">로그인하기</Button>
        <FooterText>렛츠와인 페어링 파트너가 궁금하신가요? <FooterLinkText href="https://naver.com" target="_blank">등록 문의하기</FooterLinkText></FooterText>
      </Stack>
    </WrapperDiv>
  );
}

export default AppLogin;
