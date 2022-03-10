import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import AppLogin from "../pages/AppLogin";
import AppMain from "../pages/AppMain";
import AppHome from "../pages/AppHome";
import AppSettlement from "../pages/AppSettlement";
import AppOrder from "../pages/AppOrder";
import AppManage from "../pages/AppManage";

function AuthChecker({ children }) {
  const location = useLocation();
  return localStorage.getItem("auth") ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <AuthChecker>
              <AppMain />
            </AuthChecker>
          }>
          <Route path="" element={<AppHome />}></Route>
          <Route path="settlement" element={<AppSettlement />}></Route>
          <Route path="order" element={<AppOrder />}></Route>
          <Route path="manage" element={<AppManage />}></Route>
          <Route path="*" element={<div>404 NotFound</div>} />
        </Route>
        <Route path="/login" element={<AppLogin />} />
        <Route path="*" element={<div>404 NotFound</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
