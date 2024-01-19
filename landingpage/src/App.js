// App.js
import React, { useState } from 'react';
import './App.css';
import TimeSlot from './TimeSlot';
import SlotDetails from './SlotDetails';
import MonthDropdown from './MonthDropdown';

function App() {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const hours = [...Array(16)].map((_, i) => `${i + 7}.01 - ${i + 8}.00`);
  const statuses = ['free', 'busy', 'urgent'];

  const getRandomStatus = () => statuses[Math.floor(Math.random() * statuses.length)];

  const handleSlotClick = (day, time) => {
    const details = `Details for ${day} at ${time}`;
    setSelectedSlot({ day, time, details });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <MonthDropdown />
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th></th>
                {days.map(day => (
                  <th key={day}>{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {hours.map(hour => (
                <tr key={hour}>
                  <td>{hour}</td>
                  {days.map(day => (
                    <TimeSlot
                      key={`${day}-${hour}`}
                      day={day}
                      time={hour}
                      status={getRandomStatus()}
                      onSelect={handleSlotClick}
                    />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <SlotDetails slot={selectedSlot} />
      </header>
    </div>
  );
}

export default App;
