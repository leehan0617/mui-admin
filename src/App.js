import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AppHeader from "./layout/AppHeader";
import AppContent from "./layout/AppContent";
import AppFooter from "./layout/AppFooter";

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <AppHeader></AppHeader>
        <AppContent></AppContent>
        <AppFooter></AppFooter>
      </Grid>
    </Box>
  );
}

export default App;
