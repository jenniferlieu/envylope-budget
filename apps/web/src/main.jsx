import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/global.css";
import "@/styles/index.css";
import App from "./App.jsx";
import { DataProvider } from "@/contexts/DataContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </StrictMode>
);
