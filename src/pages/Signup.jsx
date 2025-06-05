import React, { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import LoginLogo from '../assets/images/login_logo.png'
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import formStore from '../store/formStore';


function Signup() {

  const navigate = useNavigate();

  const setSignupData = formStore((state) => state.setSignupData);

  // Create formData to store user input
  const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      password: ""
  });
  
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);

  const fieldRefs = {
    name: nameRef,
    email: emailRef,
    phone: phoneRef,
    password: passwordRef
  };
   
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); 
  };


  const signupUser = async (formData) => {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
      ...formData,
      password_confirmation: formData.password
    }, {
      headers: { 'Content-Type': 'application/json' }
    });
    return res.data;
  };

  const SignUpMutation = useMutation({
    mutationFn: signupUser,
    onSuccess: (data) => {
      if (data.token) {
        console.log("Signup success:", data);
        toast.info("Account Creation Initiated");
        setSignupData({
          token: data.token,
          phone: data.user.phone,
        });
        navigate('/personal-info');

      } else if (data.error) {
        let msg = "";
        let ErrorField = null
        if (typeof data.error === 'object') {
          for (const [field , val] of Object.entries(data.error)) {
            msg += `${Array.isArray(val) ? val.join(", ") : val}\n`;

            if (!ErrorField && fieldRefs[field]) {
              ErrorField = fieldRefs[field];
        }
          }
        } else {
          msg += data.error;
        }
        toast.error(msg || "Validation failed.");

         // Focus on the first invalid input
        if (ErrorField?.current) {
          ErrorField.current.focus();
        }
      } else {
        toast.error("Unexpected response. Try again.");
      }
    },
    onError: (error) => {
      const errMsg = error.response?.data?.message || "Something went wrong.";
      toast.error(errMsg);
    }
  });

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

    SignUpMutation.mutate(formData);
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
                aria-invalid={errors.name ? "true" : "false"}
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
                aria-invalid={errors.email ? "true" : "false"}
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
                aria-invalid={errors.phone ? "true" : "false"}
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
                aria-invalid={errors.password ? "true" : "false"}
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
              <button type="submit" className="form-button" disabled={SignUpMutation.isPending}>
                {SignUpMutation.isPending ? "Submitting" : "Sign Up"}
              </button>
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