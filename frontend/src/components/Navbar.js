import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Babysteps Appointment System
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/doctors">Doctors</Button>
        <Button color="inherit" component={Link} to="/appointments">Appointments</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;