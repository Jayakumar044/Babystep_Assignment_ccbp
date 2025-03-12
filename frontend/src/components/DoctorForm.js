import React, { useState, useEffect } from 'react';
import { createDoctor, updateDoctor } from '../api';
import { TextField, Button, Box } from '@mui/material';

const DoctorForm = ({ doctor, onSuccess }) => {
  const [name, setName] = useState(doctor ? doctor.name : '');
  const [workingHours, setWorkingHours] = useState(
    doctor ? doctor.workingHours : { start: '', end: '' }
  );

  useEffect(() => {
    if (doctor) {
      setName(doctor.name);
      setWorkingHours(doctor.workingHours);
    }
  }, [doctor]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const doctorData = { name, workingHours };

    try {
      if (doctor) {
        await updateDoctor(doctor._id, doctorData);
      } else {
        await createDoctor(doctorData);
      }
      onSuccess();
    } catch (error) {
      console.error('Error saving doctor:', error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <TextField
        label="Start Time"
        value={workingHours.start}
        onChange={(e) => setWorkingHours({ ...workingHours, start: e.target.value })}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <TextField
        label="End Time"
        value={workingHours.end}
        onChange={(e) => setWorkingHours({ ...workingHours, end: e.target.value })}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained">
        {doctor ? 'Update Doctor' : 'Add Doctor'}
      </Button>
    </Box>
  );
};

export default DoctorForm;