
import { Link, useNavigate } from 'react-router-dom'

import formStore from '../store/formStore';

function Home() {

    const navigate = useNavigate();

    const { mentorData, userToken, logout } = formStore((state) => state);
    console.log("Mentor Details :", mentorData, userToken)

    const handleLogout = () => {
        logout(); // Call the logout fn to clear userToken and mentorData
        navigate('/')
    };

   

    return (
        <>
            <div className="grid grid-rows justify-center items-center h-dvh">
                <h1 className="text-center text-allcharcoal text-[clamp(28px,5vw,38px)] leading-8 font-bold">
                    Welcome to AllMax'd
                </h1>
                <div className='w-full flex justify-center items-center'>
                    <button className="form-button" onClick={handleLogout}>Log Out</button>
                </div>
            </div>
         </>
    )
}

export default Home