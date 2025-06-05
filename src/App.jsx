import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import formStore from './store/formStore';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PersonalInfo from "./pages/PersonalInfo";
import ProfessionalInfo from "./pages/ProfessionalInfo";
import Waiting from "./pages/Waiting";
import Home from "./pages/Home";

function App() {

  const navigate = useNavigate();
  const { userToken } = formStore.getState();

  useEffect(() => {
    if (userToken) {
      navigate('/home');
    }
  }, [userToken, navigate]);

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/personal-info" element={<PersonalInfo />} />
        <Route path="/professional-info" element={<ProfessionalInfo />} />
        <Route path="/waiting" element={<Waiting />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
