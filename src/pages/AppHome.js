import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import { Avatar, ButtonBase, Grid } from "@mui/material";
import partnerLogo from "../image/partner_logo.svg";
import detailLogo from "../image/partner_detail.svg";

const WrapperDiv = styled.div`
  margin-top: 40px;
`;

const PartnerLogo = styled.img`
  float: left;
`
const ShopInfo = styled.div`
  position: relative;
  left: 12px;
`
const ShopTitleText = styled.div`
  position: relative;
  top: 2px;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #333333;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const ShopAddressText = styled.div`
  position: relative;
  top: 6px;
  color: #B4B4B4;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.02em;
`;

const DetailLogo = styled.img`
  cursor: pointer;
`;

const IncomeDiv = styled.div`
  margin-top: 32px;
  background: #DEF26A;
  border-radius: 10px;
`;

function AppHome() {
  return (
    <WrapperDiv>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <PartnerLogo alt="partner_logo" src={partnerLogo} />
          <ShopInfo>
            <ShopTitleText>레드텅 부티크 센텀점</ShopTitleText>
            <ShopAddressText>서울특별시 성동구 옥수동 291-9</ShopAddressText>  
          </ShopInfo>
        </Grid>
        <Grid item xs={2} sx={{ marginTop: "16px", textAlign: "right" }}><DetailLogo src={detailLogo} /></Grid>
      </Grid>
      <IncomeDiv>
        <p>총 수입</p>
        <p>오늘 픽업 수수료 수입</p>
        <p>80,000원</p>
      </IncomeDiv>
    </WrapperDiv>
  );
}

export default AppHome;