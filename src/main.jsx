import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./Pages/About.jsx";
import Services from "./Pages/Services.jsx";
import WhatsApp from "./Pages/WhatsApp.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sobrenos" element={<About />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/contatowhatsapp" element={<WhatsApp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
