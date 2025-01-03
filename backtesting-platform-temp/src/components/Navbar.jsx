import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Backtesting Platform
                </Typography>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Strategies</Button>
                <Button color="inherit">Backtests</Button>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
