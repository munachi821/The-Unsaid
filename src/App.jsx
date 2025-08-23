import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home.jsx";
import Signup from "./Routes/Signup.jsx";
import Login from "./Routes/Login.jsx";
import ForgotPassword from "./Routes/Forgot-password.jsx";
import UserLayout from "./Routes/UserLayout.jsx";
import Settings from "./Routes/Settings.jsx";
import Dashboard from "./Routes/Dashboard.jsx";
/* import { createBrowserRouter } from "react-router-dom"; */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Signup />} path="/Signup" />
        <Route element={<Login />} path="/Login" />
        <Route element={<ForgotPassword />} path="/forgot-password" />
        <Route element={<UserLayout />} path="/:username">
          <Route element={<Settings />} path="settings" />
          <Route element={<Dashboard />} path="dashboard" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
