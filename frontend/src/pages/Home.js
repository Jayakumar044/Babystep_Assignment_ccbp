import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Full screen height
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
          padding: '40px',
          borderRadius: '10px',
        }}
      >
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
          Welcome to Babysteps Appointment System
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
          Book appointments with the best doctors for prenatal care.
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to="/doctors"
          size="large"
          sx={{
            backgroundColor: '#007bff',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#0056b3',
            },
          }}
        >
          Check Doctor Appointments
        </Button>
      </Box>
    </Box>
  );
};

export default Home;