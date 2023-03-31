import React from 'react';
import { Box } from '@mui/material';
import './App1.css';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
// import Footer from '../components/Footer';
// import ExerciseDetail from '../pages/ExerciseDetail';

const App1 = () => (
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Navbar />
    <Home />
    {/* <ExerciseDetail/> */}
    {/* <Footer/> */}
  </Box>
);

export default App1;