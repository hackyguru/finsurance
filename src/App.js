import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";

function App() {
  return (
    <div>
      <div className="gradient-bg-welcome w-full min-h-screen">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
