import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";

/* import { createBrowserRouter } from "react-router-dom"; */

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={Signup} path="/Signup" />
        <Route Component={Login} path="/Login" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
