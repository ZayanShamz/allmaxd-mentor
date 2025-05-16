import React from 'react'
import WaitingImage from '../assets/images/waiting.png'

function Waiting() {
  return (
    <>
      <div className='flex justify-center h-screen py-3'>
        <div className='w-[90vw] md:w-[70vw] lg:w-[60vw] grid grid-rows-5 items-center justify-center'>
          {/* row 1 */}
          <div className='flex flex-col justify-center items-center h-full p-1.5'>
            <h1 className='text-center text-allcharcoal text-[clamp(28px,5vw,38px)] leading-8 font-bold'>Mentor Training Programme</h1>

            <div className='w-[90%] md:w-[70%] lg:mt-10 mt-5 flex justify-center items-center'>
              <p className='text-center text-[clamp(12px,3vw,16px)] text-allpurple'>All Professionals are expected to complete their initial training and gain a badge from company in order to start their career with Allmax’d</p>
            </div>
          </div>
          {/* row 2 */}
          <div className='row-start-2 row-span-2 flex justify-center items-center h-full w-full'>
            <img src={WaitingImage} alt="Waiting" className='max-md:scale-75 object-contain' />
          </div>
          {/* row 3 */}
          
          <div className='row-start-4 row-span-2 flex justify-center items-center h-full pb-4'>
            <div className='w-full md:w-[70%] grid grid-rows-3 gap-y-3 max-h-full'>
              {/* sub row 1 */}
              <div className='grid grid-cols-6 items-center'>
                <div className='text-center text-2xl text-allpurple font-bold'> 1 </div>
                <div className='col-start-2 col-span-5 text-[clamp(12px,3vw,18px)] text-center text-allpurple leading-tight shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl py-2 px-5'> Watch all the training Videos and attend a general aptitude test </div>
              </div>

              {/* sub row 2 */}
              <div className='grid grid-cols-6 items-center'>
                <div className='col-span-5 text-center text-[clamp(12px,3vw,18px)] text-allpurple leading-tight shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl py-2 px-5'> Afterwards, You will have to attend a test in your specialisation for further assessment.</div>
                <div className='text-center text-2xl text-allpurple font-bold'> 2 </div>

              </div>

              {/* sub row 3 */}
              <div className='grid grid-cols-6 items-center'>
                <div className='text-center text-2xl text-allpurple font-bold'> 3 </div>
                <div className='col-start-2 col-span-5 text-[clamp(10px,3vw,18px)] text-center text-allpurple leading-tight shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl py-2 px-5'>Once you pass all the assessment test you will have an interview at given location for personal assessment. Later will be provided by an ID, only after you can start work.</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}


export default Waiting