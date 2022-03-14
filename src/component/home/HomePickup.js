import styled from "styled-components";
import { Grid, Button } from "@mui/material";
import { ReactComponent as RightArrow } from "../../image/right_arrow.svg";

const Wrapper = styled.div`
  margin-top: 46px;
  margin-bottom: 25px;
`;

const PickupText = styled.span`
  font-weight: 700;
  font-size: 17px;
  line-height: 23px;
`
const PickupWineText = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: #333333;
`;

const PickupUserText = styled.p`
  margin-top: 2px;
  font-size: 15px;
  line-height: 22px;
  color: #ABABAB;
  font-weight: 500;
`;

const orderButtonSx = {
  paddingTop: "8px",
  paddingBottom: "8px",
  border: "1.2px solid #7ECD19",
  borderRadius: "8px",
  fontWeight: 700
};

const pickupButtonSx = {
  paddingTop: "8px",
  paddingBottom: "8px",
  border: "1.2px solid #ECFAD7",
  borderRadius: "8px",
  fontWeight: 700,
  background: "#ECFAD7"
};

function HomePickup() {
  return (
    <Wrapper>
      <Grid container spacing={2} sx={{ marginBottom: "10px" }}>
        <Grid item xs={10} sx={{ marginBottom: "32px" }}>
          <PickupText>픽업 예정 주문</PickupText>
        </Grid>
        <Grid item xs={2} sx={{ textAlign: "right" }}>
          <RightArrow />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={8} sx={{ marginBottom: "32px" }}>
          <PickupWineText>콩스가르드 샤도네이 2018 외 1개</PickupWineText>
          <PickupUserText>이준영(joon8914)</PickupUserText>
        </Grid>
        <Grid item xs={4} sx={{ textAlign: "right" }}>
          <Button size="large" color="primary" variant="outlined" sx={orderButtonSx}>
            배송 완료
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={8} sx={{ marginBottom: "32px" }}>
          <PickupWineText>콩스가르드 샤도네이 2018 외 1개</PickupWineText>
          <PickupUserText>박예흠(yeheumi))</PickupUserText>
        </Grid>
        <Grid item xs={4} sx={{ textAlign: "right" }}>
          <Button size="large" color="primary" variant="outlined" sx={pickupButtonSx}>
            픽업 완료
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={8} sx={{ marginBottom: "32px" }}>
          <PickupWineText>콩스가르드 샤도네이 2018 외 1개</PickupWineText>
          <PickupUserText>박예흠(yeheumi))</PickupUserText>
        </Grid>
        <Grid item xs={4} sx={{ textAlign: "right" }}>
          <Button size="large" color="primary" variant="outlined" sx={pickupButtonSx}>
            픽업 완료
          </Button>
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default HomePickup;
