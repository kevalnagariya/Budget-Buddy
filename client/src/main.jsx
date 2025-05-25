// Import React's StrictMode to help detect potential problems in the app
import { StrictMode } from 'react'

// Import ReactDOM's createRoot to render the app into the DOM
import { createRoot } from 'react-dom/client'

// Import global styles (Tailwind CSS, custom styles, etc.)
import './index.css'

// Import the main App component
import App from './App.jsx'

// Find the root HTML element where the React app will be injected
const rootElement = document.getElementById('root');

// Render the App inside that root element using React 18's createRoot
createRoot(rootElement).render(
  // StrictMode is a tool that helps catch common issues and best practices during development
  <StrictMode>
    <App />
  </StrictMode>,
);
