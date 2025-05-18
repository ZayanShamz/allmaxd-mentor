import React, { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import LogoTextBlack from '../assets/images/allmaxd_text_black.png'

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

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      setErrors({ ...errors, [e.target.name]: "" }); 
    };

  const handleSubmit = (e) => {
      console.log("Form Data: ", formData);
      e.preventDefault();
      let newErrors = {};
    
      if (!formData.name.trim()) newErrors.name = true;
      if (!formData.email.trim()) newErrors.email = true;
      if (!formData.phone.trim()) newErrors.phone = true;
      if (!formData.password.trim()) newErrors.password = true;
    
      setErrors(newErrors);
      
      if (Object.keys(newErrors).length > 0) {
        if (newErrors.name && nameRef.current) {
          nameRef.current.focus();
        } else if (newErrors.email && emailRef.current) {
          emailRef.current.focus();
        } else if (newErrors.phone && phoneRef.current) {
          phoneRef.current.focus();
        } else if (newErrors.password && passwordRef.current) {
          passwordRef.current.focus();
        }
      }

      if (Object.keys(newErrors).length === 0) {
        navigate("/personal-info");
      }
  };
  
  return (
    <>
      <div className="grid grid-rows-4 gap-4 justify-items-center items-end h-dvh">
        {/* row 1-3 */}
        <div className="row-span-3 w-[90vw] md:w-[70vw] lg:w-[60vw] grid grid-rows-[auto,1fr] items-center">
          
          {/* Logo Section */}
          <div className="h-full flex justify-center items-center overflow-hidden">
            <div className="w-[80%] sm:w-[60%] md:w-[60%] lg:w-[40%] max-w-[666px] h-auto aspect-[666/375] relative">
              <img
                className="w-full h-full object-contain absolute inset-0"
                src={LogoTextBlack}
                alt="AllMax'd Logo"
              />
            </div>
          </div>

          {/* Form Section */}
          <form
            className="w-full grid grid-rows-5 items-center"
            onSubmit={handleSubmit}
          >
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
                type="text"
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

            <div className="flex justify-center items-center w-full">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Create a Password"
                className={`form-input ${errors.password ? "border-red-500" : ""}`}
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-center items-center">
              <button type="submit" className="form-button">Sign Up</button>
            </div>
          </form>
        </div>
        
        {/* row 4 */}
        <div className='w-[90vw] md:w-[70vw] lg:w-[60vw] row-start-4 h-full flex justify-center items-end py-10'>
          <span><span className="text-allcharcoal">Already a Mentor?</span> <Link to="/" className="text-allpurple hover:underline focus:underline">Login</Link></span>
        </div>
      </div>
    </>
  )
}

export default Signup