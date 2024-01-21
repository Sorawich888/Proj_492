// Calendar.js
import React, { useState } from 'react';
import TimeSlot from './TimeSlot';
import SlotDetails from './SlotDetails';
import MonthDropdown from './MonthDropdown'; // Import the MonthDropdown component you created
import './Calendar.css'; // Import your Calendar component styles

function Calendar() {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedMonthRange, setSelectedMonthRange] = useState('June - October');

  // Define your month ranges
  const monthRanges = [
    'January - February',
    'March - April',
    'May - June',
    'July - August',
    'September - October',
    'November - December'
  ];

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const times = [...Array(16)].map((_, i) => `${7 + i}.01 - ${8 + i}.00`);

  const handleSlotClick = (day, time) => {
    const details = `Details for ${day} at ${time}`;
    setSelectedSlot({ day, time, details });
  };

  // Handle changing of selected month range
  const handleMonthRangeChange = (range) => {
    setSelectedMonthRange(range);
    // Here you would also handle updating the calendar view based on the selected range
  };

  return (
    <div className="calendar-container">
      <Dropdown
        options={monthRanges}
        value={selectedMonthRange}
        onChange={handleMonthRangeChange}
      />
      <table className="calendar-table">
        {/* ... rest of your table */}
      </table>
      <SlotDetails slot={selectedSlot} />
    </div>
  );
}

export default Calendar;
