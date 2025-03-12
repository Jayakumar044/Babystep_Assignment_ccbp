import React, { useEffect, useState } from 'react'; // Import useEffect
import { getAvailableSlots } from '../api';

const CalendarView = ({ doctorId, date, onSelectSlot }) => {
  const [slots, setSlots] = useState([]);

  // Fetch available slots when doctorId or date changes
  useEffect(() => {
    if (doctorId && date) {
      getAvailableSlots(doctorId, date)
        .then((response) => setSlots(response.data))
        .catch((error) => console.error(error));
    }
  }, [doctorId, date]); // Add doctorId and date as dependencies

  return (
    <div className="calendar-view">
      <h2>Available Slots</h2>
      <div className="slots-container">
        {slots.map((slot, index) => (
          <button key={index} className="slot-button" onClick={() => onSelectSlot(slot)}>
            {new Date(slot).toLocaleTimeString()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;