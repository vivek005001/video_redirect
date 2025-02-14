import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"
import VideoRedirect from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<VideoRedirect />} />
      </Routes>
      <Analytics />
    </Router>
  </React.StrictMode>
);
