import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.css";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./Pages/Home/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Home />
    <Footer />
  </StrictMode>
);
