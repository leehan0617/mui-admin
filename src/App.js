import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import AppRouter from "./router/AppRouter";

const fontTheme = createTheme({
  typography: {
    fontFamily: ["Spoqa Han Sans Neo", "Roboto"].join(","),
  },
  palette: {
    primary: {
      main: "#def26a",
    },
    secondary: {
      main: "#757575",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={fontTheme}>
      <Container fixed maxWidth="344" className="custom-font">
        <AppRouter />
      </Container>
    </ThemeProvider>
  );
}

export default App;
