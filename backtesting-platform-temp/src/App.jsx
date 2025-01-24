import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Strategies from './pages/Strategies';
import Backtests from './pages/Backtests';
import Login from './pages/Login';
import Quantum from './pages/Quantum';
import { Box } from '@mui/material';

function App() {
    return (
        <Router>
            <Box sx={{ width: '100vw', height: '100vh', padding: '2rem', boxSizing: 'border-box' }}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/strategies" element={<Strategies />} />
                    <Route path="/backtests" element={<Backtests />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/quantum" element={<Quantum />} />
                </Routes>
            </Box>
        </Router>
    );
}

export default App;
