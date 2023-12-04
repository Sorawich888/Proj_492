// TimeSlot.js
import React from 'react';

const TimeSlot = ({ day, time, status, onSelect }) => {
  // Define the click handler that calls onSelect with the relevant details
  const handleClick = () => {
    onSelect(day, time, status);
  };

  // Return the JSX for the time slot element, including event handlers and styling
  return (
    <td className={`time-slot ${status}`} onClick={handleClick}>
      {time}
    </td>
  );
};

export default TimeSlot;
