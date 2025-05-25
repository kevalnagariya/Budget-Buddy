// Import necessary React tools and icons
import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6" // Icons used to show/hide password visibility

// Input is a reusable form component that handles text and password inputs
const Input = ({ value, onChange, placeholder, label, type }) => {
  // State to track whether the password should be shown or hidden
  const [showPassword, setShowPassword] = useState(false);

  // Toggles password visibility when the eye icon is clicked
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      {/* Label above the input field */}
      <label className='text-[13px] text-slate-800'>{label}</label>

      {/* Input wrapper box for styling and layout */}
      <div className='input-box'>
        <input
          // If input type is 'password', we switch between 'text' and 'password' based on showPassword state
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          placeholder={placeholder} // Placeholder text inside the input field
          className='w-full bg-transparent outline-none' // Full width, no background, no default outline
          value={value} // Controlled input value
          onChange={(e) => onChange(e)} // Calls the function passed via props when user types
        />

        {/* Show password visibility toggle icon only for password fields */}
        {type === "password" && (
          <>
            {showPassword ? (
              // If showPassword is true, show the "eye" icon to indicate password is visible
              <FaRegEye
                size={22}
                className='text-primary cursor-pointer'
                onClick={toggleShowPassword}
              />
            ) : (
              // If showPassword is false, show the "eye with slash" icon to indicate password is hidden
              <FaRegEyeSlash
                size={22}
                className='text-slate-400 cursor-pointer'
                onClick={toggleShowPassword}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Input
