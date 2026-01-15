import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Router } from "./router/Router"
import "./App.css";

import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Setting from "./components/pages/Setting";
import Page404 from "./components/pages/Page404";
import PATHS from "./router/paths";
import UserManagement from "./components/pages/UserManagement";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={PATHS.LOGIN} element={<Login />} />
          <Route path={PATHS.HOME} element={<Home />} />
          <Route path={PATHS.SETTING} element={<Setting />} />
          <Route path={PATHS.USER_MANAGEMENT} element={<UserManagement />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
