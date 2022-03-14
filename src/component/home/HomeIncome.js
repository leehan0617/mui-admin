import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import { Card, CardHeader, CardContent, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LiquorIcon from "@mui/icons-material/Liquor";

const CardContentTitle = styled.p`
  font-weight: 600;
  text-align: center;
`;
const CardContentPrice = styled.p`
  text-align: center;
  margin-top: 25px;
  font-size: 2rem;
  font-weight: 600;
`;

const CustomCardHeader = muiStyled(CardHeader)({
  "& .MuiCardHeader-title": {
    marginTop: "4px",
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
        background: "#def26a",
        marginTop: "32px",
        borderRadius: "10px",
        paddingBottom: "50px",
      }}>
      <CustomCardHeader
        avatar={<LiquorIcon />}
        title="총 수입"
        action={
          <IconButton aria-label="settings">
            <ArrowForwardIosIcon />
          </IconButton>
        }
      />
      <CardContent>
        <CardContentTitle>오늘 픽업 수수료 수입</CardContentTitle>
        <CardContentPrice>80,000원</CardContentPrice>
      </CardContent>
    </Card>
  );
}

export default HomeIncome;
