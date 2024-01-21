// Calendar.js
import React, { useState, useEffect } from 'react';
import TimeSlot from './TimeSlot';
import SlotDetails from './SlotDetails';
import Dropdown from './Dropdown'; // Assuming you have a Dropdown component
import './Calendar.css'; // Import your Calendar component styles

function Calendar({ onSlotClick }) {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedMonthRange, setSelectedMonthRange] = useState('June - October');
  const [selectedMonth, setSelectedMonth] = useState(null);

  // Define your month ranges with start and end dates
  const monthRanges = [
    { label: 'June - October', start: '2022-06-01', end: '2022-10-31' },
    { label: 'November - March', start: '2022-11-01', end: '2023-03-31' },
    { label: 'April - May', start: '2023-04-01', end: '2023-05-31' },
    'January - February',
    'March - April',
    'May - June',
    'July - August',
    'September - October',
    'November - December'
  ];

  useEffect(() => {
    // Extract start and end dates for the selected month
    const selectedMonthInfo = monthRanges.find((range) => range.label === selectedMonthRange);

    if (selectedMonthInfo) {
      setSelectedMonth({
        start: new Date(selectedMonthInfo.start),
        end: new Date(selectedMonthInfo.end)
      });
    }
  }, [selectedMonthRange]);

  // Render the calendar based on the selected month
  const renderCalendar = () => {
    if (!selectedMonth) {
      return null;
    }

    const calendarGrid = [];
    const currentDate = new Date(selectedMonth.start);

    // Loop through each week in the month
    while (currentDate <= selectedMonth.end) {
      const weekRow = [];
      
      // Loop through each day in the week
      for (let i = 0; i < 7; i++) {
        const day = currentDate.getDate();
        const isDisabled = currentDate.getMonth() !== selectedMonth.start.getMonth();

        weekRow.push(
          <td key={day} style={{ border: "1px solid #ddd", padding: "8px", background: isDisabled ? "#f2f2f2" : "white" }}>
            {day}
            {/* Include TimeSlot component or any other content based on your needs */}
            {/* <TimeSlot day={day} onSelect={handleSlotClick} /> */}
          </td>
        );

        currentDate.setDate(day + 1);
      }

      calendarGrid.push(<tr key={currentDate}>{weekRow}</tr>);
    }

    return <tbody>{calendarGrid}</tbody>;
  };

  // Handle changing of selected month range
  const handleMonthRangeChange = (range) => {
    setSelectedMonthRange(range);
    // Here you would also handle updating the calendar view based on the selected range
  };

  return (
    <div className="calendar-container">
      <Dropdown
        options={monthRanges.map((range) => range.label)}
        value={selectedMonthRange}
        onChange={handleMonthRangeChange}
      />
      <p>Date Range: {selectedMonth && `${selectedMonth.start.toDateString()} - ${selectedMonth.end.toDateString()}`}</p>
      <table className="calendar-table">
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        {renderCalendar()}
      </table>
      <SlotDetails slot={selectedSlot} />
    </div>
  );
}

export default Calendar;
