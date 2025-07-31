import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import "remixicon/fonts/remixicon.css";
import AboutSection from "./components/AboutSection.jsx";
import Tools from "./components/Tools.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="container mx-auto px-4">
      <Navbar />
      <App />
      <AboutSection />
      <Tools />
    </div>
  </StrictMode>
);
