import React, { useEffect, useState } from 'react';
import { getDoctors, deleteDoctor } from '../api';
import { Button, Card, CardContent, Typography, Grid } from '@mui/material';

const DoctorList = ({ onEdit }) => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await getDoctors();
      setDoctors(response.data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoctor(id);
      fetchDoctors(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting doctor:', error);
    }
  };

  return (
    <Grid container spacing={3}>
      {doctors.map((doctor) => (
        <Grid item key={doctor._id} xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">{doctor.name}</Typography>
              <Typography variant="body2">
                Working Hours: {doctor.workingHours.start} - {doctor.workingHours.end}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => onEdit(doctor)}
                sx={{ mt: 2, mr: 2 }}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => handleDelete(doctor._id)}
                sx={{ mt: 2 }}
              >
                Delete
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DoctorList;