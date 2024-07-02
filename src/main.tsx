import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Navbar from "./components/atoms/Navbar.tsx";
import BackgroundAnimations from "./components/atoms/BackgroundAnimations.tsx";
import { Toaster } from "react-hot-toast";
import Footer from "./components/organisms/Footer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BackgroundAnimations />
    <Navbar />
    <App />
    <Toaster position="bottom-right" />
    <Footer />
  </React.StrictMode>
);
