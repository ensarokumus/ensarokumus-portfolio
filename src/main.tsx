import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Navbar from "./components/organisms/Navbar.tsx";
import BackgroundAnimations from "./components/molecules/BackgroundAnimations.tsx";
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
