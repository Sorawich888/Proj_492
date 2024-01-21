// App.js
import React, { useState } from 'react';
import './App.css';
import SlotDetails from './SlotDetails';
import './calendar.css';
import MonthDropdown from './MonthDropdown';
import TimeSlot from './TimeSlot'; // Import the TimeSlot component

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const hours = [...Array(16)].map((_, i) => `${i + 7}.01 - ${i + 8}.00`);

const getRandomStatus = () => {
  const statuses = ['free', 'busy', 'urgent'];
  return statuses[Math.floor(Math.random() * statuses.length)];
};

function App() {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSlotClick = (day, time) => {
    const details = `Details for ${day} at ${time}`;
    setSelectedSlot({ day, time, details });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>{/* Nav control, TBA */}</div>
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
                    <td style={{ border: "0px" }} key={`${day}-${hour}`}>
                      <TimeSlot
                        day={day}
                        time={hour}
                        status={getRandomStatus()}
                        onSelect={handleSlotClick}
                      />
                    </td>
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
