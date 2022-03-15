import styled from "styled-components";
import { Button } from "@mui/material";
import { ReactComponent as RightArrow } from "../../image/right_arrow.svg";

const Wrapper = styled.div`
  margin-top: 16px;
`;

function HomeOrder() {
  const orderSx = {
    paddingTop: "16px",
    paddingBottom: "16px",
    border: "1.2px solid #7ECD19",
    borderRadius: "8px",
    fontWeight: 700
  };

  const subscribeSx = {
    marginTop: "8px",
    paddingTop: "16px",
    paddingBottom: "16px",
    border: "1.2px solid #DCDCDC",
    borderRadius: "8px",
    fontWeight: 700
  };

  return (
    <Wrapper>
      <Button fullWidth={true} size="large" variant="outlined" color="primary" sx={orderSx}>
        주문 관리
      </Button>
      <Button
        sx={subscribeSx}
        fullWidth={true}
        size="large"
        variant="outlined"
        color="secondary">
        구독 인증하기
      </Button>
    </Wrapper>
  );
}

export default HomeOrder;
