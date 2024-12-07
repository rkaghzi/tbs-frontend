/*import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VehicleMaintenance = ({ vehicleId }) => {
  const [schedule, setSchedule] = useState([]);
  const [newDate, setNewDate] = useState('');
  const [newNotes, setNewNotes] = useState('');

  useEffect(() => {
    fetchMaintenanceSchedule();
  }, []);

  const fetchMaintenanceSchedule = async () => {
    try {
      const response = await axios.get(`/api/vehicles/${vehicleId}/maintenance`);
      setSchedule(response.data);
    } catch (error) {
      console.error('Error fetching schedule:', error);
    }
  };

  const addMaintenanceDate = async () => {
    try {
      await axios.post(`/api/vehicles/${vehicleId}/maintenance`, {
        date: newDate,
        notes: newNotes,
      });
      fetchMaintenanceSchedule();
      setNewDate('');
      setNewNotes('');
    } catch (error) {
      console.error('Error adding date:', error);
    }
  };

  const updateStatus = async (scheduleId, status) => {
    try {
      await axios.put(`/api/vehicles/${vehicleId}/maintenance/${scheduleId}`, { status });
      fetchMaintenanceSchedule();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div>
      <h2>Maintenance Schedule</h2>
      <ul>
        {schedule.map((entry) => (
          <li key={entry._id}>
            {new Date(entry.date).toLocaleDateString()} - {entry.notes || 'No Notes'}
            <span> (Status: {entry.status}) </span>
            {entry.status === 'Scheduled' && (
              <button onClick={() => updateStatus(entry._id, 'Completed')}>Mark as Completed</button>
            )}
          </li>
        ))}
      </ul>
      <div>
        <h3>Add New Maintenance Date</h3>
        <input
          type="date"
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
        />
        <textarea
          placeholder="Notes"
          value={newNotes}
          onChange={(e) => setNewNotes(e.target.value)}
        />
        <button onClick={addMaintenanceDate}>Add</button>
      </div>
    </div>
  );
};

export default VehicleMaintenance;
*/