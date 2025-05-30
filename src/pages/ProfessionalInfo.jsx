import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LogoTextBlack from '../assets/images/allmaxd_text_black.png'


function ProfessionalInfo() {

  const navigate = useNavigate();

    const [formData, setFormData] = useState({
        expertise: "",
        experience: "",
        occupation: "",
        institute: "",
        designation: "",
        duration: "",
        portfolio: "",
        social: ""
    });

    const [errors, setErrors] = useState({});

    const expertiseRef = useRef(null);
    const experienceRef = useRef(null);
    const occupationRef = useRef(null);
    const instituteRef = useRef(null);
    const designationRef = useRef(null);
    const durationRef = useRef(null);
    const portfolioRef = useRef(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, portfolio: file });
        setErrors({ ...errors, portfolio: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!formData.expertise.trim()) newErrors.expertise = true;
        if (!formData.experience.trim()) newErrors.experience = true;
        if (!formData.occupation.trim()) newErrors.occupation = true;
        if (!formData.institute.trim()) newErrors.institute = true;
        if (!formData.designation.trim()) newErrors.designation = true;
        if (!formData.duration.trim()) newErrors.duration = true;

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            if (newErrors.expertise && expertiseRef.current) expertiseRef.current.focus();
            else if (newErrors.experience && experienceRef.current) experienceRef.current.focus();
            else if (newErrors.occupation && occupationRef.current) occupationRef.current.focus();
            else if (newErrors.institute && instituteRef.current) instituteRef.current.focus();
            else if (newErrors.designation && designationRef.current) designationRef.current.focus();
            else if (newErrors.duration && durationRef.current) durationRef.current.focus();
        } else {
            navigate("/waiting");
        }
    };

  return (
    <>
        <div className="grid grid-rows-5 justify-center items-start h-dvh mt-10">
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
                  
                <div className='flex justify-center w-full'>
                    <p className='title-subtext'>Provide Us with your professional background to know you better.</p>
                </div>
            </div>
            {/* row 2-5 */}
              <form className='responsive-one max-md:mt-3 row-start-2 row-span-4 justify-items-center z-10' onSubmit={handleSubmit}>
                  
                <div className='subtitle-container'>
                    <p className='subtitle-text'>Professional Details</p>
                </div>

                <div className='flex justify-center items-center w-full'>
                    <input 
                        name="expertise" 
                        id="expertise" 
                        type="text" 
                        ref={expertiseRef}
                        className={`form-input ${errors.expertise ? "border-red-500" : ""}`}
                        value={formData.expertise} 
                        onChange={handleChange} 
                        placeholder="Field/Expertise" 
                    />
                </div>

                <div className='flex justify-center items-center w-full'>
                    <input 
                        name="experience" 
                        id="experience" 
                        type="text" 
                        ref={experienceRef}
                        className={`form-input ${errors.experience ? "border-red-500" : ""}`}
                        value={formData.experience} 
                        onChange={handleChange} 
                        placeholder="Experience" 
                    />
                </div>

                <div className='flex justify-center items-center w-full'>
                    <select 
                        name="occupation" 
                        id="occupation" 
                        ref={occupationRef}
                        className={`form-input cursor-pointer ${errors.occupation ? "border-red-500" : ""}`}
                        value={formData.occupation} 
                        onChange={handleChange}
                      >
                        <option value="" disabled>Current Occupation</option>
                        <option value="student">Student</option>
                        <option value="working">Working Professional</option>
                        <option value="freelancer">Freelancer</option>
                        <option value="other">Other</option>
                      </select>
                    
                </div>

                <div className='flex justify-center items-center w-full'>
                    <input 
                        name="institute" 
                        id="institute" 
                        type="text" 
                        ref={instituteRef}
                        className={`form-input ${errors.institute ? "border-red-500" : ""}`}
                        value={formData.institute} 
                        onChange={handleChange} 
                        placeholder="College / Company" 
                    />
                </div>

                <div className='flex justify-center items-center w-full'>
                    <input 
                        name="designation" 
                        id="designation" 
                        type="text" 
                        ref={designationRef}
                        className={`form-input ${errors.designation ? "border-red-500" : ""}`}
                        value={formData.designation} 
                        onChange={handleChange} 
                        placeholder="Course / Designation" 
                    />
                </div>

                <div className='flex justify-center items-center w-full'>
                    <input 
                        name="duration" 
                        id="duration" 
                        type="text" 
                        ref={durationRef}
                        className={`form-input ${errors.duration ? "border-red-500" : ""}`}
                        value={formData.duration} 
                        onChange={handleChange} 
                        placeholder="Year / Duration" 
                    />
                </div>

                <div className='flex justify-center items-center w-full'>
                    <label
                        htmlFor="portfolio"
                        className={`form-input flex items-center justify-between gap-2 pr-4 cursor-pointer ${
                            errors.portfolio ? "border-red-500" : ""
                        }`}
                    >
                        {formData.portfolio ? formData.portfolio.name : "Portfolio (Optional)"}
                        {formData.portfolio ? (
                            <button
                            type="button"
                            onClick={(e) => {
                                e.preventDefault(); 
                                e.stopPropagation();
                                portfolioRef.current.value = null;
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
                        name="portfolio" 
                        id="portfolio" 
                        type="file" 
                        ref={portfolioRef} 
                        className="hidden"
                        onChange={handleFileChange} 
                      />
                      
                </div>

                <div className='flex justify-center items-center w-full'>
                    <input 
                        name="social" 
                        id="social" 
                        type="url" 
                        className="form-input"
                        placeholder="Social Media Link (Optional)"
                        value={formData.social} 
                        onChange={handleChange} 
                    />
                </div>

                <div className='flex justify-center items-center w-full'>
                    <button type="submit" className="form-button">Submit</button>
                </div>
            </form>
        </div>
 
    </>
  )
}

export default ProfessionalInfo