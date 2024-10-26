import "./index.css";
import App from "./App.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import TanstackQuery from "context/TanstackQuery";

const root = document.getElementById("root");
if (!root) throw new Error("Root not defined!");

createRoot(root).render(
  <StrictMode>
    <TanstackQuery>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TanstackQuery>
  </StrictMode>
);
