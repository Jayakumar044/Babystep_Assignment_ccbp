import React, { useEffect, useState } from 'react';
import { getAppointments, deleteAppointment } from '../api';
import { Button, Card, CardContent, Typography, Grid, Box } from '@mui/material';

const AppointmentList = ({ onEdit }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await getAppointments();
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteAppointment(id);
      fetchAppointments(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
  };

  if (appointments.length === 0) {
    return (
      <Typography variant="h6" align="center" sx={{ mt: 4 }}>
        No appointments found. Book an appointment now!
      </Typography>
    );
  }

  return (
    <Grid container spacing={3}>
      {appointments.map((appointment) => (
        <Grid item key={appointment._id} xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">{appointment.patientName}</Typography>
              <Typography variant="body2">
                Doctor: {appointment.doctorId ? appointment.doctorId.name : 'No doctor assigned'}
              </Typography>
              <Typography variant="body2">
                Date: {new Date(appointment.date).toLocaleString()}
              </Typography>
              <Typography variant="body2">
                Type: {appointment.appointmentType}
              </Typography>
              <Typography variant="body2">
                Notes: {appointment.notes}
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => onEdit(appointment)}
                  sx={{ mr: 2 }}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDelete(appointment._id)}
                >
                  Delete
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default AppointmentList;