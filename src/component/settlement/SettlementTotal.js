import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function SettlementTotal() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="settlement-total-content"
          id="settlement-total-header">
          <Typography>2월 전체 내역</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>충일종합주류 계좌번호 - 우리은행 123-456-789</p>
          <p>수입 180,700원</p>
          <p>송금 1,180,700원</p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default SettlementTotal;
