import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LogoTextBlack from '../assets/images/allmaxd_text_black.png'

function PersonalInfo() {
  
  const navigate = useNavigate();

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

  const handleFileChange = (e) => {
      const file = e.target.files[0];
      setFormData({ ...formData, aadhaar: file });
      setErrors({ ...errors, aadhaar: "" });
  };
    

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
  
    if (!formData.age.trim()) newErrors.age = true;
    if (!formData.gender.trim()) newErrors.gender = true;
    if (!formData.aadhaar) newErrors.aadhaar = true; 
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
              name="age" 
              id="age" 
              placeholder="Your Age" 
              className={`form-input ${errors.age ? "border-red-500" : ""}`} 
              value={formData.age} 
              onChange={handleChange} 
              ref={ageRef} />
          </div>

          <div className='flex justify-center items-center w-full'>
            <select
              name="gender" 
              id="gender" 
              className={`form-input cursor-pointer ${errors.gender ? "border-red-500" : ""}`}
              value={formData.gender} 
              onChange={handleChange} 
              ref={genderRef}>
                <option value="" disabled>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
          </div> 

          <div className='flex justify-center items-center w-full'>
            <label
              htmlFor="aadhaar"
              className={`form-input flex items-center justify-between gap-2 pr-4 cursor-pointer ${
                errors.aadhaar ? "border-red-500" : ""
              }`}
            >
              {formData.aadhaar ? formData.aadhaar.name : "Upload Aadhaar"}
              {formData.aadhaar ? (
                  <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault(); 
                        e.stopPropagation();
                        aadhaarRef.current.value = null;
                        handleFileChange({ target: { files: [] } });
                    }}
                    className="text-allpurple"
                  >
                    <i className="mdi mdi-close"></i>
                  </button>
              ) : (
                  <i className="mdi mdi-paperclip text-allpurple rotate-45"></i>
              )}
            </label>
            <input
              type="file"
              name="aadhaar"
              id="aadhaar"
              className="hidden"
              onChange={handleFileChange}
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