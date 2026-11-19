import React from "react";
import ReactDOM from "react-dom/client";

import "@fontsource/outfit";
import "@fontsource/outfit/600.css";
import "@fontsource/outfit/700.css";
// Global styles first so component modules can override shared classes
import "./index.css";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
