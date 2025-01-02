import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <h1>Backtesting Platform</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/strategies">Strategies</Link></li>
                <li><Link to="/backtests">Backtests</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
