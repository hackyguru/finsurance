import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Team from "./components/Team";
import Type from "./pages/Type";
import VehicleNumber from "./pages/VehicleNumber";
import Verify from "./pages/Verify";
import City from "./pages/City";

function App() {
  return (
    <div>
      <div className="gradient-bg-welcome w-full min-h-screen">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route exact path="/team" element={<Team />} />
            <Route
              exact
              path="/verify"
              element={<Verify/>}
            />
            <Route exact path="/type" element={<Type />} />
            <Route exact path="/vehicle" element={<VehicleNumber />} />
            {/*<Route*/}
            {/*  exact*/}
            {/*  path="/obtainperson"*/}
            {/*  element={<Loader value="Obtaining personal data from SETU..." />}*/}
            {/*/>*/}
            {/*<Route*/}
            {/*  exact*/}
            {/*  path="/obtainvehicle"*/}
            {/*  element={<Loader value="Obtaining vehicle information..." />}*/}
            {/*/>*/}
            <Route exact path="/vehicle" element={<VehicleNumber />} />
            <Route exact path="/city" element={<City />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
