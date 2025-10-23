import React from 'react'
import njnProfilePic from '../../assets/njn-profile-pic.png'
import "./Profile.css"

const Profile = () => {
  return (
    <div className=' profile-bg-color'>
        <div className='flex justify-center border'>
            <div className='w-1/4 border border-e-yellow-950  mask-b-from-0.5'>
                <img className='' src={njnProfilePic} alt="" />
            </div>
            <div className='text-white flex justify-center p-10'>
                <div className='flex flex-col justify-center text-2xl space-y-3 '>
                    <p>Hi, I'm</p>
                    <p className='text-7xl text-yellow-500'>NIRANJAN S</p>
                    <p>Head of Digital Marketing | Trainer | Growth Strategist</p>
                    <p className='text-gray-500 text-sm'>Turning Clicks into Conversions & Students into Marketers</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile