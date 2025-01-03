import React from 'react';
import Card from '../components/Card';

function Strategies() {
    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Your Strategies</h2>
            <div className="grid grid-cols-3 gap-4">
                <Card title="Strategy 1" content="Description of Strategy 1" />
                <Card title="Strategy 2" content="Description of Strategy 2" />
                <Card title="Strategy 3" content="Description of Strategy 3" />
            </div>
        </div>
    );
}

export default Strategies;
