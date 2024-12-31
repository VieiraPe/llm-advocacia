import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./App.css";
import Sobre from "./Pages/SobreNos/SobreNos";
import Home from "./Pages/Home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Sobre />
  </StrictMode>
);
