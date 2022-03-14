import SettlementTitle from "../component/settlement/SettlementTitle";
import SettlementTotal from "../component/settlement/SettlementTotal";
import SettlementByDate from "../component/settlement/SettlementByDate";

function AppSettlement() {
  return (
    <div>
      <SettlementTitle />
      <SettlementTotal />
      <SettlementByDate />
    </div>
  );
}

export default AppSettlement;
