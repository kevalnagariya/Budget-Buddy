// Import necessary packages and components
import React, { useState } from 'react' // React and its useState hook for managing component state
import AuthLayout from '../../components/Layouts/AuthLayout' // Layout wrapper for authentication pages
import { Link, useNavigate } from "react-router-dom"; // Link for navigation and useNavigate to programmatically redirect
import Input from '../../components/Inputs/input'; // Reusable input component
import { validateEmail } from '../../utils/helper'; // Utility function to validate email format

// Define the Login component
const Login = () => {
  // Define state variables for storing user input and error messages
  const [email, setEmail] = useState(""); // To store the user's email input
  const [password, setPassword] = useState(""); // To store the user's password input
  const [error, setError] = useState(null); // To store any error message to show to the user

  // Get the navigation function from React Router so we can redirect users
  const navigate = useNavigate();

  // This function handles what happens when the user submits the login form
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevents the browser from refreshing the page on form submission

    // Validate email format using helper function
    if (!validateEmail(email)){
      setError("Please enter a valid email address"); // Show error if email is invalid
      return; // Stop further execution
    }

    // Check if password field is empty
    if (!password){
      setError("Please enter the password"); // Show error if password is empty
      return;
    }

    // Clear any previous error
    setError("");

    // ========== Here you would typically add your login API logic ==========
    // Example (not implemented):
    // try {
    //   const response = await loginUser(email, password);
    //   navigate('/dashboard'); // Redirect to dashboard if login succeeds
    // } catch (err) {
    //   setError("Invalid email or password");
    // }
  }

  // JSX that will be displayed in the browser
  return (
    // Use AuthLayout to wrap the login content so it shares a consistent layout with other auth pages
    <AuthLayout>
      {/* Main container for the login form content */}
      <div className='lg:w-[70%] h=3/4 md:h-full flex flex-col justify-center'>
        {/* Heading */}
        <h3 className='text-xl font-semibold text-black'>Welcome Back</h3>
        {/* Subheading */}
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>
          Please enter your details to log in
        </p>

        {/* Login form starts here */}
        <form onSubmit={handleLogin}>
          {/* Email input field */}
          <Input
            value={email} // Binds the input field to email state
            onChange={({ target }) => setEmail(target.value)} // Updates state as user types
            label="Email Address"
            placeholder="john@example.com"
            type="text"
          />

          {/* Password input field */}
          <Input
            value={password} // Binds the input field to password state
            onChange={({ target }) => setPassword(target.value)} // Updates state as user types
            label="Password"
            placeholder="Min 8 Characters"
            type="password"
          />

          {/* Show an error message if any validation failed */}
          {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}

          {/* Login button */}
          <button type="submit" className='btn-primary'>Login</button>

          {/* Message and link for users who don't have an account */}
          <p className='text-[13px] text-slate-800 mt-3'>
            Don't have an account?{" "}
            <Link className='font-medium text-primary underline' to="/signup">SignUp</Link>
          </p>

        </form>
      </div>
    </AuthLayout>
  )
}

// Export the Login component so it can be used in other parts of the app
export default Login
