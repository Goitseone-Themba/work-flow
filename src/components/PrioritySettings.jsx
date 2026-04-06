// ./src/components/PrioritySettings.jsx

import React, { useState } from 'react';
import './PrioritySettings.css';

const PrioritySettings = ({ tasks, setTasks }) => {
  const handlePriorityChange = (index, newPriority) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].priority = newPriority;
    setTasks(updatedTasks);
  };

  return (
    <div className="priority-settings">
      <h2>Priority Settings</h2>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.name}</td>
              <td>
                <select 
                  value={task.priority} 
                  onChange={(e) => handlePriorityChange(index, e.target.value)}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PrioritySettings;
