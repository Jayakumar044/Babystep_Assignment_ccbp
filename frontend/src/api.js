import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getDoctors = () => axios.get(`${API_URL}/doctors`);
export const createDoctor = (doctor) => axios.post(`${API_URL}/doctors`, doctor);
export const updateDoctor = (id, doctor) => axios.put(`${API_URL}/doctors/${id}`, doctor);
export const deleteDoctor = (id) => axios.delete(`${API_URL}/doctors/${id}`);

export const getAppointments = () => axios.get(`${API_URL}/appointments`);
export const createAppointment = (appointment) => axios.post(`${API_URL}/appointments`, appointment);
export const updateAppointment = (id, appointment) => axios.put(`${API_URL}/appointments/${id}`, appointment);
export const deleteAppointment = (id) => axios.delete(`${API_URL}/appointments/${id}`);