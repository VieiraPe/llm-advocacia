import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About.jsx";
import Services from "./Pages/Services.jsx";
import WhatsApp from "./Pages/WhatsApp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sobrenos",
    element: <About />,
  },
  {
    path: "/servicos",
    element: <Services />,
  },
  {
    path: "/whatsapp",
    element: <WhatsApp />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
