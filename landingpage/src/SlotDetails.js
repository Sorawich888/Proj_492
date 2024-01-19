import React from 'react';

const SlotDetails = ({ slot }) => {
  // Check if the slot is not null
  if (!slot) {
    // If there's no slot selected, don't display anything
    return null;
  }

  // Render the details of the selected slot
  return (
    <div className="slot-details">
      <h2>Slot Details</h2>
      <p><strong>Day:</strong> {slot.day}</p>
      <p><strong>Time:</strong> {slot.time}</p>
      <p><strong>Status:</strong> {slot.status}</p>
    </div>
  );
};

export default SlotDetails;
