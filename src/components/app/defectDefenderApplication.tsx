import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './defectDefenderApplication.scss';
import LandingPage from '../landingPage/landingPage';
import InitiativesPage from '../initiativesPage/initiativesPage';
import Navbar from '../navbar/navbar';

const DefectDefenderApplication: React.FC = () => {
  return (
    <Router>
      <div id="defect-defender">
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/initiatives/:id' element={<InitiativesPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default DefectDefenderApplication;
