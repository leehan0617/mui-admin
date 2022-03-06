import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AppHeader from "./layout/AppHeader";
import AppContent from "./layout/AppContent";
import AppFooter from "./layout/AppFooter";
import AppLogin from "./pages/AppLogin";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const fontTheme = createTheme({
  typography: {
    fontFamily: [
      "Spoqa Han Sans Neo",
      "Roboto"
    ].join(',')
  }
})

function App() {
  const [isLogin, setLogin] = useState(false);
  return (
    <ThemeProvider theme={fontTheme}>
      <Container fixed maxWidth="344" className="custom-font">
        <AppLogin></AppLogin>
      </Container>
    </ThemeProvider>
  );
}

export default App;
