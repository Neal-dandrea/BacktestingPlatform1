import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Strategies from './pages/Strategies';
import Backtests from './pages/Backtests';
import Login from './pages/Login';
import Quantum from './pages/Quantum'


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/strategies" element={<Strategies />} />
                <Route path="/backtests" element={<Backtests />} />
                <Route path="/login" element={<Login />} />
                <Route path="/quantum" element={<Quantum />} />

            </Routes>
        </Router>
    );
}

export default App;
