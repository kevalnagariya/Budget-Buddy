// Import necessary React libraries and components
import React, { useState } from 'react'
import AuthLayout from '../../components/Layouts/AuthLayout' // Layout wrapper for auth pages
import { Link, useNavigate } from "react-router-dom"; // Used for navigation and linking between pages
import Input from '../../components/Inputs/input'; // Reusable input field component
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector'; // Component to select a profile picture
import { validateEmail } from '../../utils/helper'; // Utility function to validate email format

// Define the SignUp component
const SignUp = () => {
  // State variables to hold form input values
  const [profilePic, setProfilePic] = useState(null); // Holds the selected profile picture
  const [fullName, setFullName] = useState(""); // User's full name
  const [email, setEmail] = useState(""); // User's email
  const [password, setPassword] = useState(""); // User's password

  // State to store and display error messages
  const [error, setError] = useState("");

  // useNavigate allows you to redirect the user to another route
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSignUp = async (e) => { 
    e.preventDefault(); // Prevent page from refreshing on form submit

    let profileImageUrl = ""; // Placeholder for uploaded profile image URL (if needed)

    // Validate that the user entered their name
    if (!fullName) {
      setError("Please enter your name");
      return;
    }

    // Check if the email is valid
    if (!validateEmail(email)){
      setError("Please enter a valid email address.");
      return;
    }

    // Check if password is entered
    if (!password){
      setError("Please enter the password");
      return;
    }

    // Clear any previous error
    setError("");

    // ============ API call to handle signup would go here =============
    // Example:
    // try {
    //   const response = await registerUser({ fullName, email, password, profilePic });
    //   navigate('/dashboard'); // Redirect after successful signup
    // } catch (error) {
    //   setError("Something went wrong. Try again.");
    // }
  }

  // What the component renders on the screen
  return (
    // Wrap content with the AuthLayout
    <AuthLayout>
      <div className='lg:w-[100%] h-auto md:h-full mt-10 md:mt-10 flex flex-col justify-center'>
        {/* Heading */}
        <h3 className='text-xl font-semibold text-black'>Create an account</h3>
        
        {/* Subheading */}
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>
          Join us today by entering your details below.
        </p>

        {/* Signup form */}
        <form onSubmit={handleSignUp}>

          {/* Component to choose a profile photo */}
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />

          {/* Input fields arranged in grid layout */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            
            {/* Full Name input - ERROR: was setting email by mistake, now corrected */}
            <Input
              value={fullName}
              onChange={({ target }) => setFullName(target.value)} // Corrected: setFullName
              label="Full Name"
              placeholder="John"
              type="text"
            />

            {/* Email input */}
            <Input
              value={email}
              onChange={({ target }) => setEmail(target.value)} // Updates email state
              label="Email Address"
              placeholder="john@example.com"
              type="text"
            />

            {/* Password input spanning both columns on medium+ screens */}
            <div className='col-span-2'>
              <Input
                value={password}
                onChange={({ target }) => setPassword(target.value)} // Updates password state
                label="Password"
                placeholder="Min 8 Characters"
                type="password"
              />
            </div>
          </div>

          {/* Display error message if any */}
          {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}

          {/* Submit button */}
          <button type="submit" className='btn-primary'>SIGN UP</button>

          {/* Navigation link for users who already have an account */}
          <p className='text-[13px] text-slate-800 mt-3' >
            Already have an account?{" "}
            <Link className='font-medium text-primary underline' to="/login">Login</Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  )
}

// Export the SignUp component so it can be used in other files
export default SignUp
