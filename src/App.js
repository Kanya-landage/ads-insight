import Dashboard from "./components/Dashboard";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import CreateMediaAd from "./components/AdForms/CreateMediaAd";
import CreateTextAd from "./components/AdForms/CreateTextAd";
import AdType from "./components/AdForms/AdType";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate replace to="/dashboard" />} />
            <Route exact path="/ad-type" element={<AdType />} />
            <Route exact path="/text-ad" element={<CreateTextAd />} />
            <Route exact path="/Media-ad" element={<CreateMediaAd />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
