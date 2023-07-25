import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Data from "./Components/Data";
import Buttons from "./Components/Buttons";
import List from "./Components/List";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route>
        <Route path="/" element={<App />} />
        <Route path="/Components" element={<Buttons/>} />
        <Route path="/Data" element={<Data />}/>
        <Route path="/List" element={<List />}/>
      </Route>
    </Routes>
  </Router>
);
