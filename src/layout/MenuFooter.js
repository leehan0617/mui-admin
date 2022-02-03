import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function MenuFooter() {
    const [value, setValue] = useState(0);
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    }

    const goSample2 = () => {
        navigate("/sample2");
    }

    return (
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction onClick={goHome} label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction onClick={goSample2} label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Archive" icon={<LocationOnIcon />} />
            <BottomNavigationAction label="Archive" icon={<LocationOnIcon />} />
            <BottomNavigationAction label="Archive" icon={<LocationOnIcon />} />
          </BottomNavigation>
      </Paper>
    );  
}

export default MenuFooter;
