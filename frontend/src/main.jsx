import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { WorkoutsContextProvider } from "./context/WorkoutsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <WorkoutsContextProvider>
      <App />
    </WorkoutsContextProvider>
  </BrowserRouter>
);
