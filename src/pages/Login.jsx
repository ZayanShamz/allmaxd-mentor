import React, {useState, useRef} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import LoginLogo from '../assets/images/login_logo.png'

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const validateForm = () => {
    const newErrors = {};
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
      emailRef.current?.focus();
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
      if (!newErrors.email) passwordRef.current?.focus();
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
          email,
          password
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Handle successful login
      if (response.data.token) {
        alert(response.data.message || 'Login successful');
        navigate('/'); // Redirect to home for now.
      } else {
        // Handle unexpected response format( just in case :| )
        alert('Login failed: Unexpected response format');
      }
      
    } catch (error) {
      // Handle 401 Unauthorized and other errors
      if (error.response) {
        if (error.response.status === 401) {
          alert(error.response.data.message || 'Invalid credentials');
        } else {
          alert(error.response.data.message || 'Login failed. Please try again.');
        }
      } else {
        alert('Network error. Please check your connection.');
      }
    } finally {
      // Reset loading state
      setIsLoading(false);
    }
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (
    <>
      <div className="grid grid-rows-[auto, min-content] justify-center items-center h-dvh">
      {/* row auto */}
        <div className="row-span-3 responsive-one grid grid-rows-[auto,1fr] items-center">
          {/* spanning 3 rows */}
          <div className='h-full flex justify-center items-center overflow-hidden z-0'>
            <div className="w-[50%] sm:w-[50%] md:w-[50%] lg:w-[30%] max-w-[500px] mb-5 scale-75 h-auto aspect-[500/500] relative">
              <img
                className="w-full h-full object-contain absolute inset-0"
                src={LoginLogo}
                alt="AllMax'd Logo"
              />
            </div>
          </div>
          
          <form className='w-full grid grid-rows-3 items-center z-10' onSubmit={handleLogin}>
            <div className='flex flex-col justify-center items-center w-full'>
              <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Email" 
                className={`form-input ${errors.email ? 'border-red-500' : ''}`}  
                aria-invalid={errors.email ? "true" : "false"}
                value={email} 
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors({...errors, email: ''});
                }}
                ref={emailRef}
              />
              <div className='subtitle-container'>
                {errors.email && (
                  <span className="text-red-500 text-xs self-start">
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            <div className='flex flex-col justify-center items-center w-full'>
              <div className="flex justify-center items-center w-full relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id="password"
                  placeholder="Password"
                  className={`form-input pr-12 ${errors.password ? 'border-red-500' : ''}`} 
                  aria-invalid={errors.password ? "true" : "false"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors({...errors, password: ''});
                  }}
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
              <div className='subtitle-container'>
                {errors.password && (
                  <span className="text-red-500 text-xs self-start">
                    {errors.password}
                  </span>
                )}
              </div>
            </div>

            <div className='flex justify-center items-center'>
              <button type="submit" className="form-button" disabled={isLoading}
              >
                {isLoading ? 'Signing In...' : 'Sign In'}</button>
            </div>
          </form>
        </div>
        {/* footer row */}
        <div className='responsive-one row-start-4 h-full flex justify-center items-end pb-10'>
          <span><span className="text-allcharcoal">Not Yet a Mentor?</span> <Link to="/signup" className="text-allpurple hover:underline focus:underline">Sign Up</Link></span>
        </div>
      </div>
    </>
  )
}

export default Login