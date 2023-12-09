// Calendar.js
import React, { useState } from 'react';
import TimeSlot from './TimeSlot';
import SlotDetails from './SlotDetails';

function Calendar() {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const times = [...Array(16)].map((_, i) => `${7 + i}.01 - ${8 + i}.00`);

  const handleSlotClick = (day, time) => {
    const details = `Details for ${day} at ${time}`;
    setSelectedSlot({ day, time, details });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {days.map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {times.map(time => (
            <tr key={time}>
              {days.map(day => (
                <TimeSlot key={day} day={day} time={time} onSelect={handleSlotClick} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <SlotDetails slot={selectedSlot} />
    </div>
  );
}

export default Calendar;
