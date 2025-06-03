import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PersonalInfo from "./pages/PersonalInfo";
import ProfessionalInfo from "./pages/ProfessionalInfo";
import Waiting from "./pages/Waiting";import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer position="top-center" autoClose={4000} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/personal-info" element={<PersonalInfo />} />
        <Route path="/professional-info" element={<ProfessionalInfo />} />
        <Route path="/waiting" element={<Waiting />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
