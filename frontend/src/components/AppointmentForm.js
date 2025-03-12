import React, { useState, useEffect } from 'react';
import { createAppointment, updateAppointment } from '../api';
import { TextField, Button, Box, Typography, MenuItem } from '@mui/material';

const AppointmentForm = ({ appointment, onSuccess }) => {
  const [doctorId, setDoctorId] = useState(appointment ? appointment.doctorId : '');
  const [date, setDate] = useState(appointment ? new Date(appointment.date).toISOString().slice(0, 16) : '');
  const [duration, setDuration] = useState(appointment ? appointment.duration : 30);
  const [appointmentType, setAppointmentType] = useState(appointment ? appointment.appointmentType : 'Routine Check-Up');
  const [patientName, setPatientName] = useState(appointment ? appointment.patientName : '');
  const [notes, setNotes] = useState(appointment ? appointment.notes : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const appointmentData = {
      doctorId,
      date: new Date(date).toISOString(),
      duration,
      appointmentType,
      patientName,
      notes,
    };

    try {
      if (appointment) {
        await updateAppointment(appointment._id, appointmentData);
      } else {
        await createAppointment(appointmentData);
      }
      onSuccess();
    } catch (error) {
      console.error('Error saving appointment:', error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom>
        {appointment ? 'Edit Appointment' : 'Book Appointment'}
      </Typography>
      <TextField
        label="Doctor ID"
        value={doctorId}
        onChange={(e) => setDoctorId(e.target.value)}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <TextField
        label="Date and Time"
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        fullWidth
        required
        sx={{ mb: 2 }}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="Duration (minutes)"
        type="number"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <TextField
        label="Appointment Type"
        select
        value={appointmentType}
        onChange={(e) => setAppointmentType(e.target.value)}
        fullWidth
        required
        sx={{ mb: 2 }}
      >
        <MenuItem value="Routine Check-Up">Routine Check-Up</MenuItem>
        <MenuItem value="Ultrasound">Ultrasound</MenuItem>
        <MenuItem value="Consultation">Consultation</MenuItem>
      </TextField>
      <TextField
        label="Patient Name"
        value={patientName}
        onChange={(e) => setPatientName(e.target.value)}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <TextField
        label="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        fullWidth
        multiline
        rows={4}
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained">
        {appointment ? 'Update Appointment' : 'Book Appointment'}
      </Button>
    </Box>
  );
};

export default AppointmentForm;