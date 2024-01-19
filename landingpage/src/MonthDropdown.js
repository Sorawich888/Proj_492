import React, { useState } from 'react';

const MonthDropdown = () => {
  const [selectedRange, setSelectedRange] = useState('');

  const handleRangeChange = (event) => {
    setSelectedRange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="monthRange">Select Month Range: </label>
      <select id="monthRange" value={selectedRange} onChange={handleRangeChange}>
        <option value="">Select Range</option>
        <option value="June-October">June - October</option>
        <option value="November-March">November - March</option>
        <option value="April-May">April - May</option>
      </select>

      {selectedRange && (
        <p>You have selected the range: {selectedRange}</p>
      )}
    </div>
  );
};

export default MonthDropdown;
