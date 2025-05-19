import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

import LoginLogo from '../assets/images/login_logo.png'

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
      e.preventDefault();

      // Replace with actual login logic according to backend API
      if (email === "test@test.com" && password === "test") {
        alert("Login successful");
        navigate("/");
      } else {
          alert("Invalid credentials");
      }
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (
    <>
      <div className="grid grid-rows-[1fr, auto] justify-center items-end h-dvh">

        <div className="row-span-3 responsive-one grid grid-rows-[auto,1fr] items-center">
        {/* row 1-2 */}
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
            <div className='flex justify-center items-center w-full'>
              <input 
                type="text" 
                name="email" 
                id="email" 
                placeholder="Email" 
                className="form-input" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex justify-center items-center w-full relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                placeholder="Password"
                className="form-input pr-12" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className={`password-toggle ${showPassword ? 'mdi mdi-eye' : 'mdi mdi-eye-off'}`}
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              ></span>
            </div>

            <div className='flex justify-center items-center'>
              <button type="submit" className="form-button">Sign In</button>
            </div>
          </form>
        </div>
        {/* row 4 */}
        <div className='responsive-one row-start-4 h-full flex justify-center items-end pb-10'>
          <span><span className="text-allcharcoal">Not Yet a Mentor?</span> <Link to="/signup" className="text-allpurple hover:underline focus:underline">Sign Up</Link></span>
        </div>
      </div>
    </>
  )
}

export default Login