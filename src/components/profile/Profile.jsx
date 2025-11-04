import React from 'react';
import njnProfilePic from '../../assets/njn-profile-pic.png';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-bg-color">
      <div className="flex flex-col md:flex-row justify-center items-center">

        {/* Profile Image with subtle dark mask on mobile */}
        <div className="relative w-full md:w-1/4 border border-e-yellow-950 border-s-0 border-t-0 border-b-0 flex justify-center">
          <img
            className="w-full h-auto object-cover brightness-90 md:brightness-100"
            src={njnProfilePic}
            alt="Niranjan Profile"
          />
          {/* subtle dark layer only on mobile */}
          <div className="absolute inset-0 bg-black/30 md:hidden"></div>
        </div>

        {/* Text Section */}
        <div className="text-white flex justify-center p-6 md:p-10 text-center md:text-left">
          <div className="flex flex-col justify-center text-lg md:text-2xl">
            <p>Hi, I'm</p>
            <p className="text-4xl md:text-7xl text-yellow-500 font-bold">NIRANJAN S</p>
            <p>
              Digital Marketer | Trainer | Growth Strategist | Performance Marketing
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Turning Clicks into Conversions & Students into Marketers
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
