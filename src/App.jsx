import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home.jsx";
import Signup from "./Routes/Signup.jsx";
import Login from "./Routes/Login.jsx";

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
