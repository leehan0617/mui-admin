import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import AppLogin from "./pages/AppLogin";
import AppHome from "./pages/AppHome";
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
        <Routes>
          <Route path="/" element={<AppLogin />} />
          <Route path="/home" element={<AppHome />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
