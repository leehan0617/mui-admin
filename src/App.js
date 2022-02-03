import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AppHeader from "./layout/AppHeader";
import AppContent from "./layout/AppContent";
import MenuFooter from "./layout/MenuFooter";

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <AppHeader></AppHeader>
        <AppContent></AppContent>
        <Grid item xs={12}>
          <MenuFooter></MenuFooter>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
