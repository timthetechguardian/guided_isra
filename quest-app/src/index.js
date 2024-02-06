import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Add the missing import statement for BrowserRouter
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Login from './pages/Login';
import ProfilePage from './pages/Profile';
import reportWebVitals from './reportWebVitals';

export default function QuestApp() {
  return(
      <BrowserRouter> 
        <Routes>
          <Route path="*" element={<Login/>} />
          <Route path="profile" element={<ProfilePage/>} />
        </Routes>
      </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<QuestApp />);

reportWebVitals();
