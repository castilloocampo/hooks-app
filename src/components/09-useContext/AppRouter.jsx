import React from 'react';
import PropTypes from 'prop-types';
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

        <Routes>
          <Route path='about' element={<AboutScreen />} />
          <Route path='login' element={<LoginScreen />} />
          <Route path='/' element={<HomeScreen />} />
          <Route path='*' element={<Navigate to={`/`} />} />

        </Routes>
      </div>
    </Router>
  );
};


AppRouter.propTypes = {

};


export default AppRouter;
