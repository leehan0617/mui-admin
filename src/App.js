import { useEffect } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Container } from "@mui/material";
import AppLogin from "./pages/AppLogin";
import AppHome from "./pages/AppHome";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import authState from "./state/authState";

const fontTheme = createTheme({
  typography: {
    fontFamily: ["Spoqa Han Sans Neo", "Roboto"].join(","),
  },
});

function AuthChecker({ children }) {
  const authInfo = useRecoilValue(authState);
  const location = useLocation();

  return authInfo ? children : <Navigate to="/login" state={{ from: location }} replace />;
}

function App() {
  const setAuth = useSetRecoilState(authState);

  useEffect(() => {
    const localAuthInfo = localStorage.getItem("auth");
    if (localAuthInfo) {
      setAuth(localAuthInfo);
    }
  }, []);

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
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
