import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PersonalInfo from "./pages/PersonalInfo";
import ProfessionalInfo from "./pages/ProfessionalInfo";
import Waiting from "./pages/Waiting";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/personal-info" element={<PersonalInfo />} />
        <Route path="/professional-info" element={<ProfessionalInfo />} />
        <Route path="/waiting" element={<Waiting />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
  );
}

export default App;
