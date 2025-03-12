import React, { useState } from 'react';
import DoctorList from '../components/DoctorList';
import DoctorForm from '../components/DoctorForm';
import { Button, Box } from '@mui/material';

const Doctors = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleEdit = (doctor) => {
    setSelectedDoctor(doctor);
    setShowForm(true);
  };

  const handleFormSuccess = () => {
    setShowForm(false);
    setSelectedDoctor(null);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Button
        variant="contained"
        onClick={() => setShowForm(!showForm)}
        sx={{ mb: 3 }}
      >
        {showForm ? 'Hide Form' : 'Add Doctor'}
      </Button>
      {showForm && (
        <DoctorForm doctor={selectedDoctor} onSuccess={handleFormSuccess} />
      )}
      <DoctorList onEdit={handleEdit} />
    </Box>
  );
};

export default Doctors;