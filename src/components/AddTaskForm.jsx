import React, { useState } from 'react';
import './AddTaskForm.css';

const AddTaskForm = () => {
  const [task, setTask] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [showReminder, setShowReminder] = useState(false);
  const [showGroup, setShowGroup] = useState(false);

  const handleAddTask = () => {
    // Handle adding the task (to be implemented)
  };

  return (
    <div className="task-container">
      <h2>Add Task</h2>
      <div className="task-input-row">
        <input 
          type="text" 
          placeholder="Enter task here..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="add-button" onClick={handleAddTask}>+</button>
      </div>

      <div className="task-action-row">
        <span className="icon" onClick={() => setShowCalendar(!showCalendar)}>📅</span>
        <span className="icon" onClick={() => setShowReminder(!showReminder)}>⏰</span>
        <span className="icon" onClick={() => setShowGroup(!showGroup)}>👥</span>
        <button className="add-task-button" onClick={handleAddTask}>Add</button>
      </div>

      <div className="task-settings">
        {showCalendar && <div>Calendar Component (to be implemented)</div>}
        {showReminder && <div>Reminder Component (to be implemented)</div>}
        {showGroup && <div>Group Component (to be implemented)</div>}
      </div>
    </div>
  );
};

export default AddTaskForm;
