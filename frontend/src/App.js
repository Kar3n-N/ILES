import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import "./styles/base.css";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
