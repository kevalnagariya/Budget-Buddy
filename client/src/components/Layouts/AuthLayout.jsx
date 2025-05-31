import React from 'react'
// import CARD_2 from "../../assets/images/card2.png" // This line is commented out; used to import a card image
import { LuTrendingUpDown } from "react-icons/lu"; // Importing an icon from react-icons

// Main layout used for authentication pages (e.g., login, signup)
const AuthLayout = ({ children }) => {
  return (
    // Full layout is a flex container with two columns
    <div className='flex'>

      {/* Left Side: Content area (e.g. form) */}
      <div className='w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12'>
        {/* Brand Title */}
        <h2 className='text-lg font-medium text-black'>Budget Buddy</h2>

        {/* This renders whatever is passed between <AuthLayout> ... </AuthLayout> */}
        {children}
      </div>

      {/* Right Side: Only visible on medium (md) screens and up */}
      <div className='hidden md:block w-[40vw] h-screen bg-violet-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative'>

        {/* Decorative layered blocks positioned with absolute layout */}
        <div className='w-48 h-48 rounded-[40px] bg-purple-600 absolute -top-7 -left-5' />
        <div className='w-48 h-56 rounded-[40px] border-[20px] border-fuchsia-600 absolute top-[30%] -right-10' />
        <div className='w-48 h-58 rounded-[40px] bg-violet-500 absolute -bottom-7 -left-5' />

        {/* Statistics/Info Card */}
        <div className='grid grid-cols-1 z-20'>
          <StatsInfoCard
            icon={<LuTrendingUpDown />} // Icon displayed inside the circle
            label="Track your income & expenses" // Small description
            value="430,000" // Stat value (e.g., total tracked)
            color="bg-primary" // Background color class passed to icon container
          />
        </div>

        {/* Optionally display a bottom card image (currently commented out) */}
        {/* 
        <img 
          src={CARD_2} 
          className='w-64 lg:w-[90%] absolute bottom-10 shadow-lg shadow-blue-400/15'
        /> 
        */}
      </div>
    </div>
  );
}

export default AuthLayout

// Component for showing a small info/statistics card (icon + text + value)
const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className='flex gap-6 bg-white p-4 rounded-xl shadow-md shadow-purple-400/10 border border-gray-200/50 z-10'>
      
      {/* Icon container (e.g. a purple circle with an icon) */}
      <div className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}>
        {icon}
      </div>

      {/* Label and value for the stat */}
      <div>
        <h6 className='text-xs text-gray-500 mb-1'>{label}</h6> {/* Description */}
        <span className='text-[20px]'>${value}</span> {/* Value */}
      </div>
    </div>
  );
}
