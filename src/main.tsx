import "@ant-design/v5-patch-for-react-19";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import FullScreenNav from "./components/Shared/FullScreenNav.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <FullScreenNav>
        <App />
      </FullScreenNav>
    </BrowserRouter>
  </StrictMode>
);
