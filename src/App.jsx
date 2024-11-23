import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage'; 

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username, password) => {
    // Hardcoded credentials for demonstration purposes
    const correctUsername = 'user';
    const correctPassword = 'password';

    if (username === correctUsername && password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect username or password. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <div>
                <h1>Welcome to the App!</h1>
                <button onClick={handleLogout}>Logout</button> 
                {/* Your main application content goes here */}
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/login"
          element={<LoginPage onLogin={handleLogin} />} 
        />
      </Routes>
    </Router>
  );
};

export default App;
