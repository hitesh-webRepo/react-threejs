import React from 'react'
import Heading from '../Heading'

const OneCallWaySection = () => {
  return (
    <div className='p-20 ' style={{backgroundColor:"#45E0A8"}}>
           <div className='lg:px-40 md:px-20 sm:px-10 px-0 text-center'>
               <Heading className="text-4xl font-bold text-black lg:px-40 md:-px-20 sm:px-10 px-0 " text="Fuel your brand’s needs & growth with Lift. Any service - one call away!"/>
               <p className='text-lg text-black mt-5 '>Get a quote on detailing exactly how your brand will be fueled with the Lift Program.</p>
               <button className='text-white py-2 px-5 mt-5 text-base font-semibold rounded-md' style={{backgroundColor:"#FF622D"}}> SCHDULE A DEMO </button>

           </div>
    </div>
  )
}

export default OneCallWaySection