// PopupDetails.js
import React from 'react';
import './PopupDetails.css'; // Import the CSS file for PopupDetails

const PopupDetails = ({ trainPassed, avgWaitingTime, events, onClose }) => {
  return (
    <div className="popup-container" onClick={onClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <p>Train Passed: {trainPassed}</p>
        <p>Avg. Waiting Time: {avgWaitingTime}</p>
        <p>Events: {events}</p>
        <div className="icon"></div> {/* Add your icon content here */}
        <div className="vector"></div> {/* Add your vector content here */}
      </div>
    </div>
  );
};

export default PopupDetails;
