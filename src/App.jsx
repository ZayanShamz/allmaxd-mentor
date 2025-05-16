import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PersonalInfo from "./pages/PersonalInfo";
import ProfessionalInfo from "./pages/ProfessionalInfo";
import Waiting from "./pages/Waiting";

function App() {
  return (
    <BrowserRouter basename="/allmaxd-mentor">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/personal-info" element={<PersonalInfo />} />
        <Route path="/professional-info" element={<ProfessionalInfo />} />
        <Route path="/waiting" element={<Waiting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
