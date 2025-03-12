import React, { useState } from 'react';
import AppointmentList from '../components/AppointmentList';
import AppointmentForm from '../components/AppointmentForm';
import { Button, Box, Typography } from '@mui/material';

const Appointments = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const handleEdit = (appointment) => {
    setSelectedAppointment(appointment);
    setShowForm(true);
  };

  const handleFormSuccess = () => {
    setShowForm(false);
    setSelectedAppointment(null);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Appointments
      </Typography>
      <Button
        variant="contained"
        onClick={() => setShowForm(!showForm)}
        sx={{ mb: 3 }}
      >
        {showForm ? 'Hide Form' : 'Book Appointment'}
      </Button>
      {showForm && (
        <AppointmentForm
          appointment={selectedAppointment}
          onSuccess={handleFormSuccess}
        />
      )}
      <AppointmentList onEdit={handleEdit} />
    </Box>
  );
};

export default Appointments;