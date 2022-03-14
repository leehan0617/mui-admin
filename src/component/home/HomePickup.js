import styled from "styled-components";
import { Grid, Button } from "@mui/material";

const Wrapper = styled.div`
  margin-top: 24px;
`;

function HomePickup() {
  return (
    <Wrapper>
      <Grid container spacing={2} sx={{ marginBottom: "16px" }}>
        <Grid item xs={10} sx={{ fontSize: "1.25rem", marginBottom: "20px" }}>
          픽업 예정 주문
        </Grid>
        <Grid item xs={2} sx={{ textAlign: "right", fontSize: "1.25rem" }}>
          &gt;
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={8} sx={{ marginBottom: "30px" }}>
          <p>콩스가르드 샤도네이 2018 외 1개</p>
          <p>이준영(joon8914)</p>
        </Grid>
        <Grid item xs={4} sx={{ textAlign: "right" }}>
          <Button size="large" color="primary" variant="outlined">
            배송 완료
          </Button>
        </Grid>
        <Grid item xs={8} sx={{ marginBottom: "30px" }}>
          <p>콩스가르드 샤도네이 2018 외 1개</p>
          <p>이준영(joon8914)</p>
        </Grid>
        <Grid item xs={4} sx={{ textAlign: "right" }}>
          <Button size="large" color="primary" variant="outlined">
            픽업 완료
          </Button>
        </Grid>
        <Grid item xs={8} sx={{ marginBottom: "30px" }}>
          <p>콩스가르드 샤도네이 2018 외 1개</p>
          <p>이준영(joon8914)</p>
        </Grid>
        <Grid item xs={4} sx={{ textAlign: "right" }}>
          <Button size="large" color="primary" variant="outlined">
            픽업 완료
          </Button>
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default HomePickup;
