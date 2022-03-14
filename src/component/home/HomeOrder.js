import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import { Button } from "@mui/material";

const Wrapper = styled.div`
  margin-top: 24px;
`;

const CustomOrderButton = muiStyled(Button)({});

const CustomSubscribeButton = muiStyled(Button)({});

function HomeOrder() {
  return (
    <Wrapper>
      <Button fullWidth={true} size="large" variant="outlined" color="primary">
        주문정보 관리
      </Button>
      <Button
        sx={{ marginTop: "10px" }}
        fullWidth={true}
        size="large"
        variant="outlined"
        color="secondary">
        구독인증 &gt;
      </Button>
    </Wrapper>
  );
}

export default HomeOrder;