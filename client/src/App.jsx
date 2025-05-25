import React from 'react'

// Importing React Router components to handle routing
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Importing all page components
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Dashboard/Home";
import Income from "./pages/Dashboard/Income";
import Expense from "./pages/Dashboard/Expense";

const App = () => {
  return (
    // Wraps the entire app in a Router so routing works
    <Router>
      <Routes>
        {/* When user visits "/", check auth and redirect accordingly */}
        <Route path="/" element={<Root />} />

        {/* Auth routes for login and signup */}
        <Route path="/login" exact element={<Login />} />
        <Route path="/signUp" exact element={<SignUp />} />

        {/* Dashboard routes */}
        <Route path="/dashboard" exact element={<Home />} />
        <Route path="/income" exact element={<Income />} />
        <Route path="/expense" exact element={<Expense />} />
      </Routes>
    </Router>
  );
}

export default App;

// This component handles default redirection based on whether user is logged in
const Root = () => {
  // Check if token is present in localStorage (used to determine login status)
  const isAuthenticated = !!localStorage.getItem("token");

  // If logged in, send user to dashboard. Otherwise, go to login page.
  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
}
