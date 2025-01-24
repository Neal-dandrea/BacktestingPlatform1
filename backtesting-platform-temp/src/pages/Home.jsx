import React from 'react';
import { Box, Typography } from '@mui/material';

const Home = () => {
    return (
        <Container maxWidth="lg" sx={{ padding: '2rem' }}>
            <div>
            <Box 
                display="flex" 
                justifyContent="center" 
                alignItems="center" 
                height="100vh"
                flexDirection="column"
            >
                <Typography variant="h4" gutterBottom>
                    Welcome to the Backtesting Platform
                </Typography>
                <Typography variant="h6">
                    Optimize your trading strategies with ease.
                </Typography>
            </Box>
            </div>
        </Container>
    );
}

export default Home;
