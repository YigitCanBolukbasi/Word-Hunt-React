import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route, Link } from "react-router-dom";

import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
