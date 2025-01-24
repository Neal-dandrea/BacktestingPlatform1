import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Home = () => {
    return (
        
            <Box 
                display="flex" 
                justifyContent="center" 
                alignItems="center" 
                height="100vh"
                flexDirection="column"
                
            >
                <Typography variant="h4" color="secondary" gutterBottom>
                    Welcome to the Backtesting Platform
                </Typography>
                <Typography variant="body1" color="textSecondary">
                    Optimize your trading strategies with ease.
                </Typography>
                <Typography>
                    Matt is a goon. He always be gooning. 
                </Typography>

            </Box>
        
    );
}

export default Home;
