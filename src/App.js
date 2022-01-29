import React from "react";
import "./App.css";

import Container from "./pages/Container/Container";
import { AuthProvider } from "./context/AuthContext";

function App() {
  console.log(
    "client secret: ",
    process.env.REACT_APP_CLIENT_SECRET,
    "client id: ",
    process.env.REACT_APP_CLIENT_ID
  );
  return (
    <div className="App">
      <AuthProvider>
        <Container />
      </AuthProvider>
    </div>
  );
}

export default App;
