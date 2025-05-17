import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

import LogoBlack from '../assets/images/allmaxd_logo_black.png'

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
  
  return (
    <>
      <div className="grid grid-rows-4 justify-center items-center h-screen">
        {/* row 1-2 */}
        <div className='w-[90vw] md:w-[70vw] lg:w-[60vw] row-span-2 flex justify-center'>
          <img src={LogoBlack} alt="AllMax'd Logo" className="scale-50" />
        </div>
        {/* row 3 */}
        <form className='w-[90vw] md:w-[70vw] lg:w-[60vw] row-start-3 grid grid-rows-3 items-center' onSubmit={handleLogin}>
          <div className='flex justify-center items-center w-full'>
            <input type="text" name="email" id="email" placeholder="Email" className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='flex justify-center items-center w-full'>
            <input type="password" name="password" id="password" placeholder="Password" className="form-input" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className='flex justify-center items-center'>
            <button type="submit" className="form-button">Sign In</button>
          </div>
        </form>
        {/* row 4 */}
        <div className='w-[90vw] md:w-[70vw] lg:w-[60vw] row-start-4 h-full flex justify-center items-end py-10'>
          <span><span className="text-allcharcoal">Not Yet a Mentor?</span> <Link to="/signup" className="text-allpurple hover:underline focus:underline">Sign Up</Link></span>
        </div>
      </div>
    </>
  )
}

export default Login