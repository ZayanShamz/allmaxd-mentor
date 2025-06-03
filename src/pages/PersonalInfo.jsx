import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LogoTextBlack from '../assets/images/allmaxd_text_black.png'
import formStore from '../store/formStore';

function PersonalInfo() {
  
  const navigate = useNavigate();

  const setPersonalInfo = formStore((state) => state.setPersonalInfo);

  const [formData, setFormData] = useState({
      age: "",
      gender: "",
      aadhaar: "",
      state: "",
      district: "",
      city: "",
      address: ""
  });

  const [errors, setErrors] = useState({});

  const ageRef = useRef(null);
  const genderRef = useRef(null);
  const aadhaarRef = useRef(null);
  const stateRef = useRef(null);
  const districtRef = useRef(null);
  const cityRef = useRef(null);
  const addressRef = useRef(null);

  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      setErrors({ ...errors, [e.target.name]: "" }); 
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
  
    if (!formData.age.trim()) newErrors.age = true;
    if (!formData.gender.trim()) newErrors.gender = true;
    if (!formData.aadhaar.trim()) newErrors.aadhaar = true; 
    if (!formData.state.trim()) newErrors.state = true;
    if (!formData.district.trim()) newErrors.district = true;
    if (!formData.city.trim()) newErrors.city = true;
    if (!formData.address.trim()) newErrors.address = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      if (newErrors.age && ageRef.current) {
        ageRef.current.focus();
      } else if (newErrors.gender && genderRef.current) {
        genderRef.current.focus();
      } else if (newErrors.aadhaar && aadhaarRef.current) {
        aadhaarRef.current.focus();
      } else if (newErrors.state && stateRef.current) {
        stateRef.current.focus();
      } else if (newErrors.district && districtRef.current) {
        districtRef.current.focus();
      } else if (newErrors.city && cityRef.current) {
        cityRef.current.focus();
      } else if (newErrors.address && addressRef.current) {
        addressRef.current.focus();
      }
    } else {
      setPersonalInfo(formData);
      navigate("/professional-info");
    }
  };
  
  
  return (
    <>
      <div className="grid grid-rows-5 justify-center items-start h-dvh">
        {/* row 1 */}
        <div className='responsive-one grid grid-rows-2 h-full justify-center items-center z-0'>
          <div className="h-full flex justify-center items-center overflow-hidden">
            <div className="w-[80%] sm:w-[60%] md:w-[60%] lg:w-[40%] max-w-[666px] h-auto aspect-[666/375] relative">
              <img
                className="w-full h-full object-contain absolute inset-0"
                src={LogoTextBlack}
                alt="AllMax'd Logo"
              />
            </div>
          </div>
          <div className='flex justify-center items-center w-full'>
            <p className='title-subtext'>To setup a mentor profile you have to provide the mentioned details accurately.</p>
          </div>
        </div>
        {/* row 2-5 */}
        <form className='responsive-one row-start-2 row-span-4 justify-items-center z-10' onSubmit={handleSubmit}>

          <div className='subtitle-container'>
            <p className='subtitle-text'>Personal Details</p>
          </div>

          <div className='flex justify-center items-center w-full'>
            <input
              type="text" 
              inputMode="numeric"
              pattern="[0-9]*"
              title="Enter age in numbers"
              name="age" 
              id="age" 
              placeholder="Your Age" 
              className={`form-input ${errors.age ? "border-red-500" : ""}`} 
              value={formData.age} 
              onChange={handleChange} 
              ref={ageRef} />
          </div>

          <div className='flex justify-center items-center w-full relative'>
            <select
              name="gender" 
              id="gender" 
              className={`form-input cursor-pointer appearance-none z-10 ${errors.gender ? "border-red-500" : ""}`}
              value={formData.gender} 
              onChange={handleChange} 
              ref={genderRef}>
                <option value="" disabled>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            <span
              className="password-toggle z-0"
              aria-hidden="true"
            >
              <i className="mdi mdi-chevron-down"></i>
            </span>
          </div> 

          <div className='flex justify-center items-center w-full'>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              name="aadhaar" 
              id="aadhaar" 
              placeholder="Aadhaar No" 
              className={`form-input ${errors.aadhaar ? "border-red-500" : ""}`} 
              value={formData.aadhaar} 
              onChange={handleChange} 
              ref={aadhaarRef}
            />
          </div>

          <div className='flex justify-center items-center w-full'>
            <input
              type="text"
              name="state" 
              id="state" 
              placeholder="Your State" 
              className={`form-input ${errors.state ? "border-red-500" : ""}`} 
              value={formData.state} 
              onChange={handleChange} 
              ref={stateRef} />
          </div>

          <div className='flex justify-center items-center w-full'>
            <input 
              type="text" 
              name="district" 
              id="district" 
              placeholder="Your District" 
              className={`form-input ${errors.district ? "border-red-500" : ""}`} 
              value={formData.district} 
              onChange={handleChange} 
              ref={districtRef} />
          </div>

          <div className='flex justify-center items-center w-full'>
            <input
              type="text" 
              name="city" 
              id="city" 
              placeholder="Your City" 
              className={`form-input ${errors.city ? "border-red-500" : ""}`} 
              value={formData.city} 
              onChange={handleChange} 
              ref={cityRef} />
          </div>

          <div className='flex justify-center items-center w-full'>
            <textarea
              name="address"
              id="address"
              placeholder="Your Address"
              className={`form-input ${errors.address ? "border-red-500" : ""}`}
              value={formData.address}
              onChange={handleChange}
              ref={addressRef}
            />
          </div>

          <div className='flex justify-center items-center w-full'>
            <button type="submit" className="form-button">Next</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default PersonalInfo