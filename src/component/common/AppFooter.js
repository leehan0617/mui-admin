import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import menuList from "../constants/menuList";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

function AppFooter() {
  const [value, setValue] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { pathname } = location;
    const matchMenu = menuList.find(({ path }) => path === pathname);
    const { key: index } = matchMenu;
    setValue(index);
  }, [location]);

  const menus = menuList.map((menu) => {
    const { key, name, path, icon } = menu;

    return (
      <BottomNavigationAction
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
    <Grid item xs={12}>
      <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation showLabels value={value}>
          {menus}
        </BottomNavigation>
      </Paper>
    </Grid>
  );
}

export default AppFooter;
