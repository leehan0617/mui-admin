import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Container } from "@mui/material";
import AppLogin from "./pages/AppLogin";
import AppHome from "./pages/AppHome";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const fontTheme = createTheme({
  typography: {
    fontFamily: ["Spoqa Han Sans Neo", "Roboto"].join(","),
  },
});

function AuthChecker({ children }) {
  const location = useLocation();
  return localStorage.getItem("auth") ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

function App() {
  return (
    <ThemeProvider theme={fontTheme}>
      <Container fixed maxWidth="344" className="custom-font">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <AuthChecker>
                  <AppHome />
                </AuthChecker>
              }
            />
            <Route path="/login" element={<AppLogin />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
