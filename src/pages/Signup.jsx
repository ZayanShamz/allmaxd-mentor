import React, { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import LoginLogo from '../assets/images/login_logo.png'

function Signup() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      password: ""
  });
  
  
    
  const [errors, setErrors] = useState({});
  
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);

  
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.email.trim()) newErrors.email = true;
    if (!formData.phone.trim()) newErrors.phone = true;
    if (!formData.password.trim()) newErrors.password = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      if (newErrors.name && nameRef.current) nameRef.current.focus();
      else if (newErrors.email && emailRef.current) emailRef.current.focus();
      else if (newErrors.phone && phoneRef.current) phoneRef.current.focus();
      else if (newErrors.password && passwordRef.current) passwordRef.current.focus();
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
        ...formData,
        password_confirmation: formData.password
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const responseData = response.data;
      if (responseData.token) {
        console.log("Signup success:", responseData);
        alert(responseData.message);
        navigate("/personal-info");
      } 

      else if (responseData.error) {
        let errorMessage = "Registration failed:\n";
        
        // Handle validation errors
        if (typeof responseData.error === 'object') {
          for (const [field, messages] of Object.entries(responseData.error)) {
            errorMessage += `${field}: ${Array.isArray(messages) ? messages.join(", ") : messages}\n`;
            console.log(`Validation error on ${field}: ${messages}`);
          }
        } 
        else {
          errorMessage += responseData.error;
        }
        
        alert(errorMessage);
      }
      // Unexpected response format
      else {
        alert("Unexpected response from server. Please try again.");
      }
        } catch (error) {
          const errMsg = error.response?.data?.message || "Signup failed.";
          alert(errMsg);
    }
    finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  return (
     <>
      <div className="grid grid-rows-[1fr, auto] justify-items-center h-dvh">
        {/* row 1-3 (spanning 3) */}
        <div className="row-span-3 responsive-one grid grid-rows-[auto,1fr] items-center">
          
          {/* Logo Section */}
          <div className="h-full flex justify-center items-end overflow-hidden z-0">
            <div className="w-[50%] sm:w-[50%] md:w-[50%] lg:w-[30%] max-w-[500px] mb-5 scale-75 h-auto aspect-[500/500] relative">
              <img
                className="w-full h-full object-contain absolute inset-0"
                src={LoginLogo}
                alt="AllMax'd Logo"
              />
            </div>
          </div>

          {/* Form Section */}
          <form className="w-full grid grid-rows-5 items-center z-10" onSubmit={handleSubmit}>
            <div className="flex justify-center items-center w-full">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className={`form-input ${errors.name ? "border-red-500" : ""}`}
                value={formData.name}
                onChange={handleChange}
                ref={nameRef}
              />
            </div>

            <div className="flex justify-center items-center w-full">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className={`form-input ${errors.email ? "border-red-500" : ""}`}
                value={formData.email}
                onChange={handleChange}
                ref={emailRef}
              />
            </div>

            <div className="flex justify-center items-center w-full">
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Your Phone No"
                className={`form-input ${errors.phone ? "border-red-500" : ""}`}
                value={formData.phone}
                onChange={handleChange}
                ref={phoneRef}
              />
            </div>

            <div className="flex justify-center items-center w-full relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                placeholder="Password"
                className={`form-input pr-12 ${errors.password ? "border-red-500" : ""}`} 
                value={formData.password}
                onChange={handleChange}
                ref={passwordRef}
              />
              <span
                className={`password-toggle ${showPassword ? 'mdi mdi-eye' : 'mdi mdi-eye-off'}`}
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                role='button'
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    togglePasswordVisibility();
                  }
                }}
              ></span>
            </div>

            <div className="flex justify-center items-center">
              <button type="submit" className="form-button" disabled={isLoading}>{isLoading ? "Submitting" : "Sign Up"}</button>
            </div>
          </form>
        </div>
        
        {/* footer row */}
        <div className='responsive-one row-start-4 flex justify-center items-end pb-10'>
          <span><span className="text-allcharcoal">Already a Mentor?</span> <Link to="/" className="text-allpurple hover:underline focus:underline">Login</Link></span>
        </div>
      </div>
    </>
  )
}

export default Signup