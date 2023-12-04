import React, { useState } from 'react';
import './App.css';
import TimeSlot from './TimeSlot'; //separate TimeSlot component
import SlotDetails from './SlotDetails'; //separate SlotDetails component

function App() {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const hours = [...Array(16)].map((_, i) => `${i + 7}.01 - ${i + 8}.00`);
  const statuses = ['free', 'busy', 'urgent'];

  const getRandomStatus = () => statuses[Math.floor(Math.random() * statuses.length)];

  const handleSlotClick = (day, time) => {
    //called when a time slot is clicked
    const details = `Details for ${day} at ${time}`;
    setSelectedSlot({ day, time, details });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>{/* Nav control, TBA */}</div>
        <table>
          <thead>
            <tr>
              {days.map(day => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {hours.map(hour => (
              <tr key={hour}>
                {days.map(day => (
                  <TimeSlot 
                    key={day} 
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
        {/* Render SlotDetails component to show selected time slot details */}
        <SlotDetails slot={selectedSlot} />
      </header>
    </div>
  );
}

export default App;
