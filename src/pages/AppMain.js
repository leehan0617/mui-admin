import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import menuList from "../constants/menuList";

const WrapperDiv = styled.div`
  margin-top: 40px;
  margin-bottom: 70px;
`;

const CustomNavigationAction = muiStyled(BottomNavigationAction)({
  "color": "#A7A7A7",
  "&.Mui-selected": {
    "color": "#333333"
  },
  "& .MuiBottomNavigationAction-label": {
    marginTop: "5px",
    color: "#A7A7A7",
    fontSize: "10px",
    fontWeight: 500
  },
  "& .MuiBottomNavigationAction-label.Mui-selected": {
    fontSize: "10px",
    color: "#333333"
  }
});

function AppMain() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { pathname } = location;
    const matchMenu = menuList.find(({ path }) => path === pathname);
    const { key: index } = matchMenu;
    setCurrentIndex(index);
  }, [location]);

  const menus = menuList.map((menu) => {
    const { key, name, path, icon } = menu;
    return (
      <CustomNavigationAction
        key={key}
        onClick={() => {
          navigate(path);
        }}
        label={name}
        icon={icon}
      />
    );
  });

  return (
    <WrapperDiv>
      <Outlet />
      <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
        <BottomNavigation showLabels value={currentIndex}>
          {menus}
        </BottomNavigation>
      </Paper>
    </WrapperDiv>
  );
}

export default AppMain;
