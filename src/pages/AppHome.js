import HomeTitle from "../component/home/HomeTitle";
import HomeIncome from "../component/home/HomeIncome";
import HomeOrder from "../component/home/HomeOrder";
import HomePickup from "../component/home/HomePickup";

function AppHome() {
  return (
    <div>
      <HomeTitle />
      <HomeIncome />
      <HomeOrder />
      <HomePickup />
    </div>
  );
}

export default AppHome;
