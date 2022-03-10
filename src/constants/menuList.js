// deprecated
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const menuList = [
  {
    key: 0,
    name: "홈",
    icon: <FavoriteIcon />,
    path: "/",
  },
  {
    key: 1,
    name: "정산 관리",
    icon: <RestoreIcon />,
    path: "/settlement",
  },
  {
    key: 2,
    name: "주문 관리",
    icon: <LocationOnIcon />,
    path: "/order",
  },
  {
    key: 3,
    name: "매장 수정",
    icon: <LocationOnIcon />,
    path: "/manage",
  },
  {
    key: 4,
    name: "카카오 문의",
    icon: <LocationOnIcon />,
    path: "/kakao",
  },
];

export default menuList;
