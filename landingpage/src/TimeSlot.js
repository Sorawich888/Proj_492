import React, { useState } from 'react';
import PopupDetails from './PopupDetails';
import './TimeSlot.css';


const TimeSlot = ({ day, time, status, onSelect }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSlotClick = () => {
    onSelect(day, time);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={`timeslot ${status}`} onClick={handleSlotClick}>
      <p className="day">{day}</p>
      <p>{time}</p>
      {showPopup && (
        <PopupDetails
          trainPassed="ABC123"
          avgWaitingTime="5 minutes"
          events="Event 1, Event 2"
          onClose={closePopup}
        />
      )}
    </div>
  );
};

export default TimeSlot;
