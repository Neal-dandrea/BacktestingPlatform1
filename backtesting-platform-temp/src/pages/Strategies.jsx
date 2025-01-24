import React from 'react';
import Card from '../components/Card';
import { Container, Typography } from '@mui/material';

function Strategies() {
    return (
        <div>
            <Typography variant="h4" component="h2" gutterBottom align="center">
                Your Strategies
            </Typography>
            <div className="grid grid-cols-3 gap-4">
                <Card title="Strategy 1" content="Description of Strategy 1" />
                <Card title="Strategy 2" content="Description of Strategy 2" />
                <Card title="Strategy 3" content="Description of Strategy 3" />
            </div>
        </div>
    );
}

export default Strategies;
