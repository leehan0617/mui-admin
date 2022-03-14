import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import AppRouter from "./router/AppRouter";

const fontTheme = createTheme({
  typography: {
    fontFamily: ["Spoqa Han Sans Neo", "Roboto"].join(","),
  },
  palette: {
    primary: {
      main: "#7ECD19",
    },
    secondary: {
      main: "#333333",
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
