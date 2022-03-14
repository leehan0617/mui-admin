import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import { Card, CardHeader, CardContent, IconButton } from "@mui/material";
import { ReactComponent as HomeLogo } from "../../image/home_icon.svg";
import { ReactComponent as RightArrow } from "../../image/right_arrow.svg";

const CardContentTitle = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: #333333;
  text-align: center;
`;
const CardContentPrice = styled.p`
  text-align: center;
  margin-top: 10px;
  font-size: 30px;
  font-weight: 700;
  color: #333333;
  line-height: 33px;
`;

const CardContentPriceWon = styled.span`
  font-size: 26px;
  font-weight: 500;
`;

const CustomCardHeader = muiStyled(CardHeader)({
  "& .MuiCardHeader-title": {
    fontSize: "1rem",
    fontWeight: 600,
  },
  "& .MuiCardHeader-avatar": {
    marginRight: "10px",
  },
});

function HomeIncome() {
  return (
    <Card
      sx={{
        background: "#D5EC51",
        marginTop: "32px",
        borderRadius: "10px",
        paddingBottom: "34px",
        boxShadow: 0
      }}>
      <CustomCardHeader
        sx={{ paddingBottom: "11px" }}
        avatar={<HomeLogo />}
        title="총 수입"
        action={
          <IconButton aria-label="settings">
            <RightArrow />
          </IconButton>
        }
      />
      <CardContent>
        <CardContentTitle>오늘 픽업 수수료 수입</CardContentTitle>
        <CardContentPrice>80,000<CardContentPriceWon>원</CardContentPriceWon></CardContentPrice>
      </CardContent>
    </Card>
  );
}

export default HomeIncome;
