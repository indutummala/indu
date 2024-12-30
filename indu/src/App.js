import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './login-page/login-screen'; // Adjust based on export type and path

function App() {
  return (
    <Router>
      <div className="App font-sans">
        <Routes>
          <Route path="/loginscreen" element={<LoginScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
