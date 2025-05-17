import React, { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import LogoTextBlack from '../assets/images/allmaxd_text_black.png'

function Signup() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      referral: ""
    });
    
  const [errors, setErrors] = useState({});
  
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

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
    
      setErrors(newErrors);
      
      if (Object.keys(newErrors).length > 0) {
        if (newErrors.name && nameRef.current) {
          nameRef.current.focus();
        } else if (newErrors.email && emailRef.current) {
          emailRef.current.focus();
        } else if (newErrors.phone && phoneRef.current) {
          phoneRef.current.focus();
        }
      }
    
      if (Object.keys(newErrors).length === 0) {
        navigate("/personal-info");
      }
  };
  
  return (
    <>
      <div className="grid grid-rows-4 justify-center items-end h-screen">
        {/* row 1 */}
        <div className='w-[90vw] md:w-[70vw] lg:w-[60vw] h-full flex justify-center items-center'>
          <img src={LogoTextBlack} alt="AllMax'd Logo" className="scale-50" />
        </div>
        {/* row 2-3 */}
        <form className='w-[90vw] md:w-[70vw] lg:w-[60vw] row-start-2 row-span-2 grid grid-rows-5 items-center' onSubmit={handleSubmit}>
          
          <div className='flex justify-center items-center w-full'>
            <input
              type="text" 
              name="name" 
              id="name" 
              placeholder="Full Name" 
              className={`form-input ${errors.name ? "border-red-500" : ""}`} 
              value={formData.name} 
              onChange={handleChange} 
              ref={nameRef} />
          </div>

          <div className='flex justify-center items-center w-full'>
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

          <div className='flex justify-center items-center w-full'>
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

          <div className='flex justify-center items-center w-full'>
            <input
              type="text"
              name="referral"
              id="referral"
              placeholder="Referral Code (Optional)"
              className="form-input"
              value={formData.referral}
              onChange={handleChange}
            />
          </div>

          <div className='flex justify-center items-center'>
            <button type="submit" className="form-button">Sign Up</button>
          </div>
        </form>
        
        {/* row 4 */}
        <div className='w-[90vw] md:w-[70vw] lg:w-[60vw] row-start-4 h-full flex justify-center items-end py-10'>
          <span><span className="text-allcharcoal">Already a Mentor?</span> <Link to="/" className="text-allpurple hover:underline focus:underline">Login</Link></span>
        </div>
      </div>
    </>
  )
}

export default Signup