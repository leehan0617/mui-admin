import { Route, Routes } from "react-router-dom";
import Sample1 from "../pages/Sample1";
import Sample2 from "../pages/Sample2";
import Grid from "@mui/material/Grid";

const AppContent = () => {
  return (
    <Grid item xs={12}>
      <Routes>
        <Route path="/" element={<Sample1 />} />
        <Route path="/sample2" element={<Sample2 />} />
      </Routes>
    </Grid>
  );
};

export default AppContent;
