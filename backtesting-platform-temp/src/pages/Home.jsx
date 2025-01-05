import React from 'react';
import Button from '../components/Button';

function Home() {
    return (
        <div className="p-8 text-center">
            <h2 className="text-2xl font-bold">Welcome to the Backtesting Platform!</h2>
            <p className="mt-4">Build, test, and refine your trading strategies with ease.</p>
            <Button className="mt-6">Get Started</Button>
        </div>
    );
}

export default Home;
