import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VideoRedirect from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<VideoRedirect />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
