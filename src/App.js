import React from "react";
import "./App.css";

import Container from "./pages/Container/Container";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Container />
      </AuthProvider>
    </div>
  );
}

export default App;
