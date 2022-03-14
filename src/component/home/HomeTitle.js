import { useState } from "react";
import styled from "styled-components";
import { Menu, MenuItem, Grid } from "@mui/material";
import partnerLogo from "../../image/partner_logo.svg";
import detailLogo from "../../image/partner_detail.svg";

const PartnerLogo = styled.img`
  float: left;
`;
const ShopInfo = styled.div`
  position: relative;
  left: 12px;
`;
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
  color: #b4b4b4;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.02em;
`;

const DetailLogo = styled.img`
  cursor: pointer;
`;

function HomeTitle() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const openMoreMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMoreMenu = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    console.log("TODO logout");
    closeMoreMenu();
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={10}>
        <PartnerLogo alt="partner_logo" src={partnerLogo} />
        <ShopInfo>
          <ShopTitleText>레드텅 부티크 센텀점</ShopTitleText>
          <ShopAddressText>서울특별시 성동구 옥수동 291-9</ShopAddressText>
        </ShopInfo>
      </Grid>
      <Grid item xs={2} sx={{ marginTop: "16px", textAlign: "right" }}>
        <DetailLogo id="detail-logo" src={detailLogo} onClick={openMoreMenu} />
        <Menu
          id="more_menu"
          anchorEl={anchorEl}
          open={open}
          onClose={closeMoreMenu}
          MenuListProps={{
            "aria-labelledby": "detail-logo",
          }}>
          <MenuItem onClick={closeMoreMenu}>Profile</MenuItem>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>
      </Grid>
    </Grid>
  );
}

export default HomeTitle;
