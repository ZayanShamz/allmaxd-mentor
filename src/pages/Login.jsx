import React from 'react'
import { Link } from 'react-router-dom'

import LogoBlack from '../assets/images/allmaxd_logo_black.png'

function Login() {
  return (
    <>
      <div className="grid grid-rows-4 justify-center items-center h-screen">
        {/* row 1-2 */}
        <div className='w-[90vw] md:w-[70vw] lg:w-[60vw] row-span-2 flex justify-center'>
          <img src={LogoBlack} alt="AllMax'd Logo" className="scale-50" />
        </div>
        {/* row 3 */}
        <form className='w-[90vw] md:w-[70vw] lg:w-[60vw] row-start-3 grid grid-rows-3 items-center'>
          <div className='flex justify-center items-center w-full'>
            <input type="text" name="username" id="username" placeholder="Username" className="form-input" />
          </div>
          <div className='flex justify-center items-center w-full'>
            <input type="password" name="password" id="password" placeholder="Password" className="form-input" />
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