import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import './styles.css'

import NavBar from './NavBar';
import AboutScreen from './AboutScreen';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';


const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <div className='container mx-auto sm:px-4'>
          <Routes>
            <Route path='about' element={<AboutScreen />} />
            <Route path='login' element={<LoginScreen />} />
            <Route path='/' element={<HomeScreen />} />
            <Route path='*' element={<Navigate to={`/`} />} />

          </Routes>

        </div>
      </div>
    </Router>
  );
};

export default AppRouter;
