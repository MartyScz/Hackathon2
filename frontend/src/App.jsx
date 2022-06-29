import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AddProject from "./pages/AddProject";
import Project from "./pages/Project";
import Profile from "./pages/Profile";
// import LoginContext from "./contexts/LoginContext";

import "./App.css";

function App() {
  // const [isConnected, setIsConnected] = useState(true);
  // ne pas oublier d'importer useState
  return (
    <div className="App">
      {/* <LoginContext.Provider> */}
      {/* à insérer dans au-dessus dans le provider : value={{ isConnected, setIsConnected }} */}
      <Router>
        {/* {isConnected ? ( */}
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/addProject" element={<AddProject />} />
            <Route path="/project" element={<Project />} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </>
        {/* ) : (
            <h1>Page Login</h1>
          )} */}
      </Router>
      {/* </LoginContext.Provider> */}
    </div>
  );
}

export default App;
