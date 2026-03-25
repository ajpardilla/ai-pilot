import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import PrintApp from "./PrintApp.jsx";

const params = new URLSearchParams(window.location.search);
const isPrint = params.has("print");
const RootApp = isPrint ? PrintApp : App;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RootApp />
  </StrictMode>
);
