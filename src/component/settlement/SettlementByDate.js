import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function SettlementByDate() {
  return (
    <div>
      <Accordion defaultExpanded={true} sx={{ boxShadow: 0 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="settlement-by-date-content"
          id="settlement-by-date-header">
          <Typography>날짜별</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>판티니 에디찌오네 컬렉션 2015</p>
          <p>21.12.03월 | 20211203-00001234</p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default SettlementByDate;
