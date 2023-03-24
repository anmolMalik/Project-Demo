import React from 'react';

// import { Route, Routes, } from 'react-router-dom';
import { Box } from '@mui/material';

import './App1.css';

import Home from '../pages/Home';
import Navbar from '../components/Navbar';
import Footer1 from '../components/Footer1';


const App1 = () => (
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Navbar />
    <Home />
    <Footer1 />
  </Box>
);

export default App1;